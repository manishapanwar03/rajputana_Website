# Generated by Django 5.0.3 on 2024-04-04 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_alter_dress_type_alter_jewellery_price_singuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='singuser',
            name='Name',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
