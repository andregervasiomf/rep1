import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';

interface AgeOption {
  label: string;
  value: string;
}

interface BodyTypeOption {
  label: string;
  value: string;
  description: string;
}

interface ConcernOption {
  label: string;
  value: string;
}

interface GoalOption {
  label: string;
  value: string;
}

interface BodyGoalOption {
  label: string;
  value: string;
  description: string;
}

interface ProblemAreaOption {
  label: string;
  value: string;
}

interface ProblemAreaOption {
  label: string;
  value: string;
}

interface BestShapeOption {
  label: string;
  value: string;
}

interface WeightChangeOption {
  label: string;
  value: string;
}

interface ActivityOption {
  label: string;
  value: string;
  emoji: string;
}

interface BodyStruggleOption {
  label: string;
  value: string;
}

const ageOptions: AgeOption[] = [
  { label: '30-39', value: '30-39' },
  { label: '40-49', value: '40-49' },
  { label: '50-59', value: '50-59' },
  { label: '60+', value: '60+' },
];

const bodyTypeOptions: BodyTypeOption[] = [
  { label: 'Slim', value: 'slim', description: 'Lean build with minimal body fat' },
  { label: 'Average', value: 'average', description: 'Moderate build with some muscle definition' },
  { label: 'Heavy', value: 'heavy', description: 'Larger build with more body mass' },
];

const concernOptions: ConcernOption[] = [
  { label: 'Tension in the body', value: 'tension' },
  { label: 'Stress and anxiety', value: 'stress' },
  { label: 'Fatigue and low energy', value: 'fatigue' },
  { label: 'Poor sleep', value: 'sleep' },
  { label: 'Just curious to try', value: 'curious' },
];

const goalOptions: GoalOption[] = [
  { label: 'Weight loss', value: 'weight-loss' },
  { label: 'Wellness and longevity', value: 'wellness' },
  { label: 'Energy and vitality', value: 'energy' },
  { label: 'Balance and Mobility', value: 'balance' },
];
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Map step numbers to URL slugs
  const stepToSlug = {
    1: '/age',
    2: '/body-type', 
    3: '/concerns',
    4: '/goals',
    5: '/body-goals',
    6: '/problem-areas',
    7: '/tai-chi-info',
    8: '/best-shape',
    9: '/weight-change',
    10: '/activities',
    11: '/body-struggles',
    12: '/restore-body',
    13: '/workout-level',
    14: '/training-frequency'
  };
  
  const slugToStep = {
    '/age': 1,
    '/body-type': 2,
    '/concerns': 3,
    '/goals': 4,
    '/body-goals': 5,
    '/problem-areas': 6,
    '/tai-chi-info': 7,
    '/best-shape': 8,
    '/weight-change': 9,
    '/activities': 10,
    '/body-struggles': 11,
    '/restore-body': 12,
    '/workout-level': 13,
    '/training-frequency': 14
  };
  
  // Initialize current step based on URL
  const getInitialStep = () => {
    const currentSlug = location.pathname;
    return slugToStep[currentSlug as keyof typeof slugToStep] || 1;
  };

const bodyGoalOptions: BodyGoalOption[] = [
  { label: 'A few sizes smaller', value: 'smaller', description: 'Lean and toned physique' },
  { label: 'Fit', value: 'fit', description: 'Athletic and defined build' },
  { label: 'Athletic', value: 'athletic', description: 'Muscular and strong physique' },
];

const problemAreaOptions: ProblemAreaOption[] = [
  { label: 'Chest', value: 'chest' },
  { label: 'Slim arms', value: 'slim-arms' },
  { label: 'Beer belly', value: 'beer-belly' },
  { label: 'Slim legs', value: 'slim-legs' },
];

const bestShapeOptions: BestShapeOption[] = [
  { label: 'Less than a year ago', value: 'less-than-year' },
  { label: '1-3 years ago', value: '1-3-years' },
  { label: 'More than 3 years ago', value: 'more-than-3-years' },
  { label: 'Never', value: 'never' },
];

const activityOptions: ActivityOption[] = [
  { label: 'Walking outside', value: 'walking-outside', emoji: '🚶‍♂️' },
  { label: 'Morning exercise', value: 'morning-exercise', emoji: '🌅' },
  { label: 'Walking my pet', value: 'walking-pet', emoji: '🐕' },
  { label: 'Climbing stairs frequently', value: 'climbing-stairs', emoji: '🪜' },
  { label: 'Spend time with my child', value: 'spend-time-child', emoji: '👶' },
  { label: 'Household affairs', value: 'household-affairs', emoji: '🛠️' },
  { label: 'None of the above', value: 'none', emoji: '❌' },
];

