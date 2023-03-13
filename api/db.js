import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: "db.vgzkcekeupxajndozrve.supabase.co",
  // port: 5432,
  user: "postgres",
  password: "triwulandari3456",
  database: "postgres",
});

await client.connect();
console.log("Terhubung ke basis data.");
