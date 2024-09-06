#!/usr/bin/env python3
"""
Importing from the Main Caching Class
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    Documenting the Class that return strings.
    """
    def __init__(self):
        super().__init__()
        self.cache_data = {}

    def put(self, key, item):
        """
        Assigns the key with the item
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """
        Return the output from the attaching key
        """
        return self.cache_data.get(key, None)
