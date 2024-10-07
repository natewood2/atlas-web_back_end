-- List all bands with glam rock
SELECT
    band_name,
    COALESCE(split, YEAR(CURDATE())) - formed AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;