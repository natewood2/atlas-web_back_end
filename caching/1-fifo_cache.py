#!/usr/bin/env python3
"""
Imports need for class.
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    FIFO Caching:
        - Add iteming using FIFO algo
        - discard oldest key
    """
    def __init__(self):
        super().__init__()
        self.key_order = []

    def put(self, key, item):
        """
        Assigns the key with the item
        """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.cache_data[key] = item
        else:
            self.cache_data[key] = item
            self.key_order.append(key)

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            old_key = self.key_order.pop(0)
            del self.cache_data[old_key]
            print(f"DISCARD: {old_key}")

    def get(self, key):
        """
        Gets a item by the key fom entire cache
        """
        if key is None:
            return None
        return self.cache_data.get(key, None)
