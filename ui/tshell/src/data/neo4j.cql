USING PERIODIC COMMIT 
LOAD CSV with headers from "" as row
create(:NeoSkill {id: row.sk_id, name: row.sk_name, description: row.sk_description, createdOn: row.sk_creation_date, active: row.sk_active, image:row.sk_image});

USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "file:products.csv" AS row
CREATE (:Topic {name: row.tp_name, id: row.tp_id});
