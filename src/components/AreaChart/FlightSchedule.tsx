import './FlightSchedule.scss';
import React from 'react';
import {
  AreaSeries,
  DateTime,
  Legend,
  Tooltip,
  DataLabel,
  DataEditing,
  Inject as ChartInject,
} from '@syncfusion/ej2-react-charts';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts';

const FlightSchedule: React.FC = (props: any) => {
  const { data, title, id } = props;
  console.log('AreaChart', data);
  return (
    <div className="area-chart-container">
      <ChartComponent
        id={id && id !== '' ? id : 'AreaChart'}
        immediateRender={true}
        palettes={['#007880', '#B70031', '#0E8BCC']}
        primaryXAxis={{
          valueType: 'DateTime',
          labelFormat: 'dd/MM/yyyy (EEE)',
          intervalType: 'Days',
          majorGridLines: { width: 0 },
          plotOffsetLeft: 10,
          plotOffsetRight: 25,
        }}
        primaryYAxis={{
          title: 'No. of flight',
          labelFormat: '{value}',
          interval: 500,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
        }}
        chartArea={{ border: { width: 0 } }}
        title={title && title !== '' ? title : 'ATM'}
        titleStyle={{
          fontWeight: 'Normal',
          fontFamily: 'Open Sans',
          size: '16',
          textAlignment: 'Near',
        }}
        legendSettings={{
          visible: true,
          position: 'Bottom',
          alignment: 'Near',
          margin: { top: 20, left: 100, right: 0, bottom: 0 },
          shapeWidth: 20,
          shapeHeight: 8,
        }}
        style={{ margin: 10 }}
        tooltip={{
          enable: true,
        }}
      >
        <ChartInject
          services={[
            AreaSeries,
            DateTime,
            Legend,
            Tooltip,
            DataLabel,
            DataEditing,
          ]}
        />
        <SeriesCollectionDirective>
          {Object.keys(data).map((value) => (
            <SeriesDirective
              key={value}
              name={value}
              dataSource={data[value]}
              xName="from"
              yName="total"
              type="Area"
              legendShape="Rectangle"
              opacity={1}
              width={0}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default FlightSchedule;
