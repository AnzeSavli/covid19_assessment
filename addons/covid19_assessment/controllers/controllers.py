# -*- coding: utf-8 -*-
# from odoo import http


# class Covid19Assessment(http.Controller):
#     @http.route('/covid19_assessment/covid19_assessment/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/covid19_assessment/covid19_assessment/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('covid19_assessment.listing', {
#             'root': '/covid19_assessment/covid19_assessment',
#             'objects': http.request.env['covid19_assessment.covid19_assessment'].search([]),
#         })

#     @http.route('/covid19_assessment/covid19_assessment/objects/<model("covid19_assessment.covid19_assessment"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('covid19_assessment.object', {
#             'object': obj
#         })
