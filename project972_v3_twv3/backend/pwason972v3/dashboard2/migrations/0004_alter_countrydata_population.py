# Generated by Django 3.2.8 on 2022-03-24 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard2', '0003_alter_countrydata_population'),
    ]

    operations = [
        migrations.AlterField(
            model_name='countrydata',
            name='population',
            field=models.DecimalField(decimal_places=5, max_digits=5, max_length=30),
        ),
    ]
