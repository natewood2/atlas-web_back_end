#!/usr/bin/env python3
"""
Creating a Cache class that store a Redis client
through a private variable name
"""
import redis
import uuid
from typing import Union


class Cache:
    """
    Cache Class
    """
    def __init__(self):
        """
        initialization for redis with a db flush
        """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        this returns a key in a str no matter the data type
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
