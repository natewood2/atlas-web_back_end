-- Finding the best band, it's Blink-182 btw
SELECT origin, SUM(total_fans) AS nb_fans
FROM metal_bands
GROUP BY origin
ORDER BY nb_fans DESC;