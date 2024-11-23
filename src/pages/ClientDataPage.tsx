import React from 'react';
import { FormField } from '../components/FormField';
import { FormSection } from '../components/FormSection';
import { Plus } from 'lucide-react';
import { ClientDataPageData, HeaderData } from '../types';

interface ClientDataPageProps {
  data: ClientDataPageData;
  onUpdate: (data: ClientDataPageData) => void;
  headerData: HeaderData;
  allFormData: any;
}

export const ClientDataPage: React.FC<ClientDataPageProps> = ({
  data,
  onUpdate,
}) => {
  const addChild = () => {
    onUpdate({
      ...data,
      children: [
        ...data.children,
        {
          title: '',
          name: '',
          firstName: '',
          birthName: '',
          familyStatus: '',
          nationality: '',
          birthDate: '',
          birthPlace: '',
          taxId: '',
          childBenefit: false
        }
      ]
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Mandantendaten</h1>

      {/* Mandant Section */}
      <FormSection title="Mandant">
        <FormField
          label="Titel"
          value={data.mandant.personal.title}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, title: value }
            }
          })}
        />
        <FormField
          label="Name"
          value={data.mandant.personal.name}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, name: value }
            }
          })}
        />
        <FormField
          label="Vorname"
          value={data.mandant.personal.firstName}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, firstName: value }
            }
          })}
        />
        <FormField
          label="Geburtsname"
          value={data.mandant.personal.birthName}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, birthName: value }
            }
          })}
        />
        <FormField
          label="Familienstand"
          value={data.mandant.personal.familyStatus}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, familyStatus: value }
            }
          })}
        />
        <FormField
          label="Staat"
          value={data.mandant.personal.nationality}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, nationality: value }
            }
          })}
        />
        <FormField
          label="Geburtsdatum"
          type="date"
          value={data.mandant.personal.birthDate}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, birthDate: value }
            }
          })}
        />
        <FormField
          label="Geburtsort"
          value={data.mandant.personal.birthPlace}
          onChange={(value) => onUpdate({
            ...data,
            mandant: {
              ...data.mandant,
              personal: { ...data.mandant.personal, birthPlace: value }
            }
          })}
        />
      </FormSection>

      {/* Partner Section */}
      <FormSection title="Partner">
        <FormField
          label="Titel"
          value={data.partner.personal.title}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, title: value }
            }
          })}
        />
        <FormField
          label="Name"
          value={data.partner.personal.name}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, name: value }
            }
          })}
        />
        <FormField
          label="Vorname"
          value={data.partner.personal.firstName}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, firstName: value }
            }
          })}
        />
        <FormField
          label="Geburtsname"
          value={data.partner.personal.birthName}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, birthName: value }
            }
          })}
        />
        <FormField
          label="Familienstand"
          value={data.partner.personal.familyStatus}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, familyStatus: value }
            }
          })}
        />
        <FormField
          label="Staat"
          value={data.partner.personal.nationality}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, nationality: value }
            }
          })}
        />
        <FormField
          label="Geburtsdatum"
          type="date"
          value={data.partner.personal.birthDate}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, birthDate: value }
            }
          })}
        />
        <FormField
          label="Geburtsort"
          value={data.partner.personal.birthPlace}
          onChange={(value) => onUpdate({
            ...data,
            partner: {
              ...data.partner,
              personal: { ...data.partner.personal, birthPlace: value }
            }
          })}
        />
      </FormSection>

      {/* Children Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Kinder</h2>
          <button
            onClick={addChild}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" />
            Kind hinzufügen
          </button>
        </div>

        {data.children.map((child, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-4">
            <h3 className="font-medium text-gray-700">Kind {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Name"
                value={child.name}
                onChange={(value) => {
                  const newChildren = [...data.children];
                  newChildren[index] = { ...child, name: value };
                  onUpdate({ ...data, children: newChildren });
                }}
              />
              <FormField
                label="Vorname"
                value={child.firstName}
                onChange={(value) => {
                  const newChildren = [...data.children];
                  newChildren[index] = { ...child, firstName: value };
                  onUpdate({ ...data, children: newChildren });
                }}
              />
              <FormField
                label="Steuer-ID"
                value={child.taxId}
                onChange={(value) => {
                  const newChildren = [...data.children];
                  newChildren[index] = { ...child, taxId: value };
                  onUpdate({ ...data, children: newChildren });
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <FormSection title="Kontakt/Kommunikation/Bankverbindung">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-4">Mandant</h3>
            <div className="space-y-4">
              <FormField
                label="Adresse"
                value={data.mandant.contact.address}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, address: value }
                  }
                })}
              />
              <FormField
                label="Telefon privat"
                value={data.mandant.contact.phonePrivate}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, phonePrivate: value }
                  }
                })}
              />
              <FormField
                label="Fax privat"
                value={data.mandant.contact.faxPrivate}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, faxPrivate: value }
                  }
                })}
              />
              <FormField
                label="Mobil-Telefon"
                value={data.mandant.contact.mobile}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, mobile: value }
                  }
                })}
              />
              <FormField
                label="Telefon Firma"
                value={data.mandant.contact.phoneWork}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, phoneWork: value }
                  }
                })}
              />
              <FormField
                label="Email/www"
                value={data.mandant.contact.email}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, email: value }
                  }
                })}
              />
              <FormField
                label="Hausbank"
                value={data.mandant.contact.bank}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, bank: value }
                  }
                })}
              />
              <FormField
                label="IBAN"
                value={data.mandant.contact.iban}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, iban: value }
                  }
                })}
              />
              <FormField
                label="BIC"
                value={data.mandant.contact.bic}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, bic: value }
                  }
                })}
              />
              <FormField
                label="Guthaben"
                value={data.mandant.contact.balance}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    contact: { ...data.mandant.contact, balance: value }
                  }
                })}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={data.mandant.contact.onlineBanking}
                  onChange={(e) => onUpdate({
                    ...data,
                    mandant: {
                      ...data.mandant,
                      contact: { ...data.mandant.contact, onlineBanking: e.target.checked }
                    }
                  })}
                  className="rounded border-gray-300"
                />
                <label className="text-sm text-gray-700">
                  Onlinebanking vorstellbar
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700 mb-4">Partner</h3>
            <div className="space-y-4">
              <FormField
                label="Adresse"
                value={data.partner.contact.address}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, address: value }
                  }
                })}
              />
              <FormField
                label="Telefon privat"
                value={data.partner.contact.phonePrivate}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, phonePrivate: value }
                  }
                })}
              />
              <FormField
                label="Fax privat"
                value={data.partner.contact.faxPrivate}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, faxPrivate: value }
                  }
                })}
              />
              <FormField
                label="Mobil-Telefon"
                value={data.partner.contact.mobile}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, mobile: value }
                  }
                })}
              />
              <FormField
                label="Telefon Firma"
                value={data.partner.contact.phoneWork}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, phoneWork: value }
                  }
                })}
              />
              <FormField
                label="Email/www"
                value={data.partner.contact.email}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, email: value }
                  }
                })}
              />
              <FormField
                label="Hausbank"
                value={data.partner.contact.bank}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, bank: value }
                  }
                })}
              />
              <FormField
                label="IBAN"
                value={data.partner.contact.iban}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, iban: value }
                  }
                })}
              />
              <FormField
                label="BIC"
                value={data.partner.contact.bic}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, bic: value }
                  }
                })}
              />
              <FormField
                label="Guthaben"
                value={data.partner.contact.balance}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    contact: { ...data.partner.contact, balance: value }
                  }
                })}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={data.partner.contact.onlineBanking}
                  onChange={(e) => onUpdate({
                    ...data,
                    partner: {
                      ...data.partner,
                      contact: { ...data.partner.contact, onlineBanking: e.target.checked }
                    }
                  })}
                  className="rounded border-gray-300"
                />
                <label className="text-sm text-gray-700">
                  Onlinebanking vorstellbar
                </label>
              </div>
            </div>
          </div>
        </div>
      </FormSection>
    </div>
  );
};