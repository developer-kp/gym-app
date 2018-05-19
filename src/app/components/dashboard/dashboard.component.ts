import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 isCollapsed = true;
    id = 'chart1';
    width ='100%';
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource;
    title = 'Angular4 FusionCharts Sample';

    width_pie = '100%';
    height_pie = 400;
    type_pie = 'pie3d';
    dataFormat_pie = 'json';
    dataSource_pie;
    
  constructor() {
    this.dataSource_pie = {
    "chart": {
        "caption": "Age profile of gym visitors",
        "subcaption": "Last Year",
        "startingangle": "120",
        "showlabels": "0",
        "showlegend": "1",
        "enablemultislicing": "0",
        "slicingdistance": "15",
        "showpercentvalues": "1",
        "showpercentintooltip": "0",
        "plottooltext": "Age group : $label Total visit : $datavalue",
        "theme": "ocean"
    },
    "data": [
        {
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
}
            this.dataSource = {
            "chart": {
                "caption": "Fitness Revenue",
                "subCaption": "Top 5 stores in last month by revenue",
                "numberprefix": "$",
                "theme": "fint"
            },
            "data": [
                {
                    "label": "Bakersfield Central",
                    "value": "880000"
                },
                {
                    "label": "Garden Groove harbour",
                    "value": "730000"
                },
                {
                    "label": "Los Angeles Topanga",
                    "value": "590000"
                },
                {
                    "label": "Compton-Rancho Dom",
                    "value": "520000"
                },
                {
                    "label": "Daly City Serramonte",
                    "value": "330000"
                }
            ]
        }
   }

  ngOnInit() {
  }

}
