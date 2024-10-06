#!/usr/bin/env python3
"""
Creating a Cache class that store a Redis client
through a private variable name
"""
import functools
import redis
import uuid
from typing import Union, Callable, Optional


def call_history(method: Callable) -> Callable:
    """
    stores history of input and output
    """
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """
        tracking input and output
        """
        input_key = method.__qualname__ + ":inputs"
        output_key = method.__qualname__ + ":outputs"

        self._redis.rpush(input_key, str(args))

        output = method(self, *args, **kwargs)

        self._redis.rpush(output_key, str(output))
        return output

    return wrapper

def count_calls(method: Callable) -> Callable:
    """
    decorator to count
    """
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """
        wrapper function 
        """
        key = method.__qualname__
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


class Cache:
    """
    Cache Class
    """
    def __init__(self):
        """
        Initialization for Redis with a db flush
        """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        Stores data in Redis and returns a key in string format
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[str, bytes, int, None]:
        """
        retrieve data from Redis
        """
        data = self._redis.get(key)
        if data is None:
            return None
        if fn is not None:
            return fn(data)
        return data

    def get_str(self, key: str) -> Optional[str]:
        """
        retrieve data from Redis and automatically
        convert it to a string
        """
        return self.get(key, lambda x: x.decode('utf-8') if isinstance(x, bytes) else x)

    def get_int(self, key: str) -> Optional[int]:
        """
        fetches from redis and converts to integer
        """
        return self.get(key, lambda x:
                        int(x) if isinstance(x, bytes) else x)

    def get_call_history(self, method_name: str) -> dict:
        """
        fetch input and output
        """
        inputs_key = method_name + ":inputs"
        outputs_key = method_name + ":outputs"

        inputs = self._redis.lrange(inputs_key, 0, -1)
        outputs = self._redis.lrange(outputs_key, 0, -1)

        return {
            "inputs": [inp.decode('utf-8') for inp in inputs],
            "outputs": [out.decode('utf-8') for out in outputs],
        }
