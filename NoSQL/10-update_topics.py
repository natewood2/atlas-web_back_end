#!/usr/bin/env python3
"""
Update topic module
"""


def update_topics(mongo_collection, name, topics):
    """
    Updating topic based on name
    """
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
