import React, { useState ,useEffect} from 'react';
import { View, Alert } from 'react-native';
import CreditCardModal from '@components/CreditCardModal';
import { CheckoutHeader } from '@components/CheckoutHeader';
import { styles as checkoutStyles, styles } from './styles';
import OrderSummary from '@components/CheckOrderSummary';
import PaymentMethodModal from '@components/PaymentMethodModal'; 
import { ButtonComponent } from '@components/Buttons';
import { ScrollView } from '@screens/CepScreen/styles';
import DeliveryMethodSection from '@components/DeliveryMethodSection';
import { CheckAddressBox } from '@components/CheckAdressBox';
import PaymentSection from '@components/CheckoutPaymentBox';
import { SucessScreen } from '@screens/SucessScreen';
export const CheckoutScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const [isPaymentMethodModalVisible, setPaymentMethodModalVisible] = useState(false);
  const [isCreditCardModalVisible, setCreditCardModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('');


  const deliveryMethods = [
    { name: ' 2-3 days', image: require('../../assets/images/fedex.png') },
    { name: ' 2-4 days', image: require('../../assets/images/usps.png') },
    { name: ' 3-5 days', image: require('../../assets/images/dhl.png') },
    { name: '3-7 days', image: require('../../assets/images/Sedex.png') },
    { name: '4-8 days', image: require('../../assets/images/jadlog-logo.png') },

 
  ];

  const handleSelectDeliveryMethod = (method: string) => {
    setSelectedDeliveryMethod(method);
  };
  const [addressData, setAddressData] = useState({
    address: '',
    city: '',
    uf: '',
    neighborhood: '',
  });

  useEffect(() => {

    if (route.params) {
      const { address, city, uf, neighborhood } = route.params;
      setAddressData({ address, city, uf, neighborhood });
    }
  }, [route.params]);
  const onCepScreen = () => {
    navigation.navigate('CepScreen');
  };

  const onShippingAddress = () => {
    navigation.navigate('CepScreen');
  };

  

  const openPaymentMethodModal = () => {
    setPaymentMethodModalVisible(true);
  };

  const closePaymentMethodModal = () => {
    setPaymentMethodModalVisible(false);
  };

  const openCreditCardModal = () => {
    setCreditCardModalVisible(true);
  };

  const closeCreditCardModal = () => {
    setCreditCardModalVisible(false);
  };

  return (
    <ScrollView >
    <View >
      <CheckoutHeader text="Checkout" onBackPress={onCepScreen} />
      </View>
      <CheckAddressBox addressData={addressData} onShippingAddressPress={onShippingAddress} />
      <PaymentSection
    selectedPaymentMethod={selectedPaymentMethod}
    openPaymentMethodModal={openPaymentMethodModal}
    openCreditCardModal={openCreditCardModal}
  />
      <PaymentMethodModal
        visible={isPaymentMethodModalVisible}
        onClose={closePaymentMethodModal}
        onSelectPaymentMethod={(method) => {
          setSelectedPaymentMethod(method);
          closePaymentMethodModal();
        }}
        openCreditCardModal={openCreditCardModal} 
      />
       <CreditCardModal
        visible={isCreditCardModalVisible}
        onClose={closeCreditCardModal}
        onAddCreditCard={(creditCardData) => {
          
          closeCreditCardModal();
        }}
        isNested={true} 
      />
       <DeliveryMethodSection
    selectedDeliveryMethod={selectedDeliveryMethod}
    deliveryMethods={deliveryMethods}
    handleSelectDeliveryMethod={handleSelectDeliveryMethod}
  />
 <OrderSummary orderAmount="12R$" deliveryAmount="0R$" summaryAmount="137R$" />
  
  <View style={styles.containerButton}>
  <ButtonComponent title="SUBMIT ORDER" width={343} height={48}  onPress={() => {
    if (selectedPaymentMethod) {
      navigation.navigate('SucessScreen', { selectedPaymentMethod });
    } else {
      Alert.alert('Warning', 'Please select a payment method before proceeding.');
    }
  }}/>
  </View>

      </ScrollView>
  );
};