#!/usr/bin/env python3
"""
Module for listing mongo docs in collection
"""


def list_all(mongo_collection):
    """
    Lists all docs
    """
    return mongo_collection.find()
