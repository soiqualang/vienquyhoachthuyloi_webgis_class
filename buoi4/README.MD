# Một số câu SQL mẫu

## Select
```sql
Select ten as ten_tuoi,tuoi from ds_hocsinh;

select * from ds_hocsinh;

select * from ds_hocsinh
where id=2;

select * from ds_hocsinh
where ten ilike '%nguyen Van%' and tuoi <30;
```
## INSERT
```sql
INSERT INTO ds_hocsinh(
	"ten", tuoi, diachi)
	VALUES ('Banh Van C', 29, 'Ngo A, Abc');
```
## UPDATE
```sql
UPDATE ds_hocsinh
	SET ten='Banh Van A'
	WHERE id=3;
```
## DELETE
```sql
DELETE FROM ds_hocsinh
	WHERE id=4;
```