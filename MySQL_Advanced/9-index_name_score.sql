-- create another index but with a score
CREATE INDEX idx_name_first_score ON names (name(1), score);