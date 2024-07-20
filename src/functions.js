import { useState } from 'react';
import NotificationButton from './components/NotificationButton';
import Dropdown from './components/Dropdown';

// Data
export const locations = [
  { name: 'L.B Nagar', pincode: '500035' },
  { name: 'Dilshuknagar', pincode: '500060' },
  { name: 'Malakpet', pincode: '500036' },
  { name: 'Uppal', pincode: '500039' },
  { name: 'Amberpet', pincode: '500013' },
  { name: 'Ghatkesar', pincode: '501301' },
  { name: 'Bibinagar', pincode: '508126' },
  { name: 'Tarnaka', pincode: '500007' },
  { name: 'Secunderabad', pincode: '500003' },
  { name: 'Begumpet', pincode: '500016' },
  { name: 'Ammerpet', pincode: '500018' },
  { name: 'Nampally', pincode: '500012' },
  { name: 'Mehdipatnam', pincode: '500028' },
  { name: 'Narsingi', pincode: '500075' },
  { name: 'Kukatpally', pincode: '500072' },
  { name: 'Miyapur', pincode: '500049' },
  { name: 'Gachibowli', pincode: '500032' },
  { name: 'Madhapur', pincode: '500081' },
  { name: 'Kompally', pincode: '500014' },
  { name: 'Bolarum', pincode: '500010' },
  { name: 'Alwal', pincode: '500010' },
  { name: 'Katedhan', pincode: '500077' },
  { name: 'Falaknuma', pincode: '500053' },
  { name: 'Charminar', pincode: '500002' }
];

export const pincodes = [
  '500035', '500060', '500036', '500039', '500013', '501301', '508126', '500007', '500003',
  '500016', '500018', '500012', '500028', '500075', '500072', '500049', '500032', '500081',
  '500014', '500010', '500010', '500077', '500053', '500002'
];

// Custom Hook for App
export const usePincodeFilter = () => {
  const [selectedPincode, setSelectedPincode] = useState('');

  const handlePincodeSelect = (pincode) => {
    setSelectedPincode(pincode);
  };

  const filteredLocations = locations.filter(
    (location) => selectedPincode === '' || location.pincode === selectedPincode
  );

  return {
    selectedPincode,
    handlePincodeSelect,
    filteredLocations
  };
};

// Main App Function
export const AppFunction = () => {
  const { selectedPincode, handlePincodeSelect, filteredLocations } = usePincodeFilter();

  return (
    <div>
      <Dropdown pincodes={pincodes} onSelectPincode={handlePincodeSelect} />
      <div className="cards-container">
        {filteredLocations.map((location, index) => (
          <NotificationButton
            key={index}
            name={location.name}
          />
        ))}
      </div>
    </div>
  );
};
