import React from 'react';
import { Card, Button, Typography } from 'antd';
import { EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import type { IPO } from '../../types';
import { StatusIndicator, ResponsiveImage } from '../common';
import { formatDate } from '../../utils';
import { favoriteIPOsStorage } from '../../services/storage';

const { Title, Text } = Typography;

interface IPOCardProps {
  ipo: IPO;
  showActions?: boolean;
  compact?: boolean;
}

const IPOCard: React.FC<IPOCardProps> = ({ 
  ipo, 
  showActions = true, 
  compact = false 
}) => {
  const [isFavorite, setIsFavorite] = React.useState(
    favoriteIPOsStorage.isFavorite(ipo.id)
  );

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newStatus = favoriteIPOsStorage.toggle(ipo.id);
    setIsFavorite(newStatus);
  };

  const getOfferPriceText = () => {
    if (typeof ipo.offerPrice === 'number') {
      return `₹${ipo.offerPrice.toLocaleString()}`;
    }
    return `₹${ipo.offerPrice.min.toLocaleString()}-${ipo.offerPrice.max.toLocaleString()}`;
  };

  const cardActions = showActions ? [
    <Link to={`/ipo/${ipo.id}`} key="view">
      <Button type="link" icon={<EyeOutlined />} size="small">
        View Details
      </Button>
    </Link>,
    <Button 
      key="apply" 
      type="primary" 
      size="small"
      disabled={ipo.status !== 'current'}
    >
      {ipo.status === 'current' ? 'Apply' : 'View'}
    </Button>
  ] : undefined;

  return (
    <Card
      className="card-hover h-full animate-fadeIn shadow-xl"
      cover={
        <div className="p-4 bg-gray-50 relative">
          <div className="flex items-center space-x-3">
            <ResponsiveImage
              src={ipo.logo}
              alt={ipo.name}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Title level={5} className="mb-1 line-clamp-1">
                {ipo.name}
              </Title>
              <Text className="text-gray-500 text-sm">
                {formatDate(ipo.offerDate.start)} - {formatDate(ipo.offerDate.end)}
              </Text>
            </div>
            <Button
              type="text"
              icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
              onClick={handleFavoriteToggle}
              className={`absolute top-2 right-2 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
              size="small"
            />
          </div>
        </div>
      }
      actions={cardActions}
    >
      <div className={`space-y-${compact ? '2' : '3'}`}>
        <div className="flex justify-between items-center">
          <Text strong>Status:</Text>
          <StatusIndicator status={ipo.status} showDot />
        </div>
        
        <div className="flex justify-between">
          <Text strong>Exchange:</Text>
          <Text className="text-right">{ipo.exchange}</Text>
        </div>
        
        <div className="flex justify-between">
          <Text strong>Price:</Text>
          <Text className="text-right font-medium">
            {getOfferPriceText()}
          </Text>
        </div>
        
        <div className="flex justify-between">
          <Text strong>Lot Size:</Text>
          <Text className="text-right">{ipo.lotSize.toLocaleString()}</Text>
        </div>
        
        {ipo.subscription && (
          <div className="flex justify-between">
            <Text strong>Subscription:</Text>
            <Text className="font-semibold text-green-600 text-right">
              {ipo.subscription.times}x
            </Text>
          </div>
        )}
        
        {ipo.gmp && (
          <div className="flex justify-between">
            <Text strong>GMP:</Text>
            <Text className="text-blue-600 text-right font-medium">
              ₹{ipo.gmp.premium} ({ipo.gmp.percentage}%)
            </Text>
          </div>
        )}

        {ipo.sector && !compact && (
          <div className="flex justify-between">
            <Text strong>Sector:</Text>
            <Text className="text-right text-gray-600 line-clamp-1">
              {ipo.sector}
            </Text>
          </div>
        )}
      </div>
    </Card>
  );
};

export default IPOCard;
