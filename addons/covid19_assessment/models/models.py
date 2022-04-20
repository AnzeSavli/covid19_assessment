# -*- coding: utf-8 -*-

from odoo import models, fields, api


class covid19_assessment(models.Model):
    _name = 'covid19_assessment.covid19_assessment'
    _description = 'covid19_assessment.covid19_assessment'

    firstName = fields.Char(string="What is your first name?")
    lastName = fields.Char(string="What is your last name?")
    age = fields.Integer(string="What is your age?")
    email = fields.Char(string="Please enter your email address")
    fever = fields.Boolean(string="Do you have a fever?", default=False)
    temperature = fields.Float(string="What is your last measured temperature?")
    cough = fields.Boolean(string="Do you cough?")
    headache = fields.Boolean(string="Do you have sever headache?")
    contact = fields.Boolean(string="Were in contact with someone who has COVID-19?")
