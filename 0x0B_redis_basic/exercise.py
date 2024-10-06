#!/usr/bin/env python3
"""
Creating a Cache class that store a Redis client
through a private variable name
"""
import functools
import redis
import uuid
from typing import Union, Callable, Optional


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
    