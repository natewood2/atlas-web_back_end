-- Create a trigger that decreases quanity
DELIMITER //

CREATE TRIGGER decrease
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE items
    SET quantity = quantity - NEW.number
    WHERE name = NEW.item_name;
END //

DELIMITER ;