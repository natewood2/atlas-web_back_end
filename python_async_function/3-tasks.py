#!/usr/bin/env python3
"""
more and more importing but the same stuff?
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    a little confusing but makes sense. to create a task to wait a random
    about of time
    """
    return asyncio.create_task(wait_random(max_delay))
