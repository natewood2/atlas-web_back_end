#!/usr/bin/env python3
"""
Authentication Class
"""
from flask import request
from typing import List, TypeVar
import os


class Auth:
    """
    Class for Authentication Logic
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Method that require used authentication.
        """
        if path is None:
            return True

        if excluded_paths is None or not excluded_paths:
            return True

        path = path.rstrip('/') + '/'

        for excluded_path in excluded_paths:
            if excluded_path.endswith('*'):
                if path.startswith(excluded_path[:-1]):
                    return False
            elif path == excluded_path:
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """
        Gets the authorization header from the request.
        """
        if request is None:
            return None
        return request.headers.get('Authorization', None)

    def current_user(self, request=None) -> TypeVar('User'):
        """
        Gets the current user.
        """
        return None

    def session_cookie(self, request=None):
        """
        🍪's on request
        """
        if request is None:
            return None
        session_name = os.getenv('SESSION_NAME')
        return request.cookies.get(session_name)