const bodyStruggleOptions: BodyStruggleOption[] = [
  { label: 'Joints', value: 'joints' },
  { label: 'Knees', value: 'knees' },
  { label: 'Back', value: 'back' },
  { label: 'Lower back', value: 'lower-back' },
  { label: 'None of the above', value: 'none' },
];

const weightChangeOptions: WeightChangeOption[] = [
  { label: 'I gain weight fast but lose slowly', value: 'gain-fast-lose-slow' },
  { label: 'I gain and lose weight easily', value: 'gain-lose-easily' },
  { label: 'I struggle to gain weight or muscle', value: 'struggle-gain' },
];

  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedBodyGoal, setSelectedBodyGoal] = useState<string | null>(null);
  const [selectedProblemAreas, setSelectedProblemAreas] = useState<string[]>([]);
  const [selectedBestShape, setSelectedBestShape] = useState<string | null>(null);
  const [selectedWeightChange, setSelectedWeightChange] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedBodyStruggles, setSelectedBodyStruggles] = useState<string[]>([]);
  const [selectedWorkoutLevel, setSelectedWorkoutLevel] = useState<string | null>(null);
  const [selectedTrainingFrequency, setSelectedTrainingFrequency] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(getInitialStep);
  
  // Update URL when step changes
  const updateStep = (step: number) => {
    setCurrentStep(step);
    const slug = stepToSlug[step as keyof typeof stepToSlug];
    if (slug) {
      navigate(slug, { replace: true });
    }
  };

  const handleAgeSelect = (value: string) => {
    setSelectedAge(value);
    console.log('Selected age:', value);
    
    // Add 0.3-second delay before showing next question
    setTimeout(() => {
      updateStep(2);
    }, 300);
  };

  const handleBodyTypeSelect = (value: string) => {
    setSelectedBodyType(value);
    console.log('Selected body type:', value);
    
    // Add 0.3-second delay before showing next question
    setTimeout(() => {
      updateStep(3);
    }, 300);
  };

  const handleConcernSelect = (value: string) => {
    setSelectedConcern(value);
    console.log('Selected concern:', value);
  };

  const handleGoalSelect = (value: string) => {
    setSelectedGoal(value);
    console.log('Selected goal:', value);
  };

  const handleBodyGoalSelect = (value: string) => {
    setSelectedBodyGoal(value);
    console.log('Selected body goal:', value);
    
    // Add 0.3-second delay before showing next question
    setTimeout(() => {
      updateStep(6);
    }, 300);
  };

  const handleProblemAreaToggle = (value: string) => {
    setSelectedProblemAreas(prev => {
      if (prev.includes(value)) {
        return prev.filter(area => area !== value);
      } else {
        return [...prev, value];
      }
    });
  };


  const handleBestShapeSelect = (value: string) => {
    setSelectedBestShape(value);
    console.log('Selected best shape:', value);
  };

  const handleWeightChangeSelect = (value: string) => {
    setSelectedWeightChange(value);
    console.log('Selected weight change:', value);
  };

  const handleActivityToggle = (value: string) => {
    if (value === 'none') {
      // If "None of the above" is selected, clear all other selections
      setSelectedActivities(['none']);
    } else {
      setSelectedActivities(prev => {
        // Remove "none" if it was previously selected
        const withoutNone = prev.filter(activity => activity !== 'none');
        
        if (withoutNone.includes(value)) {
          return withoutNone.filter(activity => activity !== value);
        } else {
          return [...withoutNone, value];
        }
      });
    }
  };

  const handleBodyStruggleToggle = (value: string) => {
    if (value === 'none') {
      // If "None of the above" is selected, clear all other selections
      setSelectedBodyStruggles(['none']);
    } else {
      setSelectedBodyStruggles(prev => {
        // Remove "none" if it was previously selected
        const withoutNone = prev.filter(struggle => struggle !== 'none');
        
        if (withoutNone.includes(value)) {
          return withoutNone.filter(struggle => struggle !== value);
        } else {
          return [...withoutNone, value];
        }
      });
    }
  };

  const handleWorkoutLevelSelect = (value: string) => {
    setSelectedWorkoutLevel(value);
    console.log('Selected workout level:', value);
  };

  const handleTrainingFrequencySelect = (value: string) => {
    setSelectedTrainingFrequency(value);
    console.log('Selected training frequency:', value);
  };

  const handleContinue = () => {
    if (currentStep === 3 && selectedConcern) {
      setTimeout(() => {
        updateStep(4);
      }, 300);
    } else if (currentStep === 4 && selectedGoal) {
      setTimeout(() => {
        updateStep(5);
      }, 300);
    } else if (currentStep === 6 && selectedProblemAreas.length > 0) {
      setTimeout(() => {
        updateStep(7);
      }, 300);
    } else if (currentStep === 7) {
      setTimeout(() => {
        updateStep(8);
      }, 300);
    } else if (currentStep === 8 && selectedBestShape) {
      setTimeout(() => {
        updateStep(9);
      }, 300);
    } else if (currentStep === 9) {
      setTimeout(() => {
        updateStep(10);
      }, 300);
    } else if (currentStep === 10 && selectedActivities.length > 0) {
      setTimeout(() => {
        updateStep(11);
      }, 300);
    } else if (currentStep === 11 && selectedBodyStruggles.length > 0) {
      setTimeout(() => {
        updateStep(12);
      }, 300);
    } else if (currentStep === 12) {
      setTimeout(() => {
        updateStep(13);
      }, 300);
    } else if (currentStep === 13 && selectedWorkoutLevel) {
      setTimeout(() => {
        updateStep(14);
      }, 300);
    } else if (currentStep === 14) {
      // Quiz completed - log all responses
      console.log('Quiz completed with responses:', {
        age: selectedAge,
        bodyType: selectedBodyType,
        concern: selectedConcern,
        goal: selectedGoal,
        bodyGoal: selectedBodyGoal,
        problemAreas: selectedProblemAreas,
        bestShape: selectedBestShape,
        weightChange: selectedWeightChange,
        activities: selectedActivities,
        bodyStruggles: selectedBodyStruggles,
        workoutLevel: selectedWorkoutLevel,
        trainingFrequency: selectedTrainingFrequency
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      updateStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center">
          <div className="bg-black text-white px-3 py-2 text-sm font-bold tracking-wide">
            MAD
          </div>
          <div className="border-2 border-black px-3 py-2 text-sm font-bold tracking-wide ml-1">
            MUSCLES
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-black transition-colors hidden lg:block">
            English
          </button>
          <button className="text-gray-700 hover:text-black transition-colors flex items-center gap-1">
            <HelpCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Help</span>
          </button>
          <button className="text-gray-700 hover:text-black transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      {currentStep > 1 && (
        <div className="px-4 lg:px-6 mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBack}
              className="text-gray-600 hover:text-black transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 13) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 font-medium">{currentStep}/14</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentStep === 1 ? (
        <>
          {/* Title - Centered for both mobile and desktop */}
          <div className="w-full text-center px-4 mb-8 lg:mb-12">
            <h1 className="w-[342px] h-[96px] mx-auto text-3xl lg:text-5xl font-bold text-gray-900 leading-tight flex items-center justify-center mb-[-20px]">
              Tai Chi for<br />beginners
            </h1>
          </div>

          <main className="flex flex-col lg:flex-row items-center justify-center px-4 max-w-7xl mx-auto gap-4 lg:gap-16 flex-1">
            {/* Content Container - Mobile: side by side, Desktop: normal flow */}
            <div className="flex flex-row lg:flex-row items-center justify-center w-[342px] h-[360px] gap-6 lg:gap-16">
              {/* Left Side - Image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-56 sm:w-48 sm:h-64 lg:w-64 lg:h-80 bg-gradient-to-b from-amber-100 to-amber-50 rounded-lg flex items-end justify-center overflow-hidden shadow-lg">
                  {/* Placeholder for the Tai Chi practitioner image */}
                  <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                    <div className="text-gray-500 text-center mb-4 lg:mb-8">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full mx-auto mb-1 lg:mb-2"></div>
                      <p className="text-xs hidden sm:block">Tai Chi Practitioner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col items-start text-left flex-1 max-w-sm">
                <div className="w-full">
                  <h2 className="text-orange-500 font-bold text-xs sm:text-sm lg:text-base mb-3 sm:mb-6 tracking-wide">
                    SELECT YOUR AGE
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
                    {ageOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAgeSelect(option.value)}
                        className={`w-full lg:w-[250px] lg:h-[60px] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 lg:px-6 lg:py-0 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-200 group ${
                          selectedAge === option.value 
                            ? 'bg-orange-100 border-2 border-orange-500' 
                            : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                        }`}
                      >
                        <span className="text-gray-800 font-medium text-base sm:text-lg">
                          {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black font-bold transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : currentStep === 2 ? (
        <main className="flex flex-col items-center justify-center px-4 py-2 lg:py-4 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            Choose your body type
          </h1>

          <div className="w-full max-w-2xl space-y-3 lg:space-y-3">
            {bodyTypeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleBodyTypeSelect(option.value)}
                className={`w-full lg:w-[470px] lg:h-[140px] bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 lg:gap-6 shadow-lg hover:shadow-xl transition-all duration-200 group ${
                  selectedBodyType === option.value 
                    ? 'bg-orange-100 border-2 border-orange-500' 
                    : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                } lg:mx-auto`}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg lg:text-lg font-bold text-gray-900">
                    {option.label}
                  </h3>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-20 h-28 lg:w-28 lg:h-28 bg-gradient-to-b from-amber-100 to-amber-50 rounded-lg flex items-end justify-center overflow-hidden">
                    {/* Body type illustration placeholder */}
                    <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                      <div className="text-gray-500 text-center mb-2 lg:mb-3">
                        <div className={`${
                          option.value === 'slim' ? 'w-4 h-6 lg:w-5 lg:h-6' :
                          option.value === 'average' ? 'w-6 h-6 lg:w-6 lg:h-6' :
                          'w-8 h-6 lg:w-8 lg:h-6'
                        } bg-gray-300 rounded-full mx-auto mb-1`}></div>
                        <p className="text-xs hidden lg:block">{option.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      ) : currentStep === 3 ? (
        <main className="flex flex-col items-center justify-center px-4 py-2 lg:py-4 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center max-w-2xl">
            What's bothering you the most right now?
          </h1>

          <div className="w-full max-w-md space-y-3 mb-6">
            {concernOptions.map((option) => (
              <label
                key={option.value}
                className={`w-full bg-white rounded-2xl p-4 lg:p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  selectedConcern === option.value 
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="concern"
                  value={option.value}
                  checked={selectedConcern === option.value}
                  onChange={() => handleConcernSelect(option.value)}
                  className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-gray-800 font-medium text-base lg:text-base flex-1">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedConcern}
            className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
              selectedConcern
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 4 ? (
        <main className="flex flex-col lg:flex-row items-center justify-center px-4 py-4 lg:py-8 max-w-6xl mx-auto flex-1 gap-8 lg:gap-16">
          {/* Left Side - Goal Selection */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center lg:text-left">
              Choose your goal
            </h1>

            <div className="w-full max-w-md space-y-4 mb-8">
              {goalOptions.map((option) => (
                <label
                  key={option.value}
                  className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                    selectedGoal === option.value 
                      ? 'bg-orange-50 border-2 border-orange-500' 
                      : 'border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={option.value}
                    checked={selectedGoal === option.value}
                    onChange={() => handleGoalSelect(option.value)}
                    className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={!selectedGoal}
              className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
                selectedGoal
                  ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Figure Illustration */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-80 h-96 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl flex items-end justify-center overflow-hidden shadow-lg">
              {/* Placeholder for the figure illustration */}
              <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                <div className="text-gray-500 text-center mb-8">
                  <div className="w-20 h-32 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm">Tai Chi Practitioner</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : currentStep === 5 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            Choose the body you want
          </h1>

          <div className="w-full max-w-lg space-y-4 lg:space-y-6">
            {bodyGoalOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleBodyGoalSelect(option.value)}
                className={`w-full bg-white rounded-2xl p-4 lg:p-6 flex items-center gap-4 lg:gap-6 shadow-lg hover:shadow-xl transition-all duration-200 group ${
                  selectedBodyGoal === option.value 
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                    {option.label}
                  </h3>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-24 h-32 lg:w-32 lg:h-40 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl flex items-end justify-center overflow-hidden">
                    {/* Body type illustration placeholder */}
                    <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                      <div className="text-gray-500 text-center mb-2 lg:mb-4">
                        <div className={`${
                          option.value === 'smaller' ? 'w-6 h-8 lg:w-8 lg:h-10' :
                          option.value === 'fit' ? 'w-8 h-8 lg:w-10 lg:h-10' :
                          'w-10 h-8 lg:w-12 lg:h-10'
                        } bg-gray-300 rounded-lg mx-auto mb-1`}></div>
                        <p className="text-xs hidden lg:block">{option.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      ) : currentStep === 6 ? (
        <main className="flex flex-col items-center justify-center px-4 py-1 lg:py-2 max-w-5xl mx-auto flex-1 min-h-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">
            Select problem areas
          </h1>

          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-6">
            {problemAreaOptions.map((option) => (
              <label
                key={option.value}
                className={`w-full bg-white rounded-xl p-3 lg:p-4 flex flex-col lg:flex-col items-center gap-3 lg:gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  selectedProblemAreas.includes(option.value)
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedProblemAreas.includes(option.value)}
                  onChange={() => handleProblemAreaToggle(option.value)}
                  className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 flex-shrink-0 order-2 lg:order-1"
                />
                <div className="flex-1 text-center lg:text-center order-3 lg:order-3">
                  <h3 className="text-base lg:text-base font-bold text-gray-900">
                    {option.label}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 order-1 lg:order-2">
                  <div className="w-16 h-20 lg:w-24 lg:h-28 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg flex items-end justify-center overflow-hidden">
                    {/* Body area illustration placeholder */}
                    <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                      <div className="text-gray-500 text-center mb-1 lg:mb-2">
                        <div className={`${
                          option.value === 'chest' ? 'w-6 h-4 lg:w-10 lg:h-6' :
                          option.value === 'slim-arms' ? 'w-4 h-6 lg:w-8 lg:h-10' :
                          option.value === 'beer-belly' ? 'w-8 h-4 lg:w-12 lg:h-6' :
                          'w-4 h-8 lg:w-8 lg:h-12'
                        } bg-gray-300 rounded-md mx-auto`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={selectedProblemAreas.length === 0}
            className={`px-6 py-2 lg:px-8 lg:py-3 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 flex items-center gap-2 ${
              selectedProblemAreas.length > 0
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </main>
      ) : currentStep === 7 ? (
        <main className="flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto flex-1">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Tai Chi practitioner on beach at sunset"
              className="w-64 h-48 lg:w-80 lg:h-60 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center max-w-2xl leading-tight">
            This is not a workout. It's<br />meditation in motion.
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center">
            Tai Chi is an ancient <span className="font-bold">Chinese practice</span> that:
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-12 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Boosts <span className="font-bold">energy</span> and <span className="font-bold">vitality</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Reduces <span className="font-bold">stress</span> and anxiety
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Gently <span className="font-bold">stretches</span> and <span className="font-bold">restores</span> the body
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Improves <span className="font-bold">sleep</span>
              </span>
            </div>
          </div>

          {/* Got it Button */}
          <button
            onClick={handleContinue}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Got it
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 8 ? (
        <main className="flex flex-col lg:flex-row items-center justify-center px-4 py-4 lg:py-8 max-w-6xl mx-auto flex-1 gap-8 lg:gap-8">
          {/* Left Side - Best Shape Selection */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center lg:text-left">
              How long ago were you in the best shape of your life?
            </h1>

            <div className="w-full max-w-md space-y-4 mb-8">
              {bestShapeOptions.map((option) => (
                <label
                  key={option.value}
                  className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                    selectedBestShape === option.value 
                      ? 'bg-orange-50 border-2 border-orange-500' 
                      : 'border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="bestShape"
                    value={option.value}
                    checked={selectedBestShape === option.value}
                    onChange={() => handleBestShapeSelect(option.value)}
                    className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={!selectedBestShape}
              className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
                selectedBestShape
                  ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Figure Illustration */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-80 h-96 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl flex items-end justify-center overflow-hidden shadow-lg">
              {/* Placeholder for the figure illustration */}
              <div className="w-full h-full bg-gradient-to-t from-gray-200 via-gray-100 to-transparent flex items-end justify-center">
                <div className="text-gray-500 text-center mb-8">
                  <div className="w-20 h-32 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm">Tai Chi Practitioner</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : currentStep === 9 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            How does your weight typically change?
          </h1>

          <div className="w-full max-w-md space-y-4 mb-8">
            {weightChangeOptions.map((option) => (
              <label
                key={option.value}
                className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  selectedWeightChange === option.value 
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="weightChange"
                  value={option.value}
                  checked={selectedWeightChange === option.value}
                  onChange={() => handleWeightChangeSelect(option.value)}
                  className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 10 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            Are any of these activities part of your life?
          </h1>

          <div className="w-full max-w-md space-y-4 mb-8">
            {activityOptions.map((option) => (
              <label
                key={option.value}
                className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  selectedActivities.includes(option.value)
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedActivities.includes(option.value)}
                  onChange={() => handleActivityToggle(option.value)}
                  className="w-5 h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                  {option.label} {option.emoji}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={selectedActivities.length === 0}
            className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
              selectedActivities.length > 0
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 11 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            Which parts of your body struggle the most?
          </h1>

          <div className="w-full max-w-md space-y-4 mb-8">
            {bodyStruggleOptions.map((option) => (
              <label
                key={option.value}
                className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                  selectedBodyStruggles.includes(option.value)
                    ? 'bg-orange-50 border-2 border-orange-500' 
                    : 'border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedBodyStruggles.includes(option.value)}
                  onChange={() => handleBodyStruggleToggle(option.value)}
                  className="w-5 h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={selectedBodyStruggles.length === 0}
            className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
              selectedBodyStruggles.length > 0
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 12 ? (
        <main className="flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto flex-1">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Person doing tai chi in nature"
              className="w-64 h-48 lg:w-80 lg:h-60 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center max-w-2xl leading-tight">
            Restore your body with<br />gentle movements
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center max-w-2xl">
            Tai Chi helps you reconnect with your body through <span className="font-bold">slow, flowing movements</span> that:
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-12 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Release <span className="font-bold">tension</span> and <span className="font-bold">stiffness</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Improve <span className="font-bold">flexibility</span> and <span className="font-bold">mobility</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-800">
                Strengthen your <span className="font-bold">core</span> and <span className="font-bold">balance</span>
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 13 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center leading-tight">
            Choose your preferred level of workouts
          </h1>

          <div className="w-full max-w-md space-y-4">
            {[
              { value: 'light', label: 'Keep it light and chill 🧘' },
              { value: 'effort', label: "I'm good with some effort 💪" },
              { value: 'intensity', label: 'Bring on the intensity 🚀' },
              { value: 'decide', label: 'Let Mad Muscles decide' }
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  selectedWorkoutLevel === option.value
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="preferredLevel"
                  value={option.value}
                  checked={selectedWorkoutLevel === option.value}
                  onChange={() => handleWorkoutLevelSelect(option.value)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedWorkoutLevel === option.value
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300'
                }`}>
                  {selectedWorkoutLevel === option.value && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-lg font-medium text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedWorkoutLevel}
            className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
              selectedWorkoutLevel
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : currentStep === 14 ? (
        <main className="flex flex-col items-center justify-center px-4 py-4 lg:py-8 max-w-4xl mx-auto flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">
            How often would you like to train?
          </h1>

          <div className="w-full max-w-md space-y-4 mb-8">
            <label
              className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                selectedTrainingFrequency === '2-3-times'
                  ? 'bg-orange-50 border-2 border-orange-500' 
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="trainingFrequency"
                value="2-3-times"
                checked={selectedTrainingFrequency === '2-3-times'}
                onChange={() => handleTrainingFrequencySelect('2-3-times')}
                className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
              />
              <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                2-3 times per week
              </span>
            </label>

            <label
              className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                selectedTrainingFrequency === '4-5-times'
                  ? 'bg-orange-50 border-2 border-orange-500' 
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="trainingFrequency"
                value="4-5-times"
                checked={selectedTrainingFrequency === '4-5-times'}
                onChange={() => handleTrainingFrequencySelect('4-5-times')}
                className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
              />
              <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                4-5 times per week
              </span>
            </label>

            <label
              className={`w-full bg-white rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                selectedTrainingFrequency === 'daily'
                  ? 'bg-orange-50 border-2 border-orange-500' 
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="trainingFrequency"
                value="daily"
                checked={selectedTrainingFrequency === 'daily'}
                onChange={() => handleTrainingFrequencySelect('daily')}
                className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
              />
              <span className="text-gray-800 font-medium text-base lg:text-lg flex-1">
                Daily
              </span>
            </label>
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedTrainingFrequency}
            className={`px-8 py-3 rounded-2xl font-medium text-base transition-all duration-200 flex items-center gap-2 ${
              selectedTrainingFrequency
                ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Complete Quiz
            <ChevronRight className="w-5 h-5" />
          </button>
        </main>
      ) : null}
    </div>
  );
}

export default App;