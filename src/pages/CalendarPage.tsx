import React, { useState } from 'react';
import {
  Calendar,
  Card,
  Typography,
  Breadcrumb,
  Badge,
  List,
  Tag,
  Row,
  Col
} from 'antd';
import {
  HomeOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useIPOs } from '../hooks';
import { ROUTES } from '../constants';

import type { Dayjs } from 'dayjs';

const { Title, Text } = Typography;

const CalendarPage: React.FC = () => {
  const { ipos, loading } = useIPOs();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  // Get events for a specific date
  const getEventsForDate = (date: Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD');
    return ipos.filter(ipo => {
      const startDate = ipo.offerDate.start;
      const endDate = ipo.offerDate.end;
      const listingDate = ipo.listingDate;

      return startDate === dateStr || endDate === dateStr || listingDate === dateStr;
    });
  };

  // Get all events for the selected date
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  // Calendar cell renderer
  const dateCellRender = (value: Dayjs) => {
    const events = getEventsForDate(value);
    return (
      <div className="h-full">
        {events.map((ipo, index) => {
          const dateStr = value.format('YYYY-MM-DD');
          let eventType = '';
          let color = '';

          if (ipo.offerDate.start === dateStr) {
            eventType = 'Opens';
            color = 'green';
          } else if (ipo.offerDate.end === dateStr) {
            eventType = 'Closes';
            color = 'red';
          } else if (ipo.listingDate === dateStr) {
            eventType = 'Lists';
            color = 'blue';
          }

          return (
            <div key={index} className="text-xs mb-1">
              <Badge color={color} text={`${ipo.name} ${eventType}`} />
            </div>
          );
        })}
      </div>
    );
  };

  const onDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <Link to={ROUTES.HOME}>
              <HomeOutlined /> Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <CalendarOutlined /> IPO Event Calendar
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <Title level={1} className="mb-2">IPO Event Calendar</Title>
          <Text className="text-gray-600">
            Track important IPO dates including opening, closing, and listing dates
          </Text>
        </div>

        <Row gutter={[24, 24]}>
          {/* Calendar */}
          <Col xs={24} lg={16}>
            <Card title="IPO Calendar" loading={loading}>
              <Calendar
                dateCellRender={dateCellRender}
                onSelect={onDateSelect}
                className="ipo-calendar"
              />
            </Card>
          </Col>

          {/* Events for Selected Date */}
          <Col xs={24} lg={8}>
            <Card
              title={
                selectedDate
                  ? `Events on ${selectedDate.format('MMM DD, YYYY')}`
                  : 'Select a date to view events'
              }
            >
              {selectedDate && selectedDateEvents.length > 0 ? (
                <List
                  dataSource={selectedDateEvents}
                  renderItem={(ipo) => {
                    const dateStr = selectedDate.format('YYYY-MM-DD');
                    let eventType = '';
                    let color = '';

                    if (ipo.offerDate.start === dateStr) {
                      eventType = 'IPO Opens';
                      color = 'green';
                    } else if (ipo.offerDate.end === dateStr) {
                      eventType = 'IPO Closes';
                      color = 'red';
                    } else if (ipo.listingDate === dateStr) {
                      eventType = 'Listing';
                      color = 'blue';
                    }

                    return (
                      <List.Item>
                        <div className="w-full">
                          <div className="flex justify-between items-start mb-2">
                            <Text strong className="line-clamp-1">{ipo.name}</Text>
                            <Tag color={color}>{eventType}</Tag>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div>Exchange: {ipo.exchange}</div>
                            <div>
                              Price: ₹{typeof ipo.offerPrice === 'number'
                                ? ipo.offerPrice.toLocaleString()
                                : `${ipo.offerPrice.min}-${ipo.offerPrice.max}`}
                            </div>
                          </div>
                        </div>
                      </List.Item>
                    );
                  }}
                />
              ) : selectedDate ? (
                <Text className="text-gray-500">No IPO events on this date</Text>
              ) : (
                <Text className="text-gray-500">Click on a date to view events</Text>
              )}
            </Card>

            {/* Legend */}
            <Card title="Legend" className="mt-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge color="green" />
                  <Text className="ml-2">IPO Opens</Text>
                </div>
                <div className="flex items-center">
                  <Badge color="red" />
                  <Text className="ml-2">IPO Closes</Text>
                </div>
                <div className="flex items-center">
                  <Badge color="blue" />
                  <Text className="ml-2">Listing Date</Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CalendarPage;
