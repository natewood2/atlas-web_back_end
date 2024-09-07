#!/usr/bin/env python3
"""
Imports need for class.
LRU Cache, algo.

"""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """
    LRU Caching:
        - Add iteming using LRU algo
        this algorithm is based on the 
        strategy that whenever a page fault 
        occurs, the least recently used page 
        will be replaced with a new page.
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
            self.key_order.remove(key)
            self.key_order.append(key)
        else:
            self.cache_data[key] = item
            self.key_order.append(key)

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            last_key = self.key_order.pop(0)
            del self.cache_data[last_key]
            print(f"DISCARD: {last_key}")

    def get(self, key):
        """
        Gets a item by the key fom entire cache
        """
        if key is None:
            return None

        if key in self.cache_data:
            self.key_order.remove(key)
            self.key_order.append(key)
            return self.cache_data[key]
        return
