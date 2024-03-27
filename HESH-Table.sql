CREATE TABLE HESH_Table_FirstPairs(
HESHID INT IDENTITY NOT NULL PRIMARY KEY,
HESHPair INT NOT NULL,
DataFirst VARCHAR (100) NOT NULL,
DataSecond VARCHAR (100) NOT NULL,
);

INSERT INTO HESH_Table_FirstPairs (HESHPair, DataFirst, DataSecond)
	VALUES(193, 'John Miller', '18DB38'),
	(165, 'Kyle Kruger', '10JA81'),
	(871, 'Nill Kiggers', '14DJ88'),
	(616, 'Pay Gorn', '76LK91'),
	(696, 'Bob Builder', '99HG61');

SELECT * FROM HESH_Table_FirstPairs

SELECT HESHPair, COUNT(*) AS RecordCount
FROM HESH_Table_FirstPairs
GROUP BY HESHPair;

GO

CREATE TABLE HESH_Table_SecondPairs(
HESHID INT IDENTITY NOT NULL PRIMARY KEY,
HESHPair INT NOT NULL,
DataFirst VARCHAR (100) NOT NULL,
DataSecond VARCHAR (100) NOT NULL,
);

INSERT INTO HESH_Table_SecondPairs (HESHPair, DataFirst, DataSecond)
	VALUES(9217, 'Rob Hoiman', 'UJK61L'),
	(6716, 'Tim Jockings', 'JAH91Z'),
	(8172, 'Joel Borovski', 'BAG78M'),
	(3764, 'Elon Shepard', 'ZXC29J'),
	(8126, 'Troll Facev', 'GQU91J');

SELECT * FROM HESH_Table_SecondPairs

SELECT HESHPair, AVG(CAST(HESHPair AS FLOAT)) AS AverageHESHPair
FROM HESH_Table_SecondPairs
GROUP BY HESHPair;

GO

CREATE TABLE HESH_Table_ThirdPairs(
HESHID INT IDENTITY NOT NULL PRIMARY KEY,
HESHPair INT NOT NULL,
DataFirst VARCHAR (100) NOT NULL,
DataSecond VARCHAR (100) NOT NULL,
);

INSERT INTO HESH_Table_ThirdPairs (HESHPair, DataFirst, DataSecond)
	VALUES(78911, 'Yuriy Vlodimirov', '616KL09'),
	(61523, 'Nikolay Kotkov', '514BN87'),
	(61723, 'Nikita Tokarev', '817HJ00'),
	(51243, 'Ruslan Nikolaev', '615BB34'),
	(99783, 'Ivan Grozny', '735AV45');

SELECT * FROM HESH_Table_ThirdPairs




DROP TABLE HESH_Table_FirstPairs
DROP TABLE HESH_Table_SecondPairs
DROP TABLE HESH_Table_ThirdPairs