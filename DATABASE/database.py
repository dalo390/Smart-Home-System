# STL
import asyncio
import os
import sys
import uuid

# PDM
import yaml


def load_yml_file(file: str) -> dict:
    if not os.path.isfile(file):
        raise FileNotFoundError
    with open(file, "r") as _file:
        return yaml.full_load(_file)


class Info_Populator:
    def __init__(self, **kwargs):
        self.db = None

    async def add_sensor_information(self, item):
        sensor_uuid = str(uuid.uuid4())
        status = ""
        name = ""
        usage = ""
        assert self.db is not None
        await self.db.execute(
            """INSERT INTO sensor
                (id, status, name, usage)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT DO NOTHING""",
            sensor_uuid,
            status,
            name,
            usage,
        )
        return True

    async def add_temperature_information(self, item):
        temperature_id = str(uuid.uuid4())
        status = ""
        location = ""
        digits = ""
        assert self.db is not None
        await self.db.execute(
            """INSERT INTO temperature
                (id, status, name, usage)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT DO NOTHING""",
            temperature_id,
            status,
            location,
            digits,
        )
        return True


def main():
    config = load_yml_file("./local_config.yml")
    loop = asyncio.get_event_loop()

    populator = Info_Populator(config=config, loop=loop)
    # TODO: best way to pass info?
    loop.run_until_complete(populator.add_information())
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        sys.exit()


if __name__ == "__main__":
    main()
