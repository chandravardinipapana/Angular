import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  tittles =[
    {title:"About",content:"Dedalus Group is the leading healthcare and diagnostic software provider in Europe and one of the largest in the world. With its innovative framework of comprehensive and process-oriented solutions, Dedalus Group enables a revolutionary Digital Transformation of country-wide Healthcare Systems fully supporting the Patient Digital Journey. Dedalus serves more than 5,000 private and public hospitals across 30 countries, through more 3,400 highly specialized resources, of which 1100 dedicated to R&D activities.   The patient and the person, as complex "},
    {title:"Company",content:"The 21st Century Challenge of Healthcare Living a healthy life is a basic human need.  Research shows that health care services are only one of a range of factors affecting peoples’ health.  As multiple research reports show, an individual’s health behaviours and physical environment are the key drivers, with health services themselves only influencing 10% to 20% of health outcomes. "},
    {title:"Services",content:"Consulting,Solution Delivery,Project Implementation,Support."}
  ]

}
