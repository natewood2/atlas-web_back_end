#!/usr/bin/env python3
"""
Mongo Module
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new school
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
