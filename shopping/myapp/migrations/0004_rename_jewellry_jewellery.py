# Generated by Django 5.0.2 on 2024-03-21 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_remove_jewellry_name_jewellry_category_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Jewellry',
            new_name='Jewellery',
        ),
    ]
