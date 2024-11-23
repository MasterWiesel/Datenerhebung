import React from 'react';
import { FormField } from '../components/FormField';
import { Navigation } from '../components/Navigation';
import { FormPage, ClientDataPageData } from '../types';
import { FileDown } from 'lucide-react';
import { exportToExcel } from '../utils/excelExport';

interface MiscellaneousPageProps {
  currentPage: FormPage;
  onNext: () => void;
  onPrev: () => void;
  data: ClientDataPageData;
  onUpdate: (data: ClientDataPageData) => void;
  allFormData: any;
}

export const MiscellaneousPage: React.FC<MiscellaneousPageProps> = ({
  currentPage,
  onNext,
  onPrev,
  data,
  onUpdate,
  allFormData
}) => {
  const handleExport = () => {
    exportToExcel(allFormData);
  };

  return (
    <div className="space-y-8">
      <Navigation
        currentPage={currentPage}
        totalPages={6}
        onNext={onNext}
        onPrev={onPrev}
        canProgress={true}
      />

      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-gray-900">Sonstiges</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Mandant Column */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mandant</h2>
            <div className="space-y-4">
              <FormField
                label="SV-Nummer"
                value={data.mandant.misc?.svNumber || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    misc: { ...data.mandant.misc, svNumber: value }
                  }
                })}
              />
              <FormField
                label="Steuernummer"
                value={data.mandant.misc?.taxNumber || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    misc: { ...data.mandant.misc, taxNumber: value }
                  }
                })}
              />
              <FormField
                label="Steuer-ID"
                value={data.mandant.misc?.taxId || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    misc: { ...data.mandant.misc, taxId: value }
                  }
                })}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Kindergeld Nummer"
                  value={data.mandant.misc?.childBenefit?.number || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    mandant: {
                      ...data.mandant,
                      misc: {
                        ...data.mandant.misc,
                        childBenefit: { ...data.mandant.misc?.childBenefit, number: value }
                      }
                    }
                  })}
                />
                <FormField
                  label="Familienkasse"
                  value={data.mandant.misc?.childBenefit?.familyFund || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    mandant: {
                      ...data.mandant,
                      misc: {
                        ...data.mandant.misc,
                        childBenefit: { ...data.mandant.misc?.childBenefit, familyFund: value }
                      }
                    }
                  })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={data.mandant.misc?.idDocument?.type === 'DPA'}
                      onChange={() => onUpdate({
                        ...data,
                        mandant: {
                          ...data.mandant,
                          misc: {
                            ...data.mandant.misc,
                            idDocument: { ...data.mandant.misc?.idDocument, type: 'DPA' }
                          }
                        }
                      })}
                      className="form-radio"
                    />
                    <span className="ml-2">DPA-/</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={data.mandant.misc?.idDocument?.type === 'passport'}
                      onChange={() => onUpdate({
                        ...data,
                        mandant: {
                          ...data.mandant,
                          misc: {
                            ...data.mandant.misc,
                            idDocument: { ...data.mandant.misc?.idDocument, type: 'passport' }
                          }
                        }
                      })}
                      className="form-radio"
                    />
                    <span className="ml-2">Reisepass-Nr.</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Nummer"
                    value={data.mandant.misc?.idDocument?.number || ''}
                    onChange={(value) => onUpdate({
                      ...data,
                      mandant: {
                        ...data.mandant,
                        misc: {
                          ...data.mandant.misc,
                          idDocument: { ...data.mandant.misc?.idDocument, number: value }
                        }
                      }
                    })}
                  />
                  <FormField
                    label="Gültig bis"
                    value={data.mandant.misc?.idDocument?.validUntil || ''}
                    onChange={(value) => onUpdate({
                      ...data,
                      mandant: {
                        ...data.mandant,
                        misc: {
                          ...data.mandant.misc,
                          idDocument: { ...data.mandant.misc?.idDocument, validUntil: value }
                        }
                      }
                    })}
                  />
                </div>
                <FormField
                  label="Ausstellende Behörde"
                  value={data.mandant.misc?.idDocument?.authority || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    mandant: {
                      ...data.mandant,
                      misc: {
                        ...data.mandant.misc,
                        idDocument: { ...data.mandant.misc?.idDocument, authority: value }
                      }
                    }
                  })}
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.mandant.misc?.idDocument?.hasCopy || false}
                    onChange={(e) => onUpdate({
                      ...data,
                      mandant: {
                        ...data.mandant,
                        misc: {
                          ...data.mandant.misc,
                          idDocument: { ...data.mandant.misc?.idDocument, hasCopy: e.target.checked }
                        }
                      }
                    })}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Kopie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Column */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Partner</h2>
            <div className="space-y-4">
              <FormField
                label="SV-Nummer"
                value={data.partner.misc?.svNumber || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    misc: { ...data.partner.misc, svNumber: value }
                  }
                })}
              />
              <FormField
                label="Steuernummer"
                value={data.partner.misc?.taxNumber || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    misc: { ...data.partner.misc, taxNumber: value }
                  }
                })}
              />
              <FormField
                label="Steuer-ID"
                value={data.partner.misc?.taxId || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  partner: {
                    ...data.partner,
                    misc: { ...data.partner.misc, taxId: value }
                  }
                })}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Kindergeld Nummer"
                  value={data.partner.misc?.childBenefit?.number || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    partner: {
                      ...data.partner,
                      misc: {
                        ...data.partner.misc,
                        childBenefit: { ...data.partner.misc?.childBenefit, number: value }
                      }
                    }
                  })}
                />
                <FormField
                  label="Familienkasse"
                  value={data.partner.misc?.childBenefit?.familyFund || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    partner: {
                      ...data.partner,
                      misc: {
                        ...data.partner.misc,
                        childBenefit: { ...data.partner.misc?.childBenefit, familyFund: value }
                      }
                    }
                  })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={data.partner.misc?.idDocument?.type === 'DPA'}
                      onChange={() => onUpdate({
                        ...data,
                        partner: {
                          ...data.partner,
                          misc: {
                            ...data.partner.misc,
                            idDocument: { ...data.partner.misc?.idDocument, type: 'DPA' }
                          }
                        }
                      })}
                      className="form-radio"
                    />
                    <span className="ml-2">DPA-/</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={data.partner.misc?.idDocument?.type === 'passport'}
                      onChange={() => onUpdate({
                        ...data,
                        partner: {
                          ...data.partner,
                          misc: {
                            ...data.partner.misc,
                            idDocument: { ...data.partner.misc?.idDocument, type: 'passport' }
                          }
                        }
                      })}
                      className="form-radio"
                    />
                    <span className="ml-2">Reisepass-Nr.</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Nummer"
                    value={data.partner.misc?.idDocument?.number || ''}
                    onChange={(value) => onUpdate({
                      ...data,
                      partner: {
                        ...data.partner,
                        misc: {
                          ...data.partner.misc,
                          idDocument: { ...data.partner.misc?.idDocument, number: value }
                        }
                      }
                    })}
                  />
                  <FormField
                    label="Gültig bis"
                    value={data.partner.misc?.idDocument?.validUntil || ''}
                    onChange={(value) => onUpdate({
                      ...data,
                      partner: {
                        ...data.partner,
                        misc: {
                          ...data.partner.misc,
                          idDocument: { ...data.partner.misc?.idDocument, validUntil: value }
                        }
                      }
                    })}
                  />
                </div>
                <FormField
                  label="Ausstellende Behörde"
                  value={data.partner.misc?.idDocument?.authority || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    partner: {
                      ...data.partner,
                      misc: {
                        ...data.partner.misc,
                        idDocument: { ...data.partner.misc?.idDocument, authority: value }
                      }
                    }
                  })}
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.partner.misc?.idDocument?.hasCopy || false}
                    onChange={(e) => onUpdate({
                      ...data,
                      partner: {
                        ...data.partner,
                        misc: {
                          ...data.partner.misc,
                          idDocument: { ...data.partner.misc?.idDocument, hasCopy: e.target.checked }
                        }
                      }
                    })}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Kopie</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Data Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Allgemeine Daten</h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">Derzeitige Betreuung</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Welcher Steuerberater betreut Sie? (Vorname/Nachname)"
                value={data.mandant.general?.taxConsultant?.name || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      taxConsultant: { ...data.mandant.general?.taxConsultant, name: value }
                    }
                  }
                })}
              />
              <FormField
                label="Firma/Tel."
                value={data.mandant.general?.taxConsultant?.companyAndPhone || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      taxConsultant: { ...data.mandant.general?.taxConsultant, companyAndPhone: value }
                    }
                  }
                })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Welcher Rechtsanwalt betreut Sie? (Vorname/Nachname)"
                value={data.mandant.general?.lawyer?.name || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      lawyer: { ...data.mandant.general?.lawyer, name: value }
                    }
                  }
                })}
              />
              <FormField
                label="Firma/Tel."
                value={data.mandant.general?.lawyer?.companyAndPhone || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      lawyer: { ...data.mandant.general?.lawyer, companyAndPhone: value }
                    }
                  }
                })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Welcher Vertreter betreut Sie? (Vorname/Nachname)"
                value={data.mandant.general?.representative?.name || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      representative: { ...data.mandant.general?.representative, name: value }
                    }
                  }
                })}
              />
              <FormField
                label="Firma/Tel."
                value={data.mandant.general?.representative?.companyAndPhone || ''}
                onChange={(value) => onUpdate({
                  ...data,
                  mandant: {
                    ...data.mandant,
                    general: {
                      ...data.mandant.general,
                      representative: { ...data.mandant.general?.representative, companyAndPhone: value }
                    }
                  }
                })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <FormField
                  label="Wann wurde Ihre finanzielle Situation zuletzt geprüft?"
                  type="date"
                  value={data.mandant.general?.lastFinancialReview || ''}
                  onChange={(value) => onUpdate({
                    ...data,
                    mandant: {
                      ...data.mandant,
                      general: { ...data.mandant.general, lastFinancialReview: value }
                    }
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Excel-Export
          </button>
        </div>
      </div>

      <Navigation
        currentPage={currentPage}
        totalPages={6}
        onNext={onNext}
        onPrev={onPrev}
        canProgress={true}
      />
    </div>
  );
};