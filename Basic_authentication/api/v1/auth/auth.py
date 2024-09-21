#!/usr/bin/env python3
""" Authentication Class
"""
from flask import request 


class Auth:
    """ Class for Authentication Logic
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Method that require used authentication.
        """
        return False

    def authorization_header(self, request=None) -> str:
        """
        Gets the authorization header from the request.
        """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """
        Gets the current user.
        """
        return None
    