# Generated by Django 3.2.8 on 2022-03-24 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard2', '0004_alter_countrydata_population'),
    ]

    operations = [
        migrations.AlterField(
            model_name='countrydata',
            name='population',
            field=models.IntegerField(),
        ),
    ]
