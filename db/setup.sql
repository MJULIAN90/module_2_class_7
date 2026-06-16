CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  species VARCHAR(100) NOT NULL,
  habitat VARCHAR(150),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO animals (name, species, habitat) VALUES
  ('León', 'Panthera leo', 'Sabana africana'),
  ('Delfín', 'Delphinus delphis', 'Océano'),
  ('Águila', 'Aquila chrysaetos', 'Montañas'),
  ('Elefante', 'Loxodonta africana', 'Sabana y bosques'),
  ('Pingüino', 'Aptenodytes forsteri', 'Antártida');


