#!/usr/bin/env python3
"""
importing more stuff!
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    a simple function to track time
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    total = time.time() - start
    return total / n
