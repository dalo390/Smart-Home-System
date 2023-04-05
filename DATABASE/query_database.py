# PDM
import psycopg2


class Info_Fetcher:
    def __init__(self, cursor):
        self.db = cursor

    def date_query(self):
        sql = "select * from date_data"
        self.db.execute(sql)
        rows = self.db.fetchall()
        return rows

    def temperature_query(self):
        sql = "select * from temperature"
        self.db.execute(sql)
        rows = self.db.fetchall()
        return rows

    def sensor_query(self):
        sql = "select * from sensor_two"
        self.db.execute(sql)
        rows = self.db.fetchall()
        return rows


def main():
    conn = psycopg2.connect(
        host="138.26.48.83",
        database="Team8DB",
        user="Team8",
        password="Team8",
    )
    cur = conn.cursor()

    populator = Info_Fetcher(cur)
    populator.temperature_query()
    populator.sensor_query()
    populator.date_query()

    conn.commit()
    cur.close()
    conn.close()


if __name__ == "__main__":
    main()
