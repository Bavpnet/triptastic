from fastapi.applications import FastAPI

from .routers.user import users_router
from .routers.place import places_router
from .routers.category import category_router
from .routers.collection import collections_router


def get_app() -> FastAPI:
    app = FastAPI()

    app.include_router(users_router)
    app.include_router(places_router)
    app.include_router(category_router)
    app.include_router(collections_router)
    return app
