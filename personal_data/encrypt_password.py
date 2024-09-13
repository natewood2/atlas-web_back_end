#!/usr/bin/env python3
"""
using encryption library to return hashed strong
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """
    Hashes a password using the bcrypt library.
    """
    encrypted_password = bcrypt.hashpw(password.encode('utf-8'),
                                       bcrypt.gensalt())
    return encrypted_password


def is_valid(hashed_password: bytes, password: str) -> bool:
    """
    Validate that the provided password matches the hashed password
    using BOOL
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
