import React, { useState } from 'react';
import { FormPage, HeaderData, PriorityRatings, WishesData, PlanningCriteria, StateSubsidies, ClientDataPageData, FinancialData, OtherData, IncomeSecurity, RetirementPlanning, ContractStatus, FinancialConceptOrder, FinalQuestions } from './types';
import { BasicDataPage } from './pages/BasicDataPage';
import { PrioritiesPage } from './pages/PrioritiesPage';
import { WishesPage } from './pages/WishesPage';
import { ClientDataPage } from './pages/ClientDataPage';
import { CareerPage } from './pages/CareerPage';
import { FinancialPage } from './pages/FinancialPage';
import { OtherDataPage } from './pages/OtherDataPage';
import { IncomeSecurityPage } from './pages/IncomeSecurityPage';
import { ContractStatusPage } from './pages/ContractStatusPage';
import { FinancialConceptOrderPage } from './pages/FinancialConceptOrderPage';
import { FinalQuestionsPage } from './pages/FinalQuestionsPage';
import { PageContainer } from './components/PageContainer';
import { initialHeaderData, initialPriorityRatings, initialWishesData, initialPlanningCriteria, initialStateSubsidies, initialClientData, initialFinancialData, initialOtherData, initialIncomeSecurity, initialRetirementPlanning, initialContractStatus, initialFinancialConceptOrder, initialFinalQuestions } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [headerData, setHeaderData] = useState<HeaderData>(initialHeaderData);
  const [priorityRatings, setPriorityRatings] = useState<PriorityRatings>(initialPriorityRatings);
  const [wishesData, setWishesData] = useState<WishesData>(initialWishesData);
  const [planningCriteria, setPlanningCriteria] = useState<PlanningCriteria>(initialPlanningCriteria);
  const [stateSubsidies, setStateSubsidies] = useState<StateSubsidies>(initialStateSubsidies);
  const [clientData, setClientData] = useState<ClientDataPageData>(initialClientData);
  const [financialData, setFinancialData] = useState<FinancialData>(initialFinancialData);
  const [otherData, setOtherData] = useState<OtherData>(initialOtherData);
  const [incomeSecurity, setIncomeSecurity] = useState<IncomeSecurity>(initialIncomeSecurity);
  const [retirementPlanning, setRetirementPlanning] = useState<RetirementPlanning>(initialRetirementPlanning);
  const [contractStatus, setContractStatus] = useState<ContractStatus>(initialContractStatus);
  const [financialConceptOrder, setFinancialConceptOrder] = useState<FinancialConceptOrder>(initialFinancialConceptOrder);
  const [finalQuestions, setFinalQuestions] = useState<FinalQuestions>(initialFinalQuestions);

  const handleNext = () => {
    if (currentPage < 11) {
      setCurrentPage(prev => (prev + 1) as FormPage);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => (prev - 1) as FormPage);
      window.scrollTo(0, 0);
    }
  };

  const updateHeaderData = (field: keyof HeaderData, value: string) => {
    setHeaderData(prev => ({ ...prev, [field]: value }));
  };

  const updatePriorityRatings = (field: keyof PriorityRatings, value: number) => {
    setPriorityRatings(prev => ({ ...prev, [field]: value }));
  };

  const allFormData = {
    headerData,
    priorityRatings,
    wishesData,
    planningCriteria,
    stateSubsidies,
    clientData,
    financialData,
    otherData,
    incomeSecurity,
    retirementPlanning,
    contractStatus,
    financialConceptOrder,
    finalQuestions
  };

  const renderCurrentPage = () => {
    const content = (() => {
      switch (currentPage) {
        case 1:
          return (
            <BasicDataPage 
              data={headerData} 
              onUpdate={updateHeaderData}
            />
          );
        case 2:
          return (
            <PrioritiesPage 
              data={priorityRatings} 
              onUpdate={updatePriorityRatings} 
            />
          );
        case 3:
          return (
            <WishesPage
              data={wishesData}
              onUpdate={setWishesData}
              planningCriteria={planningCriteria}
              onUpdatePlanningCriteria={setPlanningCriteria}
              stateSubsidies={stateSubsidies}
              onUpdateStateSubsidies={setStateSubsidies}
            />
          );
        case 4:
          return (
            <ClientDataPage
              data={clientData}
              onUpdate={setClientData}
              headerData={headerData}
              allFormData={allFormData}
            />
          );
        case 5:
          return (
            <CareerPage
              data={clientData}
              onUpdate={setClientData}
            />
          );
        case 6:
          return (
            <FinancialPage
              data={financialData}
              onUpdate={setFinancialData}
            />
          );
        case 7:
          return (
            <OtherDataPage
              data={otherData}
              onUpdate={setOtherData}
              allFormData={allFormData}
            />
          );
        case 8:
          return (
            <IncomeSecurityPage
              incomeSecurity={incomeSecurity}
              onUpdateIncomeSecurity={setIncomeSecurity}
              retirementPlanning={retirementPlanning}
              onUpdateRetirementPlanning={setRetirementPlanning}
            />
          );
        case 9:
          return (
            <ContractStatusPage
              data={contractStatus}
              onUpdate={setContractStatus}
            />
          );
        case 10:
          return (
            <FinancialConceptOrderPage
              data={financialConceptOrder}
              onUpdate={setFinancialConceptOrder}
              headerData={headerData}
            />
          );
        case 11:
          return (
            <FinalQuestionsPage
              data={finalQuestions}
              onUpdate={setFinalQuestions}
              allFormData={allFormData}
            />
          );
        default:
          return null;
      }
    })();

    return (
      <PageContainer
        currentPage={currentPage}
        totalPages={11}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {content}
      </PageContainer>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {renderCurrentPage()}
        </div>
      </div>
    </div>
  );
};

export default App;