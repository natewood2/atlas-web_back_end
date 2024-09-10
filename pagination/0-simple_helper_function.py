#!/usr/bin/env python3


def index_range(page: int, page_size: int) -> tuple:
    """
    First pagination problem.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)