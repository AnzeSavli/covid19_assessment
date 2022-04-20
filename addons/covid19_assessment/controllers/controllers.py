# -*- coding: utf-8 -*-
from requests import request
from odoo import http

class Covid19Assessment(http.Controller):
    @http.route('/covid19_assessment/covid19_assessment/', auth='public')
    def index(self, **kw):
        return "Hello, world"

    # @http.route('create/user', type="http", auth="public", website=True)
    # def create_user(self, **kw):
    #     return request.render("covid19_assessment.user_registered", {})

    @http.route('/covid19_assessment/covid19_assessment/objects/', auth='public')
    def list(self, **kw):
        return http.request.render('covid19_assessment.listing', {
            'root': '/covid19_assessment/covid19_assessment',
            'objects': http.request.env['covid19_assessment.covid19_assessment'].search([]),
        })

    @http.route('/covid19_assessment/covid19_assessment/objects/<model("covid19_assessment.covid19_assessment"):obj>/', auth='public')
    def object(self, obj, **kw):
        return http.request.render('covid19_assessment.object', {
            'object': obj
        })



