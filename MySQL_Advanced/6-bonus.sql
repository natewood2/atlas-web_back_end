-- I feel like learning this is cool and all
-- But I want to know how to write the init file
DELIMITER //

CREATE PROCEDURE AddBonus(
    IN p_user_id INT, 
    IN p_project_name VARCHAR(255), 
    IN p_score INT
)
BEGIN
    INSERT INTO projects (name)
    SELECT p_project_name
    WHERE NOT EXISTS (SELECT id FROM projects WHERE name = p_project_name);

    SET @project_id = (SELECT id FROM projects WHERE name = p_project_name);
    INSERT INTO corrections (user_id, project_id, score)
    VALUES (p_user_id, @project_id, p_score);
    
END //

DELIMITER ;