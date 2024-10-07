-- Finding the best band, it's Blink-182 btw
SELECT origin, SUM(nb_fans) AS total_fans
FROM bands
GROUP BY origin
ORDER BY total_fans DESC;