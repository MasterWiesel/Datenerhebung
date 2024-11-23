import React from 'react';
import { Plus } from 'lucide-react';
import { WishesData, PlanningCriteria, StateSubsidies } from '../types';
import { FormField } from '../components/FormField';

interface WishesPageProps {
  data: WishesData;
  onUpdate: (data: WishesData) => void;
  planningCriteria: PlanningCriteria;
  onUpdatePlanningCriteria: (data: PlanningCriteria) => void;
  stateSubsidies: StateSubsidies;
  onUpdateStateSubsidies: (data: StateSubsidies) => void;
}

const WishSection: React.FC<{
  title: string;
  wishes: { text: string }[];
  onUpdate: (wishes: { text: string }[]) => void;
}> = ({ title, wishes, onUpdate }) => {
  const addWish = () => {
    onUpdate([...wishes, { text: '' }]);
  };

  const updateWish = (index: number, value: string) => {
    const newWishes = [...wishes];
    newWishes[index] = { text: value };
    onUpdate(newWishes);
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {wishes.map((wish, index) => (
        <div key={index} className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12">
            <input
              type="text"
              value={wish.text}
              onChange={(e) => updateWish(index, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Wunsch eingeben..."
            />
          </div>
        </div>
      ))}
      <button
        onClick={addWish}
        className="flex items-center text-blue-600 hover:text-blue-700"
      >
        <Plus className="w-4 h-4 mr-1" />
        Weiteren Wunsch hinzufügen
      </button>
    </div>
  );
};

const YesNoCheckbox: React.FC<{
  label: string;
  mandantValue: boolean;
  partnerValue: boolean;
  onMandantChange: (value: boolean) => void;
  onPartnerChange: (value: boolean) => void;
}> = ({ label, mandantValue, partnerValue, onMandantChange, onPartnerChange }) => (
  <div className="grid grid-cols-12 gap-4 items-center py-2">
    <div className="col-span-6">
      <span className="text-sm text-gray-700">{label}</span>
    </div>
    <div className="col-span-3 flex justify-center gap-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          checked={mandantValue}
          onChange={() => onMandantChange(true)}
          className="form-radio"
        />
        <span className="ml-2">ja</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          checked={!mandantValue}
          onChange={() => onMandantChange(false)}
          className="form-radio"
        />
        <span className="ml-2">nein</span>
      </label>
    </div>
    <div className="col-span-3 flex justify-center gap-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          checked={partnerValue}
          onChange={() => onPartnerChange(true)}
          className="form-radio"
        />
        <span className="ml-2">ja</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          checked={!partnerValue}
          onChange={() => onPartnerChange(false)}
          className="form-radio"
        />
        <span className="ml-2">nein</span>
      </label>
    </div>
  </div>
);

const YesNoCheckboxWithAmount: React.FC<{
  label: string;
  mandantValue: { active: boolean; amount: number };
  partnerValue: { active: boolean; amount: number };
  onMandantChange: (value: { active: boolean; amount: number }) => void;
  onPartnerChange: (value: { active: boolean; amount: number }) => void;
}> = ({ label, mandantValue, partnerValue, onMandantChange, onPartnerChange }) => (
  <div className="grid grid-cols-12 gap-4 items-center py-2">
    <div className="col-span-6">
      <span className="text-sm text-gray-700">{label}</span>
    </div>
    <div className="col-span-3 space-y-2">
      <div className="flex justify-center gap-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={mandantValue.active}
            onChange={() => onMandantChange({ active: true, amount: mandantValue.amount })}
            className="form-radio"
          />
          <span className="ml-2">ja</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={!mandantValue.active}
            onChange={() => onMandantChange({ active: false, amount: 0 })}
            className="form-radio"
          />
          <span className="ml-2">nein</span>
        </label>
      </div>
      {mandantValue.active && (
        <div className="relative">
          <input
            type="number"
            value={mandantValue.amount || ''}
            onChange={(e) => onMandantChange({ active: true, amount: Number(e.target.value) })}
            className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
            placeholder="Betrag in €"
          />
          <span className="absolute right-3 top-1 text-gray-500 text-sm">€</span>
        </div>
      )}
    </div>
    <div className="col-span-3 space-y-2">
      <div className="flex justify-center gap-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={partnerValue.active}
            onChange={() => onPartnerChange({ active: true, amount: partnerValue.amount })}
            className="form-radio"
          />
          <span className="ml-2">ja</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={!partnerValue.active}
            onChange={() => onPartnerChange({ active: false, amount: 0 })}
            className="form-radio"
          />
          <span className="ml-2">nein</span>
        </label>
      </div>
      {partnerValue.active && (
        <div className="relative">
          <input
            type="number"
            value={partnerValue.amount || ''}
            onChange={(e) => onPartnerChange({ active: true, amount: Number(e.target.value) })}
            className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
            placeholder="Betrag in €"
          />
          <span className="absolute right-3 top-1 text-gray-500 text-sm">€</span>
        </div>
      )}
    </div>
  </div>
);

export const WishesPage: React.FC<WishesPageProps> = ({
  data,
  onUpdate,
  planningCriteria,
  onUpdatePlanningCriteria,
  stateSubsidies,
  onUpdateStateSubsidies,
}) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Erfüllung der Wünsche</h1>

     

      {/* Wishes Sections */}
      <div className="space-y-6">
        <WishSection
          title="Welche Wünsche möchten Sie kurzfristig realisieren (0-3 Jahre)?"
          wishes={data.shortTerm.wishes}
          onUpdate={(wishes) =>
            onUpdate({ ...data, shortTerm: { wishes } })
          }
        />

        <WishSection
          title="Welche Wünsche möchten Sie mittelfristig realisieren (3-10 Jahre)?"
          wishes={data.mediumTerm.wishes}
          onUpdate={(wishes) =>
            onUpdate({ ...data, mediumTerm: { wishes } })
          }
        />

        <WishSection
          title="Welche Wünsche möchten Sie langfristig realisieren (ab 10 Jahre)?"
          wishes={data.longTerm.wishes}
          onUpdate={(wishes) =>
            onUpdate({ ...data, longTerm: { wishes } })
          }
        />
      </div>
      {/* Planning Criteria */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Planungskriterien</h2>
             {/* Hobbies and Club Memberships */}
      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              label="Welchen Hobbys gehen Sie in Ihrer Freizeit nach?"
              value={planningCriteria.hobbies?.mandant || ''}
              onChange={(value) => onUpdatePlanningCriteria({
                ...planningCriteria,
                hobbies: { ...planningCriteria.hobbies, mandant: value }
              })}
            />
          </div>
          <div className="col-span-6">
            <FormField
              label="Partner Hobbys"
              value={planningCriteria.hobbies?.partner || ''}
              onChange={(value) => onUpdatePlanningCriteria({
                ...planningCriteria,
                hobbies: { ...planningCriteria.hobbies, partner: value }
              })}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              label="In welchen Vereinen/Automobilclub sind Sie Mitglied?"
              value={planningCriteria.clubMemberships?.mandant || ''}
              onChange={(value) => onUpdatePlanningCriteria({
                ...planningCriteria,
                clubMemberships: { ...planningCriteria.clubMemberships, mandant: value }
              })}
            />
          </div>
          <div className="col-span-6">
            <FormField
              label="Partner Vereinsmitgliedschaften"
              value={planningCriteria.clubMemberships?.partner || ''}
              onChange={(value) => onUpdatePlanningCriteria({
                ...planningCriteria,
                clubMemberships: { ...planningCriteria.clubMemberships, partner: value }
              })}
            />
          </div>
        </div>
      </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6"></div>
          <div className="col-span-3 text-center font-medium text-gray-700">Mandant</div>
          <div className="col-span-3 text-center font-medium text-gray-700">Partner</div>
        </div>

        <YesNoCheckbox
          label="Wurden bisher Anträge abgelehnt oder nur zu erschwerten Bedingungen angenommen?"
          mandantValue={planningCriteria.rejectedApplications.mandant}
          partnerValue={planningCriteria.rejectedApplications.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              rejectedApplications: {
                ...planningCriteria.rejectedApplications,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              rejectedApplications: {
                ...planningCriteria.rejectedApplications,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Sind Sie mit Ihrer Mietsituation zufrieden?"
          mandantValue={planningCriteria.satisfiedWithRent.mandant}
          partnerValue={planningCriteria.satisfiedWithRent.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              satisfiedWithRent: {
                ...planningCriteria.satisfiedWithRent,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              satisfiedWithRent: {
                ...planningCriteria.satisfiedWithRent,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Haben Sie in naher Zukunft die Absicht, den Weg in die Selbständigkeit aufzunehmen?"
          mandantValue={planningCriteria.plansSelfEmployment.mandant}
          partnerValue={planningCriteria.plansSelfEmployment.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              plansSelfEmployment: {
                ...planningCriteria.plansSelfEmployment,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              plansSelfEmployment: {
                ...planningCriteria.plansSelfEmployment,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Haben Sie bereits ein Testament für sich angelegt?"
          mandantValue={planningCriteria.hasWill.mandant}
          partnerValue={planningCriteria.hasWill.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasWill: { ...planningCriteria.hasWill, mandant: value },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasWill: { ...planningCriteria.hasWill, partner: value },
            })
          }
        />

        <YesNoCheckbox
          label="Haben Sie bereits eine Betreuungs- bzw. Patientenverfügung angelegt?"
          mandantValue={planningCriteria.hasLivingWill.mandant}
          partnerValue={planningCriteria.hasLivingWill.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasLivingWill: {
                ...planningCriteria.hasLivingWill,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasLivingWill: {
                ...planningCriteria.hasLivingWill,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Haben Sie bisher Lebens- oder Rentenversicherungen gekündigt?"
          mandantValue={planningCriteria.hasCancelledInsurance.mandant}
          partnerValue={planningCriteria.hasCancelledInsurance.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasCancelledInsurance: {
                ...planningCriteria.hasCancelledInsurance,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              hasCancelledInsurance: {
                ...planningCriteria.hasCancelledInsurance,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Möchten Sie eingesparte Beträge zur Erfüllung Ihrer Wünsche und Ziele einsetzen?"
          mandantValue={planningCriteria.wantsToInvestSavings.mandant}
          partnerValue={planningCriteria.wantsToInvestSavings.partner}
          onMandantChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              wantsToInvestSavings: {
                ...planningCriteria.wantsToInvestSavings,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdatePlanningCriteria({
              ...planningCriteria,
              wantsToInvestSavings: {
                ...planningCriteria.wantsToInvestSavings,
                partner: value,
              },
            })
          }
        />
      </div>

      {/* State Subsidies */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Welche staatlichen Förderungen nutzen Sie?
        </h2>

        <YesNoCheckbox
          label="Riester/Rürup/bAV"
          mandantValue={stateSubsidies.riesterRuerupPension.mandant}
          partnerValue={stateSubsidies.riesterRuerupPension.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              riesterRuerupPension: {
                ...stateSubsidies.riesterRuerupPension,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              riesterRuerupPension: {
                ...stateSubsidies.riesterRuerupPension,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Eigenheimzulage/Wohnungsbauprämie"
          mandantValue={stateSubsidies.housingSubsidy.mandant}
          partnerValue={stateSubsidies.housingSubsidy.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              housingSubsidy: {
                ...stateSubsidies.housingSubsidy,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              housingSubsidy: {
                ...stateSubsidies.housingSubsidy,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Denkmalschutzabschreibung (§§ 7i, 7h EStG)"
          mandantValue={stateSubsidies.monumentProtection.mandant}
          partnerValue={stateSubsidies.monumentProtection.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              monumentProtection: {
                ...stateSubsidies.monumentProtection,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              monumentProtection: {
                ...stateSubsidies.monumentProtection,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="Abschreibung Neubau (§ 10e EStG)"
          mandantValue={stateSubsidies.newBuildingDepreciation.mandant}
          partnerValue={stateSubsidies.newBuildingDepreciation.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              newBuildingDepreciation: {
                ...stateSubsidies.newBuildingDepreciation,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              newBuildingDepreciation: {
                ...stateSubsidies.newBuildingDepreciation,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckbox
          label="SAB oder KfW Darlehen"
          mandantValue={stateSubsidies.developmentLoan.mandant}
          partnerValue={stateSubsidies.developmentLoan.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              developmentLoan: {
                ...stateSubsidies.developmentLoan,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              developmentLoan: {
                ...stateSubsidies.developmentLoan,
                partner: value,
              },
            })
          }
        />

        <YesNoCheckboxWithAmount
          label="Vermögenswirksame Leistungen (VWL)/Anteil Arbeitgeber"
          mandantValue={stateSubsidies.employerBenefits.mandant}
          partnerValue={stateSubsidies.employerBenefits.partner}
          onMandantChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              employerBenefits: {
                ...stateSubsidies.employerBenefits,
                mandant: value,
              },
            })
          }
          onPartnerChange={(value) =>
            onUpdateStateSubsidies({
              ...stateSubsidies,
              employerBenefits: {
                ...stateSubsidies.employerBenefits,
                partner: value,
              },
            })
          }
        />
      </div>
    </div>
  );
};