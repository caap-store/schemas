import { Number, Text, Boolean, Date, DateTime, Time } from "./core";

export type DataType = Number | Text | Boolean | Date | DateTime | Time;

/**
*
* @see @link https://schema.org/ActionStatusType
*
* @remarks
* The status of an Action.
*
**/
export type ActionStatusType =
  | "ActiveActionStatus"
  | "CompletedActionStatus"
  | "FailedActionStatus"
  | "PotentialActionStatus"
;
/**
*
* @see @link https://schema.org/BoardingPolicyType
*
* @remarks
* A type of boarding policy used by an airline.
*
**/
export type BoardingPolicyType =
  | "GroupBoardingPolicy"
  | "ZoneBoardingPolicy"
;
/**
*
* @see @link https://schema.org/BodyMeasurementTypeEnumeration
*
* @remarks
* Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export type BodyMeasurementTypeEnumeration =
  | "BodyMeasurementArm"
  | "BodyMeasurementBust"
  | "BodyMeasurementChest"
  | "BodyMeasurementFoot"
  | "BodyMeasurementHand"
  | "BodyMeasurementHead"
  | "BodyMeasurementHeight"
  | "BodyMeasurementHips"
  | "BodyMeasurementInsideLeg"
  | "BodyMeasurementNeck"
  | "BodyMeasurementUnderbust"
  | "BodyMeasurementWaist"
  | "BodyMeasurementWeight"
;
/**
*
* @see @link https://schema.org/BookFormatType
*
* @remarks
* The publication format of the book.
*
**/
export type BookFormatType =
  | "AudiobookFormat"
  | "EBook"
  | "GraphicNovel"
  | "Hardcover"
  | "Paperback"
;
/**
*
* @see @link https://schema.org/CarUsageType
*
* @remarks
* A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
*
* 
* Partof: https://auto.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export type CarUsageType =
  | "DrivingSchoolVehicleUsage"
  | "RentalVehicleUsage"
  | "TaxiVehicleUsage"
;
/**
*
* @see @link https://schema.org/ContactPointOption
*
* @remarks
* Enumerated options related to a ContactPoint.
*
**/
export type ContactPointOption =
  | "HearingImpairedSupported"
  | "TollFree"
;
/**
*
* @see @link https://schema.org/DayOfWeek
*
* @remarks
* The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.

Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
      
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export type DayOfWeek =
  | "Friday"
  | "Monday"
  | "PublicHolidays"
  | "Saturday"
  | "Sunday"
  | "Thursday"
  | "Tuesday"
  | "Wednesday"
;
/**
*
* @see @link https://schema.org/DeliveryMethod
*
* @remarks
* A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\n* http://purl.org/goodrelations/v1#DeliveryModeMail\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
        
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export type DeliveryMethod =
  | "LockerDelivery"
  | "OnSitePickup"
  | "ParcelService"
;
/**
*
* @see @link https://schema.org/DigitalDocumentPermissionType
*
* @remarks
* A type of permission which can be granted for accessing a digital document.
*
**/
export type DigitalDocumentPermissionType =
  | "CommentPermission"
  | "ReadPermission"
  | "WritePermission"
;
/**
*
* @see @link https://schema.org/DriveWheelConfigurationValue
*
* @remarks
* A value indicating which roadwheels will receive torque.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export type DriveWheelConfigurationValue =
  | "AllWheelDriveConfiguration"
  | "FourWheelDriveConfiguration"
  | "FrontWheelDriveConfiguration"
  | "RearWheelDriveConfiguration"
;
/**
*
* @see @link https://schema.org/DrugCostCategory
*
* @remarks
* Enumerated categories of medical drug costs.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type DrugCostCategory =
  | "ReimbursementCap"
  | "Retail"
  | "Wholesale"
;
/**
*
* @see @link https://schema.org/DrugPregnancyCategory
*
* @remarks
* Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type DrugPregnancyCategory =
  | "FDAcategoryA"
  | "FDAcategoryB"
  | "FDAcategoryC"
  | "FDAcategoryD"
  | "FDAcategoryX"
  | "FDAnotEvaluated"
;
/**
*
* @see @link https://schema.org/DrugPrescriptionStatus
*
* @remarks
* Indicates whether this drug is available by prescription or over-the-counter.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type DrugPrescriptionStatus =
  | "OTC"
  | "PrescriptionOnly"
;
/**
*
* @see @link https://schema.org/EUEnergyEfficiencyEnumeration
*
* @remarks
* Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2670
*
**/
export type EUEnergyEfficiencyEnumeration =
  | "EUEnergyEfficiencyCategoryA"
  | "EUEnergyEfficiencyCategoryA1Plus"
  | "EUEnergyEfficiencyCategoryA2Plus"
  | "EUEnergyEfficiencyCategoryA3Plus"
  | "EUEnergyEfficiencyCategoryB"
  | "EUEnergyEfficiencyCategoryC"
  | "EUEnergyEfficiencyCategoryD"
  | "EUEnergyEfficiencyCategoryE"
  | "EUEnergyEfficiencyCategoryF"
  | "EUEnergyEfficiencyCategoryG"
;
/**
*
* @see @link https://schema.org/EnergyStarEnergyEfficiencyEnumeration
*
* @remarks
* Used to indicate whether a product is EnergyStar certified.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2670
*
**/
export type EnergyStarEnergyEfficiencyEnumeration =
  | "EnergyStarCertified"
;
/**
*
* @see @link https://schema.org/EventAttendanceModeEnumeration
*
* @remarks
* An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1842
*
**/
export type EventAttendanceModeEnumeration =
  | "MixedEventAttendanceMode"
  | "OfflineEventAttendanceMode"
  | "OnlineEventAttendanceMode"
;
/**
*
* @see @link https://schema.org/EventStatusType
*
* @remarks
* EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
*
**/
export type EventStatusType =
  | "EventCancelled"
  | "EventMovedOnline"
  | "EventPostponed"
  | "EventRescheduled"
  | "EventScheduled"
;
/**
*
* @see @link https://schema.org/GamePlayMode
*
* @remarks
* Indicates whether this game is multi-player, co-op or single-player.
*
**/
export type GamePlayMode =
  | "CoOp"
  | "MultiPlayer"
  | "SinglePlayer"
;
/**
*
* @see @link https://schema.org/GameServerStatus
*
* @remarks
* Status of a game server.
*
**/
export type GameServerStatus =
  | "OfflinePermanently"
  | "OfflineTemporarily"
  | "Online"
  | "OnlineFull"
;
/**
*
* @see @link https://schema.org/GenderType
*
* @remarks
* An enumeration of genders.
*
**/
export type GenderType =
  | "Female"
  | "Male"
;
/**
*
* @see @link https://schema.org/GovernmentBenefitsType
*
* @remarks
* GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2534
*
**/
export type GovernmentBenefitsType =
  | "BasicIncome"
  | "BusinessSupport"
  | "DisabilitySupport"
  | "HealthCare"
  | "OneTimePayments"
  | "PaidLeave"
  | "ParentalSupport"
  | "UnemploymentSupport"
;
/**
*
* @see @link https://schema.org/HealthAspectEnumeration
*
* @remarks
* HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2374
*
**/
export type HealthAspectEnumeration =
  | "AllergiesHealthAspect"
  | "BenefitsHealthAspect"
  | "CausesHealthAspect"
  | "ContagiousnessHealthAspect"
  | "EffectivenessHealthAspect"
  | "GettingAccessHealthAspect"
  | "HowItWorksHealthAspect"
  | "HowOrWhereHealthAspect"
  | "IngredientsHealthAspect"
  | "LivingWithHealthAspect"
  | "MayTreatHealthAspect"
  | "MisconceptionsHealthAspect"
  | "OverviewHealthAspect"
  | "PatientExperienceHealthAspect"
  | "PregnancyHealthAspect"
  | "PreventionHealthAspect"
  | "PrognosisHealthAspect"
  | "RelatedTopicsHealthAspect"
  | "RisksOrComplicationsHealthAspect"
  | "SafetyHealthAspect"
  | "ScreeningHealthAspect"
  | "SeeDoctorHealthAspect"
  | "SelfCareHealthAspect"
  | "SideEffectsHealthAspect"
  | "StagesHealthAspect"
  | "SymptomsHealthAspect"
  | "TreatmentsHealthAspect"
  | "TypesHealthAspect"
  | "UsageOrScheduleHealthAspect"
;
/**
*
* @see @link https://schema.org/InfectiousAgentClass
*
* @remarks
* Classes of agents or pathogens that transmit infectious diseases. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type InfectiousAgentClass =
  | "Bacteria"
  | "Fungus"
  | "MulticellularParasite"
  | "Prion"
  | "Protozoa"
  | "Virus"
;
/**
*
* @see @link https://schema.org/ItemAvailability
*
* @remarks
* A list of possible product availability options.
*
**/
export type ItemAvailability =
  | "BackOrder"
  | "Discontinued"
  | "InStock"
  | "InStoreOnly"
  | "LimitedAvailability"
  | "OnlineOnly"
  | "OutOfStock"
  | "PreOrder"
  | "PreSale"
  | "SoldOut"
;
/**
*
* @see @link https://schema.org/ItemListOrderType
*
* @remarks
* Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
*
**/
export type ItemListOrderType =
  | "ItemListOrderAscending"
  | "ItemListOrderDescending"
  | "ItemListUnordered"
;
/**
*
* @see @link https://schema.org/LegalForceStatus
*
* @remarks
* A list of possible statuses for the legal force of a legislation.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1156
* @see @link http://publications.europa.eu/mdr/eli/index.html
*
**/
export type LegalForceStatus =
  | "InForce"
  | "NotInForce"
  | "PartiallyInForce"
;
/**
*
* @see @link https://schema.org/LegalValueLevel
*
* @remarks
* A list of possible levels for the legal validity of a legislation.
*
* 
* Partof: https://pending.schema.org
* @see @link http://publications.europa.eu/mdr/eli/index.html
* @see @link https://github.com/schemaorg/schemaorg/issues/1156
*
**/
export type LegalValueLevel =
  | "AuthoritativeLegalValue"
  | "DefinitiveLegalValue"
  | "OfficialLegalValue"
  | "UnofficialLegalValue"
;
/**
*
* @see @link https://schema.org/MapCategoryType
*
* @remarks
* An enumeration of several kinds of Map.
*
**/
export type MapCategoryType =
  | "ParkingMap"
  | "SeatingMap"
  | "TransitMap"
  | "VenueMap"
;
/**
*
* @see @link https://schema.org/MediaManipulationRatingEnumeration
*
* @remarks
*  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2450
*
**/
export type MediaManipulationRatingEnumeration =
  | "DecontextualizedContent"
  | "EditedOrCroppedContent"
  | "OriginalMediaContent"
  | "SatireOrParodyContent"
  | "StagedContent"
  | "TransformedContent"
;
/**
*
* @see @link https://schema.org/MedicalAudienceType
*
* @remarks
* Target audiences types for medical web pages. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalAudienceType =
  | "Clinician"
  | "MedicalResearcher"
;
/**
*
* @see @link https://schema.org/MedicalDevicePurpose
*
* @remarks
* Categories of medical devices, organized by the purpose or intended use of the device.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalDevicePurpose =
  | "Diagnostic"
  | "Therapeutic"
;
/**
*
* @see @link https://schema.org/MedicalEvidenceLevel
*
* @remarks
* Level of evidence for a medical guideline. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalEvidenceLevel =
  | "EvidenceLevelA"
  | "EvidenceLevelB"
  | "EvidenceLevelC"
;
/**
*
* @see @link https://schema.org/MedicalImagingTechnique
*
* @remarks
* Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalImagingTechnique =
  | "CT"
  | "MRI"
  | "PET"
  | "Radiography"
  | "Ultrasound"
  | "XRay"
;
/**
*
* @see @link https://schema.org/MedicalObservationalStudyDesign
*
* @remarks
* Design models for observational medical studies. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalObservationalStudyDesign =
  | "CaseSeries"
  | "CohortStudy"
  | "CrossSectional"
  | "Longitudinal"
  | "Observational"
  | "Registry"
;
/**
*
* @see @link https://schema.org/MedicalProcedureType
*
* @remarks
* An enumeration that describes different types of medical procedures.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalProcedureType =
  | "NoninvasiveProcedure"
  | "PercutaneousProcedure"
;
/**
*
* @see @link https://schema.org/MedicalSpecialty
*
* @remarks
* Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalSpecialty =
  | "Anesthesia"
  | "Cardiovascular"
  | "CommunityHealth"
  | "Dentistry"
  | "Dermatologic"
  | "Dermatology"
  | "DietNutrition"
  | "Emergency"
  | "Endocrine"
  | "Gastroenterologic"
  | "Genetic"
  | "Geriatric"
  | "Gynecologic"
  | "Hematologic"
  | "Infectious"
  | "LaboratoryScience"
  | "Midwifery"
  | "Musculoskeletal"
  | "Neurologic"
  | "Nursing"
  | "Obstetric"
  | "Oncologic"
  | "Optometric"
  | "Otolaryngologic"
  | "Pathology"
  | "Pediatric"
  | "PharmacySpecialty"
  | "Physiotherapy"
  | "PlasticSurgery"
  | "Podiatric"
  | "PrimaryCare"
  | "Psychiatric"
  | "PublicHealth"
  | "Pulmonary"
  | "Radiography"
  | "Renal"
  | "RespiratoryTherapy"
  | "Rheumatologic"
  | "SpeechPathology"
  | "Surgical"
  | "Toxicologic"
  | "Urologic"
;
/**
*
* @see @link https://schema.org/MedicalStudyStatus
*
* @remarks
* The status of a medical study. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicalStudyStatus =
  | "ActiveNotRecruiting"
  | "Completed"
  | "EnrollingByInvitation"
  | "NotYetRecruiting"
  | "Recruiting"
  | "ResultsAvailable"
  | "ResultsNotAvailable"
  | "Suspended"
  | "Terminated"
  | "Withdrawn"
;
/**
*
* @see @link https://schema.org/MedicalTrialDesign
*
* @remarks
* Design models for medical trials. Enumerated type.
*
* 
* Partof: https://health-lifesci.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_WikiDoc
*
**/
export type MedicalTrialDesign =
  | "DoubleBlindedTrial"
  | "InternationalTrial"
  | "MultiCenterTrial"
  | "OpenTrial"
  | "PlaceboControlledTrial"
  | "RandomizedTrial"
  | "SingleBlindedTrial"
  | "SingleCenterTrial"
  | "TripleBlindedTrial"
;
/**
*
* @see @link https://schema.org/MedicineSystem
*
* @remarks
* Systems of medical practice.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type MedicineSystem =
  | "Ayurvedic"
  | "Chiropractic"
  | "Homeopathic"
  | "Osteopathic"
  | "TraditionalChinese"
  | "WesternConventional"
;
/**
*
* @see @link https://schema.org/MerchantReturnEnumeration
*
* @remarks
* MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2288
*
**/
export type MerchantReturnEnumeration =
  | "MerchantReturnFiniteReturnWindow"
  | "MerchantReturnNotPermitted"
  | "MerchantReturnUnlimitedWindow"
  | "MerchantReturnUnspecified"
;
/**
*
* @see @link https://schema.org/MusicAlbumProductionType
*
* @remarks
* Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ
*
**/
export type MusicAlbumProductionType =
  | "CompilationAlbum"
  | "DJMixAlbum"
  | "DemoAlbum"
  | "LiveAlbum"
  | "MixtapeAlbum"
  | "RemixAlbum"
  | "SoundtrackAlbum"
  | "SpokenWordAlbum"
  | "StudioAlbum"
;
/**
*
* @see @link https://schema.org/MusicAlbumReleaseType
*
* @remarks
* The kind of release which this album is: single, EP or album.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ
*
**/
export type MusicAlbumReleaseType =
  | "AlbumRelease"
  | "BroadcastRelease"
  | "EPRelease"
  | "SingleRelease"
;
/**
*
* @see @link https://schema.org/MusicReleaseFormatType
*
* @remarks
* Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ
*
**/
export type MusicReleaseFormatType =
  | "CDFormat"
  | "CassetteFormat"
  | "DVDFormat"
  | "DigitalAudioTapeFormat"
  | "DigitalFormat"
  | "LaserDiscFormat"
  | "VinylFormat"
;
/**
*
* @see @link https://schema.org/NLNonprofitType
*
* @remarks
* NLNonprofitType: Non-profit organization type originating from the Netherlands.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2543
*
**/
export type NLNonprofitType =
  | "NonprofitANBI"
  | "NonprofitSBBI"
;
/**
*
* @see @link https://schema.org/OfferItemCondition
*
* @remarks
* A list of possible conditions for the item.
*
**/
export type OfferItemCondition =
  | "DamagedCondition"
  | "NewCondition"
  | "RefurbishedCondition"
  | "UsedCondition"
;
/**
*
* @see @link https://schema.org/OrderStatus
*
* @remarks
* Enumerated status values for Order.
*
**/
export type OrderStatus =
  | "OrderCancelled"
  | "OrderDelivered"
  | "OrderInTransit"
  | "OrderPaymentDue"
  | "OrderPickupAvailable"
  | "OrderProblem"
  | "OrderProcessing"
  | "OrderReturned"
;
/**
*
* @see @link https://schema.org/PaymentStatusType
*
* @remarks
* A specific payment status. For example, PaymentDue, PaymentComplete, etc.
*
**/
export type PaymentStatusType =
  | "PaymentAutomaticallyApplied"
  | "PaymentComplete"
  | "PaymentDeclined"
  | "PaymentDue"
  | "PaymentPastDue"
;
/**
*
* @see @link https://schema.org/PhysicalActivityCategory
*
* @remarks
* Categories of physical activity, organized by physiologic classification.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type PhysicalActivityCategory =
  | "AerobicActivity"
  | "AnaerobicActivity"
  | "Balance"
  | "Flexibility"
  | "LeisureTimeActivity"
  | "OccupationalActivity"
  | "StrengthTraining"
;
/**
*
* @see @link https://schema.org/PhysicalExam
*
* @remarks
* A type of physical examination of a patient performed by a physician. 
*
* 
* Partof: https://health-lifesci.schema.org
**/
export type PhysicalExam =
  | "Abdomen"
  | "Appearance"
  | "CardiovascularExam"
  | "Ear"
  | "Eye"
  | "Genitourinary"
  | "Head"
  | "Lung"
  | "MusculoskeletalExam"
  | "Neck"
  | "Neuro"
  | "Nose"
  | "Skin"
  | "Throat"
;
/**
*
* @see @link https://schema.org/PriceComponentTypeEnumeration
*
* @remarks
* Enumerates different price components that together make up the total price for an offered product.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2689
*
**/
export type PriceComponentTypeEnumeration =
  | "ActivationFee"
  | "CleaningFee"
  | "DistanceFee"
  | "Downpayment"
  | "Installment"
  | "Subscription"
;
/**
*
* @see @link https://schema.org/PriceTypeEnumeration
*
* @remarks
* Enumerates different price types, for example list price, invoice price, and sale price.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2712
*
**/
export type PriceTypeEnumeration =
  | "InvoicePrice"
  | "ListPrice"
  | "MSRP"
  | "MinimumAdvertisedPrice"
  | "SRP"
  | "SalePrice"
;
/**
*
* @see @link https://schema.org/RefundTypeEnumeration
*
* @remarks
* RefundTypeEnumeration enumerates several kinds of product return refund types.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2288
*
**/
export type RefundTypeEnumeration =
  | "ExchangeRefund"
  | "FullRefund"
  | "StoreCreditRefund"
;
/**
*
* @see @link https://schema.org/ReservationStatusType
*
* @remarks
* Enumerated status values for Reservation.
*
**/
export type ReservationStatusType =
  | "ReservationCancelled"
  | "ReservationConfirmed"
  | "ReservationHold"
  | "ReservationPending"
;
/**
*
* @see @link https://schema.org/RestrictedDiet
*
* @remarks
* A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
*
**/
export type RestrictedDiet =
  | "DiabeticDiet"
  | "GlutenFreeDiet"
  | "HalalDiet"
  | "HinduDiet"
  | "KosherDiet"
  | "LowCalorieDiet"
  | "LowFatDiet"
  | "LowLactoseDiet"
  | "LowSaltDiet"
  | "VeganDiet"
  | "VegetarianDiet"
;
/**
*
* @see @link https://schema.org/ReturnFeesEnumeration
*
* @remarks
* ReturnFeesEnumeration expresses policies for return fees.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2288
*
**/
export type ReturnFeesEnumeration =
  | "OriginalShippingFees"
  | "RestockingFees"
  | "ReturnShippingFees"
;
/**
*
* @see @link https://schema.org/RsvpResponseType
*
* @remarks
* RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
*
**/
export type RsvpResponseType =
  | "RsvpResponseMaybe"
  | "RsvpResponseNo"
  | "RsvpResponseYes"
;
/**
*
* @see @link https://schema.org/SizeSystemEnumeration
*
* @remarks
* Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export type SizeSystemEnumeration =
  | "SizeSystemImperial"
  | "SizeSystemMetric"
;
/**
*
* @see @link https://schema.org/SteeringPositionValue
*
* @remarks
* A value indicating a steering position.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export type SteeringPositionValue =
  | "LeftHandDriving"
  | "RightHandDriving"
;
/**
*
* @see @link https://schema.org/UKNonprofitType
*
* @remarks
* UKNonprofitType: Non-profit organization type originating from the United Kingdom.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2543
*
**/
export type UKNonprofitType =
  | "CharitableIncorporatedOrganization"
  | "LimitedByGuaranteeCharity"
  | "UKTrust"
  | "UnincorporatedAssociationCharity"
;
/**
*
* @see @link https://schema.org/USNonprofitType
*
* @remarks
* USNonprofitType: Non-profit organization type originating from the United States.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2543
*
**/
export type USNonprofitType =
  | "Nonprofit501a"
  | "Nonprofit501c1"
  | "Nonprofit501c10"
  | "Nonprofit501c11"
  | "Nonprofit501c12"
  | "Nonprofit501c13"
  | "Nonprofit501c14"
  | "Nonprofit501c15"
  | "Nonprofit501c16"
  | "Nonprofit501c17"
  | "Nonprofit501c18"
  | "Nonprofit501c19"
  | "Nonprofit501c2"
  | "Nonprofit501c20"
  | "Nonprofit501c21"
  | "Nonprofit501c22"
  | "Nonprofit501c23"
  | "Nonprofit501c24"
  | "Nonprofit501c25"
  | "Nonprofit501c26"
  | "Nonprofit501c27"
  | "Nonprofit501c28"
  | "Nonprofit501c3"
  | "Nonprofit501c4"
  | "Nonprofit501c5"
  | "Nonprofit501c6"
  | "Nonprofit501c7"
  | "Nonprofit501c8"
  | "Nonprofit501c9"
  | "Nonprofit501d"
  | "Nonprofit501e"
  | "Nonprofit501f"
  | "Nonprofit501k"
  | "Nonprofit501n"
  | "Nonprofit501q"
  | "Nonprofit527"
;
/**
*
* @see @link https://schema.org/WearableMeasurementTypeEnumeration
*
* @remarks
* Enumerates common types of measurement for wearables products.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export type WearableMeasurementTypeEnumeration =
  | "WearableMeasurementBack"
  | "WearableMeasurementChestOrBust"
  | "WearableMeasurementCollar"
  | "WearableMeasurementCup"
  | "WearableMeasurementHeight"
  | "WearableMeasurementHips"
  | "WearableMeasurementInseam"
  | "WearableMeasurementLength"
  | "WearableMeasurementOutsideLeg"
  | "WearableMeasurementSleeve"
  | "WearableMeasurementWaist"
  | "WearableMeasurementWidth"
;
/**
*
* @see @link https://schema.org/WearableSizeGroupEnumeration
*
* @remarks
* Enumerates common size groups (also known as "size types") for wearable products.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export type WearableSizeGroupEnumeration =
  | "WearableSizeGroupBig"
  | "WearableSizeGroupBoys"
  | "WearableSizeGroupExtraShort"
  | "WearableSizeGroupExtraTall"
  | "WearableSizeGroupGirls"
  | "WearableSizeGroupHusky"
  | "WearableSizeGroupInfants"
  | "WearableSizeGroupJuniors"
  | "WearableSizeGroupMaternity"
  | "WearableSizeGroupMens"
  | "WearableSizeGroupMisses"
  | "WearableSizeGroupPetite"
  | "WearableSizeGroupPlus"
  | "WearableSizeGroupRegular"
  | "WearableSizeGroupShort"
  | "WearableSizeGroupTall"
  | "WearableSizeGroupWomens"
;
/**
*
* @see @link https://schema.org/WearableSizeSystemEnumeration
*
* @remarks
* Enumerates common size systems specific for wearable products
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export type WearableSizeSystemEnumeration =
  | "WearableSizeSystemAU"
  | "WearableSizeSystemBR"
  | "WearableSizeSystemCN"
  | "WearableSizeSystemContinental"
  | "WearableSizeSystemDE"
  | "WearableSizeSystemEN13402"
  | "WearableSizeSystemEurope"
  | "WearableSizeSystemFR"
  | "WearableSizeSystemGS1"
  | "WearableSizeSystemIT"
  | "WearableSizeSystemJP"
  | "WearableSizeSystemMX"
  | "WearableSizeSystemUK"
  | "WearableSizeSystemUS"
;
/**
*
* @see @link https://schema.org/3DModel
*
* @remarks
* A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D formats are available (e.g. see [Wikipedia](https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats)); specific encoding formats can be represented using the [[encodingFormat]] property applied to the relevant [[MediaObject]]. For the
case of a single file published after Zip compression, the convention of appending '+zip' to the [[encodingFormat]] can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using [[3DModel]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2140
*
**/
export interface Interface3DModel extends MediaObject {
  isResizable ?: Boolean | Array<Boolean>;
}

/**
*
* @see @link https://schema.org/AboutPage
*
* @remarks
* Web page type: About page.
*
**/
export interface AboutPage extends WebPage {
}

/**
*
* @see @link https://schema.org/AcceptAction
*
* @remarks
* The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
*
**/
export interface AcceptAction extends AllocateAction {
}

/**
*
* @see @link https://schema.org/Accommodation
*
* @remarks
* An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Accommodation extends Place {
  accommodationCategory ?: Text | Array<Text>;
  accommodationFloorPlan ?: FloorPlan | Array<FloorPlan>;
  amenityFeature ?: LocationFeatureSpecification | Array<LocationFeatureSpecification>;
  floorLevel ?: Text | Array<Text>;
  floorSize ?: QuantitativeValue | Array<QuantitativeValue>;
  leaseLength ?: Duration | Array<Duration> | QuantitativeValue | Array<QuantitativeValue>
  numberOfBathroomsTotal ?: Integer | Array<Integer>;
  numberOfBedrooms ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  numberOfFullBathrooms ?: Number | Array<Number>;
  numberOfPartialBathrooms ?: Number | Array<Number>;
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  permittedUsage ?: Text | Array<Text>;
  petsAllowed ?: Text | Array<Text> | Boolean | Array<Boolean>
  tourBookingPage ?: URL | Array<URL>;
  yearBuilt ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/AccountingService
*
* @remarks
* Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
      
*
**/
export interface AccountingService extends FinancialService {
}

/**
*
* @see @link https://schema.org/AchieveAction
*
* @remarks
* The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.
*
**/
export interface AchieveAction extends Action {
}

/**
*
* @see @link https://schema.org/Action
*
* @remarks
* An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass
*
**/
export interface Action extends Thing {
  actionStatus ?: ActionStatusType | Array<ActionStatusType>;
  agent ?: Person | Array<Person> | Organization | Array<Organization>
  endTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  error ?: Thing | Array<Thing>;
  instrument ?: Thing | Array<Thing>;
  location ?: Place | Array<Place> | Text | Array<Text> | VirtualLocation | Array<VirtualLocation> | PostalAddress | Array<PostalAddress>
  object ?: Thing | Array<Thing>;
  participant ?: Person | Array<Person> | Organization | Array<Organization>
  result ?: Thing | Array<Thing>;
  startTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  target ?: EntryPoint | Array<EntryPoint>;
}

/**
*
* @see @link https://schema.org/ActionAccessSpecification
*
* @remarks
* A set of requirements that a must be fulfilled in order to perform an Action.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1741
*
**/
export interface ActionAccessSpecification extends Intangible {
  availabilityEnds ?: DateTime | Array<DateTime> | Time | Array<Time> | Date | Array<Date>
  availabilityStarts ?: DateTime | Array<DateTime> | Date | Array<Date> | Time | Array<Time>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  eligibleRegion ?: Text | Array<Text> | GeoShape | Array<GeoShape> | Place | Array<Place>
  expectsAcceptanceOf ?: Offer | Array<Offer>;
  ineligibleRegion ?: GeoShape | Array<GeoShape> | Text | Array<Text> | Place | Array<Place>
  requiresSubscription ?: Boolean | Array<Boolean> | MediaSubscription | Array<MediaSubscription>
}

/**
*
* @see @link https://schema.org/ActivateAction
*
* @remarks
* The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
*
**/
export interface ActivateAction extends ControlAction {
}

/**
*
* @see @link https://schema.org/AddAction
*
* @remarks
* The act of editing by adding an object to a collection.
*
**/
export interface AddAction extends UpdateAction {
}

/**
*
* @see @link https://schema.org/AdministrativeArea
*
* @remarks
* A geographical region, typically under the jurisdiction of a particular government.
*
**/
export interface AdministrativeArea extends Place {
}

/**
*
* @see @link https://schema.org/AdultEntertainment
*
* @remarks
* An adult entertainment establishment.
*
**/
export interface AdultEntertainment extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/AdvertiserContentArticle
*
* @remarks
* An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface AdvertiserContentArticle extends Article {
}

/**
*
* @see @link https://schema.org/AggregateOffer
*
* @remarks
* When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
*
**/
export interface AggregateOffer extends Offer {
  highPrice ?: Number | Array<Number> | Text | Array<Text>
  lowPrice ?: Text | Array<Text> | Number | Array<Number>
  offerCount ?: Integer | Array<Integer>;
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
}

/**
*
* @see @link https://schema.org/AggregateRating
*
* @remarks
* The average rating based on multiple ratings or reviews.
*
**/
export interface AggregateRating extends Rating {
  itemReviewed ?: Thing | Array<Thing>;
  ratingCount ?: Integer | Array<Integer>;
  reviewCount ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/AgreeAction
*
* @remarks
* The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
*
**/
export interface AgreeAction extends ReactAction {
}

/**
*
* @see @link https://schema.org/Airline
*
* @remarks
* An organization that provides flights for passengers.
*
**/
export interface Airline extends Organization {
  boardingPolicy ?: BoardingPolicyType | Array<BoardingPolicyType>;
  iataCode ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Airport
*
* @remarks
* An airport.
*
**/
export interface Airport extends CivicStructure {
  iataCode ?: Text | Array<Text>;
  icaoCode ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/AlignmentObject
*
* @remarks
* An intangible item that describes an alignment between a learning resource and a node in an educational framework.

Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass
*
**/
export interface AlignmentObject extends Intangible {
  alignmentType ?: Text | Array<Text>;
  educationalFramework ?: Text | Array<Text>;
  targetDescription ?: Text | Array<Text>;
  targetName ?: Text | Array<Text>;
  targetUrl ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/AllocateAction
*
* @remarks
* The act of organizing tasks/objects/events by associating resources to it.
*
**/
export interface AllocateAction extends OrganizeAction {
}

/**
*
* @see @link https://schema.org/AmpStory
*
* @remarks
* A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2646
*
**/
export interface AmpStory extends CreativeWork {
}

/**
*
* @see @link https://schema.org/AMRadioChannel
*
* @remarks
* A radio channel that uses AM.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1004
*
**/
export interface AMRadioChannel extends RadioChannel {
}

/**
*
* @see @link https://schema.org/AmusementPark
*
* @remarks
* An amusement park.
*
**/
export interface AmusementPark extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/AnalysisNewsArticle
*
* @remarks
* An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface AnalysisNewsArticle extends NewsArticle {
}

/**
*
* @see @link https://schema.org/AnatomicalStructure
*
* @remarks
* Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface AnatomicalStructure extends MedicalEntity {
  associatedPathophysiology ?: Text | Array<Text>;
  bodyLocation ?: Text | Array<Text>;
  connectedTo ?: AnatomicalStructure | Array<AnatomicalStructure>;
  diagram ?: ImageObject | Array<ImageObject>;
  partOfSystem ?: AnatomicalSystem | Array<AnatomicalSystem>;
  relatedCondition ?: MedicalCondition | Array<MedicalCondition>;
  relatedTherapy ?: MedicalTherapy | Array<MedicalTherapy>;
  subStructure ?: AnatomicalStructure | Array<AnatomicalStructure>;
}

/**
*
* @see @link https://schema.org/AnatomicalSystem
*
* @remarks
* An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface AnatomicalSystem extends MedicalEntity {
  associatedPathophysiology ?: Text | Array<Text>;
  comprisedOf ?: AnatomicalSystem | Array<AnatomicalSystem> | AnatomicalStructure | Array<AnatomicalStructure>
  relatedCondition ?: MedicalCondition | Array<MedicalCondition>;
  relatedStructure ?: AnatomicalStructure | Array<AnatomicalStructure>;
  relatedTherapy ?: MedicalTherapy | Array<MedicalTherapy>;
}

/**
*
* @see @link https://schema.org/AnimalShelter
*
* @remarks
* Animal shelter.
*
**/
export interface AnimalShelter extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/Answer
*
* @remarks
* An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange
*
**/
export interface Answer extends Comment {
  answerExplanation ?: Comment | Array<Comment> | WebContent | Array<WebContent>
}

/**
*
* @see @link https://schema.org/Apartment
*
* @remarks
* An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Apartment extends Accommodation {
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  occupancy ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/ApartmentComplex
*
* @remarks
* Residence type: Apartment complex.
*
**/
export interface ApartmentComplex extends Residence {
  numberOfAccommodationUnits ?: QuantitativeValue | Array<QuantitativeValue>;
  numberOfAvailableAccommodationUnits ?: QuantitativeValue | Array<QuantitativeValue>;
  numberOfBedrooms ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  petsAllowed ?: Text | Array<Text> | Boolean | Array<Boolean>
  tourBookingPage ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/APIReference
*
* @remarks
* Reference documentation for application programming interfaces (APIs).
*
**/
export interface APIReference extends TechArticle {
  assembly ?: Text | Array<Text>;
  assemblyVersion ?: Text | Array<Text>;
  executableLibraryName ?: Text | Array<Text>;
  programmingModel ?: Text | Array<Text>;
  targetPlatform ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/AppendAction
*
* @remarks
* The act of inserting at the end if an ordered collection.
*
**/
export interface AppendAction extends InsertAction {
}

/**
*
* @see @link https://schema.org/ApplyAction
*
* @remarks
* The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
*
**/
export interface ApplyAction extends OrganizeAction {
}

/**
*
* @see @link https://schema.org/ApprovedIndication
*
* @remarks
* An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface ApprovedIndication extends MedicalIndication {
}

/**
*
* @see @link https://schema.org/Aquarium
*
* @remarks
* Aquarium.
*
**/
export interface Aquarium extends CivicStructure {
}

/**
*
* @see @link https://schema.org/ArchiveComponent
*
* @remarks
* An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1758
*
**/
export interface ArchiveComponent extends CreativeWork {
  holdingArchive ?: ArchiveOrganization | Array<ArchiveOrganization>;
  itemLocation ?: PostalAddress | Array<PostalAddress> | Place | Array<Place> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/ArchiveOrganization
*
* @remarks
* An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1758
*
**/
export interface ArchiveOrganization extends LocalBusiness {
  archiveHeld ?: ArchiveComponent | Array<ArchiveComponent>;
}

/**
*
* @see @link https://schema.org/ArriveAction
*
* @remarks
* The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.
*
**/
export interface ArriveAction extends MoveAction {
}

/**
*
* @see @link https://schema.org/Artery
*
* @remarks
* A type of blood vessel that specifically carries blood away from the heart.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Artery extends Vessel {
  arterialBranch ?: AnatomicalStructure | Array<AnatomicalStructure>;
  supplyTo ?: AnatomicalStructure | Array<AnatomicalStructure>;
}

/**
*
* @see @link https://schema.org/ArtGallery
*
* @remarks
* An art gallery.
*
**/
export interface ArtGallery extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/Article
*
* @remarks
* An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface Article extends CreativeWork {
  articleBody ?: Text | Array<Text>;
  articleSection ?: Text | Array<Text>;
  backstory ?: CreativeWork | Array<CreativeWork> | Text | Array<Text>
  pageEnd ?: Text | Array<Text> | Integer | Array<Integer>
  pageStart ?: Text | Array<Text> | Integer | Array<Integer>
  pagination ?: Text | Array<Text>;
  speakable ?: SpeakableSpecification | Array<SpeakableSpecification> | URL | Array<URL>
  wordCount ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/AskAction
*
* @remarks
* The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
*
**/
export interface AskAction extends CommunicateAction {
  question ?: Question | Array<Question>;
}

/**
*
* @see @link https://schema.org/AskPublicNewsArticle
*
* @remarks
* A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
*
**/
export interface AskPublicNewsArticle extends NewsArticle {
}

/**
*
* @see @link https://schema.org/AssessAction
*
* @remarks
* The act of forming one's opinion, reaction or sentiment.
*
**/
export interface AssessAction extends Action {
}

/**
*
* @see @link https://schema.org/AssignAction
*
* @remarks
* The act of allocating an action/event/task to some destination (someone or something).
*
**/
export interface AssignAction extends AllocateAction {
}

/**
*
* @see @link https://schema.org/Atlas
*
* @remarks
* A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject.
*
* 
* Partof: https://bib.schema.org
* @see @link http://www.productontology.org/id/Atlas
*
**/
export interface Atlas extends CreativeWork {
}

/**
*
* @see @link https://schema.org/Attorney
*
* @remarks
* Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous.
*
**/
export interface Attorney extends LegalService {
}

/**
*
* @see @link https://schema.org/Audience
*
* @remarks
* Intended audience for an item, i.e. the group for whom the item was created.
*
**/
export interface Audience extends Intangible {
  audienceType ?: Text | Array<Text>;
  geographicArea ?: AdministrativeArea | Array<AdministrativeArea>;
}

/**
*
* @see @link https://schema.org/Audiobook
*
* @remarks
* An audiobook.
*
* 
* Partof: https://bib.schema.org
**/
export interface Audiobook extends Book, AudioObject {
  duration ?: Duration | Array<Duration>;
  readBy ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/AudioObject
*
* @remarks
* An audio file.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface AudioObject extends MediaObject {
  caption ?: Text | Array<Text> | MediaObject | Array<MediaObject>
  transcript ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/AuthorizeAction
*
* @remarks
* The act of granting permission to an object.
*
**/
export interface AuthorizeAction extends AllocateAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/AutoBodyShop
*
* @remarks
* Auto body shop.
*
**/
export interface AutoBodyShop extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/AutoDealer
*
* @remarks
* An car dealership.
*
**/
export interface AutoDealer extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/AutomatedTeller
*
* @remarks
* ATM/cash machine.
*
**/
export interface AutomatedTeller extends FinancialService {
}

/**
*
* @see @link https://schema.org/AutomotiveBusiness
*
* @remarks
* Car repair, sales, or parts.
*
**/
export interface AutomotiveBusiness extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/AutoPartsStore
*
* @remarks
* An auto parts store.
*
**/
export interface AutoPartsStore extends AutomotiveBusiness, Store {
}

/**
*
* @see @link https://schema.org/AutoRental
*
* @remarks
* A car rental business.
*
**/
export interface AutoRental extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/AutoRepair
*
* @remarks
* Car repair business.
*
**/
export interface AutoRepair extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/AutoWash
*
* @remarks
* A car wash business.
*
**/
export interface AutoWash extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/BackgroundNewsArticle
*
* @remarks
* A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ([FAQ](https://en.wikipedia.org/wiki/FAQ)) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using [[Book]] or [[Article]], in particular [[ScholarlyArticle]]. See also [[NewsArticle]] for related vocabulary from a learning/education perspective.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface BackgroundNewsArticle extends NewsArticle {
}

/**
*
* @see @link https://schema.org/Bakery
*
* @remarks
* A bakery.
*
**/
export interface Bakery extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/BankAccount
*
* @remarks
* A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface BankAccount extends FinancialProduct {
  accountMinimumInflow ?: MonetaryAmount | Array<MonetaryAmount>;
  accountOverdraftLimit ?: MonetaryAmount | Array<MonetaryAmount>;
  bankAccountType ?: URL | Array<URL> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/BankOrCreditUnion
*
* @remarks
* Bank or credit union.
*
**/
export interface BankOrCreditUnion extends FinancialService {
}

/**
*
* @see @link https://schema.org/Barcode
*
* @remarks
* An image of a visual machine-readable code such as a barcode or QR code.
*
**/
export interface Barcode extends ImageObject {
}

/**
*
* @see @link https://schema.org/BarOrPub
*
* @remarks
* A bar or pub.
*
**/
export interface BarOrPub extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/Beach
*
* @remarks
* Beach.
*
**/
export interface Beach extends CivicStructure {
}

/**
*
* @see @link https://schema.org/BeautySalon
*
* @remarks
* Beauty salon.
*
**/
export interface BeautySalon extends HealthAndBeautyBusiness {
}

/**
*
* @see @link https://schema.org/BedAndBreakfast
*
* @remarks
* Bed and breakfast.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
**/
export interface BedAndBreakfast extends LodgingBusiness {
}

/**
*
* @see @link https://schema.org/BedDetails
*
* @remarks
* An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface BedDetails extends Intangible {
  numberOfBeds ?: Number | Array<Number>;
  typeOfBed ?: Text | Array<Text> | BedType | Array<BedType>
}

/**
*
* @see @link https://schema.org/BedType
*
* @remarks
* A type of bed. This is used for indicating the bed or beds available in an accommodation.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1262
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface BedType extends QualitativeValue {
}

/**
*
* @see @link https://schema.org/BefriendAction
*
* @remarks
* The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
*
**/
export interface BefriendAction extends InteractAction {
}

/**
*
* @see @link https://schema.org/BikeStore
*
* @remarks
* A bike store.
*
**/
export interface BikeStore extends Store {
}

/**
*
* @see @link https://schema.org/Blog
*
* @remarks
* A blog.
*
**/
export interface Blog extends CreativeWork {
  blogPost ?: BlogPosting | Array<BlogPosting>;
  blogPosts ?: BlogPosting | Array<BlogPosting>;
  issn ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/BlogPosting
*
* @remarks
* A blog post.
*
**/
export interface BlogPosting extends SocialMediaPosting {
}

/**
*
* @see @link https://schema.org/BloodTest
*
* @remarks
* A medical test performed on a sample of a patient's blood.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface BloodTest extends MedicalTest {
}

/**
*
* @see @link https://schema.org/BoatReservation
*
* @remarks
* A reservation for boat travel.

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1755
*
**/
export interface BoatReservation extends Reservation {
}

/**
*
* @see @link https://schema.org/BoatTerminal
*
* @remarks
* A terminal for boats, ships, and other water vessels.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1755
*
**/
export interface BoatTerminal extends CivicStructure {
}

/**
*
* @see @link https://schema.org/BoatTrip
*
* @remarks
* A trip on a commercial ferry line.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1755
*
**/
export interface BoatTrip extends Trip {
  arrivalBoatTerminal ?: BoatTerminal | Array<BoatTerminal>;
  departureBoatTerminal ?: BoatTerminal | Array<BoatTerminal>;
}

/**
*
* @see @link https://schema.org/BodyOfWater
*
* @remarks
* A body of water, such as a sea, ocean, or lake.
*
**/
export interface BodyOfWater extends Landform {
}

/**
*
* @see @link https://schema.org/Bone
*
* @remarks
* Rigid connective tissue that comprises up the skeletal structure of the human body.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Bone extends AnatomicalStructure {
}

/**
*
* @see @link https://schema.org/Book
*
* @remarks
* A book.
*
**/
export interface Book extends CreativeWork {
  abridged ?: Boolean | Array<Boolean>;
  bookEdition ?: Text | Array<Text>;
  bookFormat ?: BookFormatType | Array<BookFormatType>;
  illustrator ?: Person | Array<Person>;
  isbn ?: Text | Array<Text>;
  numberOfPages ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/BookmarkAction
*
* @remarks
* An agent bookmarks/flags/labels/tags/marks an object.
*
**/
export interface BookmarkAction extends OrganizeAction {
}

/**
*
* @see @link https://schema.org/BookSeries
*
* @remarks
* A series of books. Included books can be indicated with the hasPart property.
*
**/
export interface BookSeries extends CreativeWorkSeries {
}

/**
*
* @see @link https://schema.org/BookStore
*
* @remarks
* A bookstore.
*
**/
export interface BookStore extends Store {
}

/**
*
* @see @link https://schema.org/BorrowAction
*
* @remarks
* The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
*
**/
export interface BorrowAction extends TransferAction {
  lender ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/BowlingAlley
*
* @remarks
* A bowling alley.
*
**/
export interface BowlingAlley extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/BrainStructure
*
* @remarks
* Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface BrainStructure extends AnatomicalStructure {
}

/**
*
* @see @link https://schema.org/Brand
*
* @remarks
* A brand is a name used by an organization or business person for labeling a product, product group, or similar.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface Brand extends Intangible {
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  logo ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  review ?: Review | Array<Review>;
  slogan ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/BreadcrumbList
*
* @remarks
* A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.\n\nThe [[position]] property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an [[itemListOrder]] of [[ItemListOrderAscending]] (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
      
*
**/
export interface BreadcrumbList extends ItemList {
}

/**
*
* @see @link https://schema.org/Brewery
*
* @remarks
* Brewery.
*
**/
export interface Brewery extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/Bridge
*
* @remarks
* A bridge.
*
**/
export interface Bridge extends CivicStructure {
}

/**
*
* @see @link https://schema.org/BroadcastChannel
*
* @remarks
* A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
*
**/
export interface BroadcastChannel extends Intangible {
  broadcastChannelId ?: Text | Array<Text>;
  broadcastFrequency ?: Text | Array<Text> | BroadcastFrequencySpecification | Array<BroadcastFrequencySpecification>
  broadcastServiceTier ?: Text | Array<Text>;
  genre ?: URL | Array<URL> | Text | Array<Text>
  inBroadcastLineup ?: CableOrSatelliteService | Array<CableOrSatelliteService>;
  providesBroadcastService ?: BroadcastService | Array<BroadcastService>;
}

/**
*
* @see @link https://schema.org/BroadcastEvent
*
* @remarks
* An over the air or online broadcast event.
*
**/
export interface BroadcastEvent extends PublicationEvent {
  broadcastOfEvent ?: Event | Array<Event>;
  isLiveBroadcast ?: Boolean | Array<Boolean>;
  subtitleLanguage ?: Text | Array<Text> | Language | Array<Language>
  videoFormat ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/BroadcastFrequencySpecification
*
* @remarks
* The frequency in MHz and the modulation used for a particular BroadcastService.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1004
*
**/
export interface BroadcastFrequencySpecification extends Intangible {
  broadcastFrequencyValue ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  broadcastSignalModulation ?: Text | Array<Text> | QualitativeValue | Array<QualitativeValue>
  broadcastSubChannel ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/BroadcastService
*
* @remarks
* A delivery service through which content is provided via broadcast over the air or online.
*
**/
export interface BroadcastService extends Service {
  area ?: Place | Array<Place>;
  broadcastAffiliateOf ?: Organization | Array<Organization>;
  broadcastDisplayName ?: Text | Array<Text>;
  broadcaster ?: Organization | Array<Organization>;
  broadcastFrequency ?: Text | Array<Text> | BroadcastFrequencySpecification | Array<BroadcastFrequencySpecification>
  broadcastTimezone ?: Text | Array<Text>;
  callSign ?: Text | Array<Text>;
  hasBroadcastChannel ?: BroadcastChannel | Array<BroadcastChannel>;
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  parentService ?: BroadcastService | Array<BroadcastService>;
  videoFormat ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/BrokerageAccount
*
* @remarks
* An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface BrokerageAccount extends InvestmentOrDeposit {
}

/**
*
* @see @link https://schema.org/BuddhistTemple
*
* @remarks
* A Buddhist temple.
*
**/
export interface BuddhistTemple extends PlaceOfWorship {
}

/**
*
* @see @link https://schema.org/BusinessAudience
*
* @remarks
* A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
*
**/
export interface BusinessAudience extends Audience {
  numberOfEmployees ?: QuantitativeValue | Array<QuantitativeValue>;
  yearlyRevenue ?: QuantitativeValue | Array<QuantitativeValue>;
  yearsInOperation ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/BusinessEntityType
*
* @remarks
* A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller
	  
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface BusinessEntityType extends Enumeration {
}

/**
*
* @see @link https://schema.org/BusinessEvent
*
* @remarks
* Event type: Business event.
*
**/
export interface BusinessEvent extends Event {
}

/**
*
* @see @link https://schema.org/BusinessFunction
*
* @remarks
* The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy
        
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface BusinessFunction extends Enumeration {
}

/**
*
* @see @link https://schema.org/BusOrCoach
*
* @remarks
* A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel.
*
* 
* Partof: https://auto.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export interface BusOrCoach extends Vehicle {
  acrissCode ?: Text | Array<Text>;
  roofLoad ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/BusReservation
*
* @remarks
* A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
**/
export interface BusReservation extends Reservation {
}

/**
*
* @see @link https://schema.org/BusStation
*
* @remarks
* A bus station.
*
**/
export interface BusStation extends CivicStructure {
}

/**
*
* @see @link https://schema.org/BusStop
*
* @remarks
* A bus stop.
*
**/
export interface BusStop extends CivicStructure {
}

/**
*
* @see @link https://schema.org/BusTrip
*
* @remarks
* A trip on a commercial bus line.
*
**/
export interface BusTrip extends Trip {
  arrivalBusStop ?: BusStop | Array<BusStop> | BusStation | Array<BusStation>
  busName ?: Text | Array<Text>;
  busNumber ?: Text | Array<Text>;
  departureBusStop ?: BusStation | Array<BusStation> | BusStop | Array<BusStop>
}

/**
*
* @see @link https://schema.org/BuyAction
*
* @remarks
* The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
*
**/
export interface BuyAction extends TradeAction {
  seller ?: Organization | Array<Organization> | Person | Array<Person>
  vendor ?: Organization | Array<Organization> | Person | Array<Person>
  warrantyPromise ?: WarrantyPromise | Array<WarrantyPromise>;
}

/**
*
* @see @link https://schema.org/CableOrSatelliteService
*
* @remarks
* A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
*
**/
export interface CableOrSatelliteService extends Service {
}

/**
*
* @see @link https://schema.org/CafeOrCoffeeShop
*
* @remarks
* A cafe or coffee shop.
*
**/
export interface CafeOrCoffeeShop extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/Campground
*
* @remarks
* A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing individual [[CampingPitch]] locations. \n\n
In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\n

See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Campground extends LodgingBusiness, CivicStructure {
}

/**
*
* @see @link https://schema.org/CampingPitch
*
* @remarks
* A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or [[Campground]].\n\n
In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
(Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\n
See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface CampingPitch extends Accommodation {
}

/**
*
* @see @link https://schema.org/Canal
*
* @remarks
* A canal, like the Panama Canal.
*
**/
export interface Canal extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/CancelAction
*
* @remarks
* The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction.
*
**/
export interface CancelAction extends PlanAction {
}

/**
*
* @see @link https://schema.org/Car
*
* @remarks
* A car is a wheeled, self-powered motor vehicle used for transportation.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export interface Car extends Vehicle {
  acrissCode ?: Text | Array<Text>;
  roofLoad ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/Casino
*
* @remarks
* A casino.
*
**/
export interface Casino extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/CategoryCode
*
* @remarks
* A Category Code.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/894
*
**/
export interface CategoryCode extends DefinedTerm {
  codeValue ?: Text | Array<Text>;
  inCodeSet ?: URL | Array<URL> | CategoryCodeSet | Array<CategoryCodeSet>
}

/**
*
* @see @link https://schema.org/CategoryCodeSet
*
* @remarks
* A set of Category Code values.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/894
*
**/
export interface CategoryCodeSet extends DefinedTermSet {
  hasCategoryCode ?: CategoryCode | Array<CategoryCode>;
}

/**
*
* @see @link https://schema.org/CatholicChurch
*
* @remarks
* A Catholic church.
*
**/
export interface CatholicChurch extends Church {
}

/**
*
* @see @link https://schema.org/CDCPMDRecord
*
* @remarks
* A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
      used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
      definitions used as the source here.
      
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2521
*
**/
export interface CDCPMDRecord extends StructuredValue {
  cvdCollectionDate ?: Text | Array<Text> | DateTime | Array<DateTime>
  cvdFacilityCounty ?: Text | Array<Text>;
  cvdFacilityId ?: Text | Array<Text>;
  cvdNumBeds ?: Number | Array<Number>;
  cvdNumBedsOcc ?: Number | Array<Number>;
  cvdNumC19Died ?: Number | Array<Number>;
  cvdNumC19HOPats ?: Number | Array<Number>;
  cvdNumC19HospPats ?: Number | Array<Number>;
  cvdNumC19MechVentPats ?: Number | Array<Number>;
  cvdNumC19OFMechVentPats ?: Number | Array<Number>;
  cvdNumC19OverflowPats ?: Number | Array<Number>;
  cvdNumICUBeds ?: Number | Array<Number>;
  cvdNumICUBedsOcc ?: Number | Array<Number>;
  cvdNumTotBeds ?: Number | Array<Number>;
  cvdNumVent ?: Number | Array<Number>;
  cvdNumVentUse ?: Number | Array<Number>;
  datePosted ?: Date | Array<Date> | DateTime | Array<DateTime>
}

/**
*
* @see @link https://schema.org/Cemetery
*
* @remarks
* A graveyard.
*
**/
export interface Cemetery extends CivicStructure {
}

/**
*
* @see @link https://schema.org/Chapter
*
* @remarks
* One of the sections into which a book is divided. A chapter usually has a section number or a name.
*
* 
* Partof: https://bib.schema.org
**/
export interface Chapter extends CreativeWork {
  pageEnd ?: Text | Array<Text> | Integer | Array<Integer>
  pageStart ?: Text | Array<Text> | Integer | Array<Integer>
  pagination ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/CheckAction
*
* @remarks
* An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
*
**/
export interface CheckAction extends FindAction {
}

/**
*
* @see @link https://schema.org/CheckInAction
*
* @remarks
* The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).\n\nRelated actions:\n\n* [[CheckOutAction]]: The antonym of CheckInAction.\n* [[ArriveAction]]: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.\n* [[ConfirmAction]]: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the *start* of a previously reserved service rather than its validity/existence.
*
**/
export interface CheckInAction extends CommunicateAction {
}

/**
*
* @see @link https://schema.org/CheckOutAction
*
* @remarks
* The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
*
**/
export interface CheckOutAction extends CommunicateAction {
}

/**
*
* @see @link https://schema.org/CheckoutPage
*
* @remarks
* Web page type: Checkout page.
*
**/
export interface CheckoutPage extends WebPage {
}

/**
*
* @see @link https://schema.org/ChildCare
*
* @remarks
* A Childcare center.
*
**/
export interface ChildCare extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/ChildrensEvent
*
* @remarks
* Event type: Children's event.
*
**/
export interface ChildrensEvent extends Event {
}

/**
*
* @see @link https://schema.org/ChooseAction
*
* @remarks
* The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
*
**/
export interface ChooseAction extends AssessAction {
  actionOption ?: Text | Array<Text> | Thing | Array<Thing>
  option ?: Thing | Array<Thing> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/Church
*
* @remarks
* A church.
*
**/
export interface Church extends PlaceOfWorship {
}

/**
*
* @see @link https://schema.org/City
*
* @remarks
* A city or town.
*
**/
export interface City extends AdministrativeArea {
}

/**
*
* @see @link https://schema.org/CityHall
*
* @remarks
* A city hall.
*
**/
export interface CityHall extends GovernmentBuilding {
}

/**
*
* @see @link https://schema.org/CivicStructure
*
* @remarks
* A public structure, such as a town hall or concert hall.
*
**/
export interface CivicStructure extends Place {
  openingHours ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Claim
*
* @remarks
* A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.

  Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].

  At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1828
*
**/
export interface Claim extends CreativeWork {
  appearance ?: CreativeWork | Array<CreativeWork>;
  firstAppearance ?: CreativeWork | Array<CreativeWork>;
}

/**
*
* @see @link https://schema.org/ClaimReview
*
* @remarks
* A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1061
*
**/
export interface ClaimReview extends Review {
  claimReviewed ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Class
*
* @remarks
* A class, also often called a 'Type'; equivalent to rdfs:Class.
*
* 
* Partof: https://meta.schema.org
**/
export interface Class extends Intangible {
}

/**
*
* @see @link https://schema.org/Clip
*
* @remarks
* A short TV or radio program or a segment/part of a program.
*
**/
export interface Clip extends CreativeWork {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  clipNumber ?: Integer | Array<Integer> | Text | Array<Text>
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  endOffset ?: HyperTocEntry | Array<HyperTocEntry> | Number | Array<Number>
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  partOfEpisode ?: Episode | Array<Episode>;
  partOfSeason ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  partOfSeries ?: CreativeWorkSeries | Array<CreativeWorkSeries>;
  startOffset ?: HyperTocEntry | Array<HyperTocEntry> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/ClothingStore
*
* @remarks
* A clothing store.
*
**/
export interface ClothingStore extends Store {
}

/**
*
* @see @link https://schema.org/Code
*
* @remarks
* Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
*
**/
export interface Code extends CreativeWork {
}

/**
*
* @see @link https://schema.org/Collection
*
* @remarks
* A collection of items e.g. creative works or products.
*
* 
* Partof: https://bib.schema.org
**/
export interface Collection extends CreativeWork {
  collectionSize ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/CollectionPage
*
* @remarks
* Web page type: Collection page.
*
**/
export interface CollectionPage extends WebPage {
}

/**
*
* @see @link https://schema.org/CollegeOrUniversity
*
* @remarks
* A college, university, or other third-level educational institution.
*
**/
export interface CollegeOrUniversity extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/ComedyClub
*
* @remarks
* A comedy club.
*
**/
export interface ComedyClub extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/ComedyEvent
*
* @remarks
* Event type: Comedy event.
*
**/
export interface ComedyEvent extends Event {
}

/**
*
* @see @link https://schema.org/ComicCoverArt
*
* @remarks
* The artwork on the cover of a comic.
*
* 
* Partof: https://bib.schema.org
**/
export interface ComicCoverArt extends ComicStory, CoverArt {
}

/**
*
* @see @link https://schema.org/ComicIssue
*
* @remarks
* Individual comic issues are serially published as
    	part of a larger series. For the sake of consistency, even one-shot issues
    	belong to a series comprised of a single issue. All comic issues can be
    	uniquely identified by: the combination of the name and volume number of the
    	series to which the issue belongs; the issue number; and the variant
    	description of the issue (if any).
*
* 
* Partof: https://bib.schema.org
**/
export interface ComicIssue extends PublicationIssue {
  artist ?: Person | Array<Person>;
  colorist ?: Person | Array<Person>;
  inker ?: Person | Array<Person>;
  letterer ?: Person | Array<Person>;
  penciler ?: Person | Array<Person>;
  variantCover ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/ComicSeries
*
* @remarks
* A sequential publication of comic stories under a
    	unifying title, for example "The Amazing Spider-Man" or "Groo the
    	Wanderer".
*
* 
* Partof: https://bib.schema.org
**/
export interface ComicSeries extends Periodical {
}

/**
*
* @see @link https://schema.org/ComicStory
*
* @remarks
* The term "story" is any indivisible, re-printable
    	unit of a comic, including the interior stories, covers, and backmatter. Most
    	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
*
* 
* Partof: https://bib.schema.org
**/
export interface ComicStory extends CreativeWork {
  artist ?: Person | Array<Person>;
  colorist ?: Person | Array<Person>;
  inker ?: Person | Array<Person>;
  letterer ?: Person | Array<Person>;
  penciler ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/Comment
*
* @remarks
* A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
*
**/
export interface Comment extends CreativeWork {
  downvoteCount ?: Integer | Array<Integer>;
  parentItem ?: Comment | Array<Comment>;
  upvoteCount ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/CommentAction
*
* @remarks
* The act of generating a comment about a subject.
*
**/
export interface CommentAction extends CommunicateAction {
  resultComment ?: Comment | Array<Comment>;
}

/**
*
* @see @link https://schema.org/CommunicateAction
*
* @remarks
* The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
*
**/
export interface CommunicateAction extends InteractAction {
  about ?: Thing | Array<Thing>;
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  language ?: Language | Array<Language>;
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/CompleteDataFeed
*
* @remarks
* A [[CompleteDataFeed]] is a [[DataFeed]] whose standard representation includes content for every item currently in the feed.

This is the equivalent of Atom's element as defined in Feed Paging and Archiving [RFC 5005](https://tools.ietf.org/html/rfc5005), For example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1397
*
**/
export interface CompleteDataFeed extends DataFeed {
}

/**
*
* @see @link https://schema.org/CompoundPriceSpecification
*
* @remarks
* A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface CompoundPriceSpecification extends PriceSpecification {
  priceComponent ?: UnitPriceSpecification | Array<UnitPriceSpecification>;
  priceType ?: PriceTypeEnumeration | Array<PriceTypeEnumeration> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/ComputerLanguage
*
* @remarks
* This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
*
**/
export interface ComputerLanguage extends Intangible {
}

/**
*
* @see @link https://schema.org/ComputerStore
*
* @remarks
* A computer store.
*
**/
export interface ComputerStore extends Store {
}

/**
*
* @see @link https://schema.org/ConfirmAction
*
* @remarks
* The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
*
**/
export interface ConfirmAction extends InformAction {
}

/**
*
* @see @link https://schema.org/Consortium
*
* @remarks
* A Consortium is a membership [[Organization]] whose members are typically Organizations.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1559
*
**/
export interface Consortium extends Organization {
}

/**
*
* @see @link https://schema.org/ConsumeAction
*
* @remarks
* The act of ingesting information/resources/food.
*
**/
export interface ConsumeAction extends Action {
  actionAccessibilityRequirement ?: ActionAccessSpecification | Array<ActionAccessSpecification>;
  expectsAcceptanceOf ?: Offer | Array<Offer>;
}

/**
*
* @see @link https://schema.org/ContactPage
*
* @remarks
* Web page type: Contact page.
*
**/
export interface ContactPage extends WebPage {
}

/**
*
* @see @link https://schema.org/ContactPoint
*
* @remarks
* A contact point&#x2014;for example, a Customer Complaints department.
*
**/
export interface ContactPoint extends StructuredValue {
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  availableLanguage ?: Language | Array<Language> | Text | Array<Text>
  contactOption ?: ContactPointOption | Array<ContactPointOption>;
  contactType ?: Text | Array<Text>;
  email ?: Text | Array<Text>;
  faxNumber ?: Text | Array<Text>;
  hoursAvailable ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  productSupported ?: Product | Array<Product> | Text | Array<Text>
  serviceArea ?: Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  telephone ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Continent
*
* @remarks
* One of the continents (for example, Europe or Africa).
*
**/
export interface Continent extends Landform {
}

/**
*
* @see @link https://schema.org/ControlAction
*
* @remarks
* An agent controls a device or application.
*
**/
export interface ControlAction extends Action {
}

/**
*
* @see @link https://schema.org/ConvenienceStore
*
* @remarks
* A convenience store.
*
**/
export interface ConvenienceStore extends Store {
}

/**
*
* @see @link https://schema.org/Conversation
*
* @remarks
* One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.
*
**/
export interface Conversation extends CreativeWork {
}

/**
*
* @see @link https://schema.org/CookAction
*
* @remarks
* The act of producing/preparing food.
*
**/
export interface CookAction extends CreateAction {
  foodEstablishment ?: Place | Array<Place> | FoodEstablishment | Array<FoodEstablishment>
  foodEvent ?: FoodEvent | Array<FoodEvent>;
  recipe ?: Recipe | Array<Recipe>;
}

/**
*
* @see @link https://schema.org/Corporation
*
* @remarks
* Organization: A business corporation.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface Corporation extends Organization {
  tickerSymbol ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/CorrectionComment
*
* @remarks
* A [[comment]] that corrects [[CreativeWork]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1950
*
**/
export interface CorrectionComment extends Comment {
}

/**
*
* @see @link https://schema.org/Country
*
* @remarks
* A country.
*
**/
export interface Country extends AdministrativeArea {
}

/**
*
* @see @link https://schema.org/Course
*
* @remarks
* A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
*
**/
export interface Course extends CreativeWork, LearningResource {
  courseCode ?: Text | Array<Text>;
  coursePrerequisites ?: Text | Array<Text> | AlignmentObject | Array<AlignmentObject> | Course | Array<Course>
  educationalCredentialAwarded ?: URL | Array<URL> | Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  hasCourseInstance ?: CourseInstance | Array<CourseInstance>;
  numberOfCredits ?: StructuredValue | Array<StructuredValue> | Integer | Array<Integer>
  occupationalCredentialAwarded ?: URL | Array<URL> | Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
}

/**
*
* @see @link https://schema.org/CourseInstance
*
* @remarks
* An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
*
**/
export interface CourseInstance extends Event {
  courseMode ?: Text | Array<Text> | URL | Array<URL>
  courseWorkload ?: Text | Array<Text>;
  instructor ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/Courthouse
*
* @remarks
* A courthouse.
*
**/
export interface Courthouse extends GovernmentBuilding {
}

/**
*
* @see @link https://schema.org/CoverArt
*
* @remarks
* The artwork on the outer surface of a CreativeWork.
*
* 
* Partof: https://bib.schema.org
**/
export interface CoverArt extends VisualArtwork {
}

/**
*
* @see @link https://schema.org/CovidTestingFacility
*
* @remarks
* A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus
      disease is available. If the facility is being made available from an established [[Pharmacy]], [[Hotel]], or other
      non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information
      about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable.
      
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2490
*
**/
export interface CovidTestingFacility extends MedicalClinic {
}

/**
*
* @see @link https://schema.org/CreateAction
*
* @remarks
* The act of deliberately creating/producing/generating/building a result out of the agent.
*
**/
export interface CreateAction extends Action {
}

/**
*
* @see @link https://schema.org/CreativeWork
*
* @remarks
* The most generic kind of creative work, including books, movies, photographs, software programs, etc.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface CreativeWork extends Thing {
  about ?: Thing | Array<Thing>;
  abstract ?: Text | Array<Text>;
  accessibilityAPI ?: Text | Array<Text>;
  accessibilityControl ?: Text | Array<Text>;
  accessibilityFeature ?: Text | Array<Text>;
  accessibilityHazard ?: Text | Array<Text>;
  accessibilitySummary ?: Text | Array<Text>;
  accessMode ?: Text | Array<Text>;
  accessModeSufficient ?: ItemList | Array<ItemList>;
  accountablePerson ?: Person | Array<Person>;
  acquireLicensePage ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  alternativeHeadline ?: Text | Array<Text>;
  assesses ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  associatedMedia ?: MediaObject | Array<MediaObject>;
  audience ?: Audience | Array<Audience>;
  audio ?: Clip | Array<Clip> | AudioObject | Array<AudioObject> | MusicRecording | Array<MusicRecording>
  author ?: Person | Array<Person> | Organization | Array<Organization>
  award ?: Text | Array<Text>;
  awards ?: Text | Array<Text>;
  character ?: Person | Array<Person>;
  citation ?: Text | Array<Text> | CreativeWork | Array<CreativeWork>
  comment ?: Comment | Array<Comment>;
  commentCount ?: Integer | Array<Integer>;
  conditionsOfAccess ?: Text | Array<Text>;
  contentLocation ?: Place | Array<Place>;
  contentRating ?: Text | Array<Text> | Rating | Array<Rating>
  contentReferenceTime ?: DateTime | Array<DateTime>;
  contributor ?: Organization | Array<Organization> | Person | Array<Person>
  copyrightHolder ?: Organization | Array<Organization> | Person | Array<Person>
  copyrightNotice ?: Text | Array<Text>;
  copyrightYear ?: Number | Array<Number>;
  correction ?: CorrectionComment | Array<CorrectionComment> | Text | Array<Text> | URL | Array<URL>
  creativeWorkStatus ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  creator ?: Organization | Array<Organization> | Person | Array<Person>
  creditText ?: Text | Array<Text>;
  dateCreated ?: DateTime | Array<DateTime> | Date | Array<Date>
  dateModified ?: DateTime | Array<DateTime> | Date | Array<Date>
  datePublished ?: Date | Array<Date> | DateTime | Array<DateTime>
  discussionUrl ?: URL | Array<URL>;
  editEIDR ?: Text | Array<Text> | URL | Array<URL>
  editor ?: Person | Array<Person>;
  educationalAlignment ?: AlignmentObject | Array<AlignmentObject>;
  educationalLevel ?: URL | Array<URL> | DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  educationalUse ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  encoding ?: MediaObject | Array<MediaObject>;
  encodingFormat ?: Text | Array<Text> | URL | Array<URL>
  encodings ?: MediaObject | Array<MediaObject>;
  exampleOfWork ?: CreativeWork | Array<CreativeWork>;
  expires ?: Date | Array<Date>;
  fileFormat ?: Text | Array<Text> | URL | Array<URL>
  funder ?: Organization | Array<Organization> | Person | Array<Person>
  genre ?: URL | Array<URL> | Text | Array<Text>
  hasPart ?: CreativeWork | Array<CreativeWork>;
  headline ?: Text | Array<Text>;
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  interactionStatistic ?: InteractionCounter | Array<InteractionCounter>;
  interactivityType ?: Text | Array<Text>;
  isAccessibleForFree ?: Boolean | Array<Boolean>;
  isBasedOn ?: CreativeWork | Array<CreativeWork> | URL | Array<URL> | Product | Array<Product>
  isBasedOnUrl ?: Product | Array<Product> | URL | Array<URL> | CreativeWork | Array<CreativeWork>
  isFamilyFriendly ?: Boolean | Array<Boolean>;
  isPartOf ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  keywords ?: URL | Array<URL> | DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  learningResourceType ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  license ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  locationCreated ?: Place | Array<Place>;
  mainEntity ?: Thing | Array<Thing>;
  maintainer ?: Person | Array<Person> | Organization | Array<Organization>
  material ?: Product | Array<Product> | Text | Array<Text> | URL | Array<URL>
  materialExtent ?: Text | Array<Text> | QuantitativeValue | Array<QuantitativeValue>
  mentions ?: Thing | Array<Thing>;
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  pattern ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  position ?: Text | Array<Text> | Integer | Array<Integer>
  producer ?: Organization | Array<Organization> | Person | Array<Person>
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  publication ?: PublicationEvent | Array<PublicationEvent>;
  publisher ?: Organization | Array<Organization> | Person | Array<Person>
  publisherImprint ?: Organization | Array<Organization>;
  publishingPrinciples ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  recordedAt ?: Event | Array<Event>;
  releasedEvent ?: PublicationEvent | Array<PublicationEvent>;
  review ?: Review | Array<Review>;
  reviews ?: Review | Array<Review>;
  schemaVersion ?: Text | Array<Text> | URL | Array<URL>
  sdDatePublished ?: Date | Array<Date>;
  sdLicense ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  sdPublisher ?: Organization | Array<Organization> | Person | Array<Person>
  size ?: DefinedTerm | Array<DefinedTerm> | SizeSpecification | Array<SizeSpecification> | QuantitativeValue | Array<QuantitativeValue> | Text | Array<Text>
  sourceOrganization ?: Organization | Array<Organization>;
  spatial ?: Place | Array<Place>;
  spatialCoverage ?: Place | Array<Place>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
  teaches ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  temporal ?: DateTime | Array<DateTime> | Text | Array<Text>
  temporalCoverage ?: Text | Array<Text> | DateTime | Array<DateTime> | URL | Array<URL>
  text ?: Text | Array<Text>;
  thumbnailUrl ?: URL | Array<URL>;
  timeRequired ?: Duration | Array<Duration>;
  translationOfWork ?: CreativeWork | Array<CreativeWork>;
  translator ?: Person | Array<Person> | Organization | Array<Organization>
  typicalAgeRange ?: Text | Array<Text>;
  usageInfo ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  version ?: Number | Array<Number> | Text | Array<Text>
  video ?: Clip | Array<Clip> | VideoObject | Array<VideoObject>
  workExample ?: CreativeWork | Array<CreativeWork>;
  workTranslation ?: CreativeWork | Array<CreativeWork>;
}

/**
*
* @see @link https://schema.org/CreativeWorkSeason
*
* @remarks
* A media season e.g. tv, radio, video game etc.
*
**/
export interface CreativeWorkSeason extends CreativeWork {
  actor ?: Person | Array<Person>;
  director ?: Person | Array<Person>;
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  episode ?: Episode | Array<Episode>;
  episodes ?: Episode | Array<Episode>;
  numberOfEpisodes ?: Integer | Array<Integer>;
  partOfSeries ?: CreativeWorkSeries | Array<CreativeWorkSeries>;
  productionCompany ?: Organization | Array<Organization>;
  seasonNumber ?: Integer | Array<Integer> | Text | Array<Text>
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/CreativeWorkSeries
*
* @remarks
* A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
	  
*
**/
export interface CreativeWorkSeries extends Series, CreativeWork {
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  issn ?: Text | Array<Text>;
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
}

/**
*
* @see @link https://schema.org/CreditCard
*
* @remarks
* A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
       
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface CreditCard extends PaymentCard, LoanOrCredit {
}

/**
*
* @see @link https://schema.org/Crematorium
*
* @remarks
* A crematorium.
*
**/
export interface Crematorium extends CivicStructure {
}

/**
*
* @see @link https://schema.org/CriticReview
*
* @remarks
* A [[CriticReview]] is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. [[CriticReview]]s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the [[UserReview]] type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1589
*
**/
export interface CriticReview extends Review {
}

/**
*
* @see @link https://schema.org/CssSelectorType
*
* @remarks
* Text representing a CSS selector.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1672
*
**/
export type CssSelectorType = Text;

/**
*
* @see @link https://schema.org/CurrencyConversionService
*
* @remarks
* A service to convert funds from one currency to another currency.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface CurrencyConversionService extends FinancialProduct {
}

/**
*
* @see @link https://schema.org/DanceEvent
*
* @remarks
* Event type: A social dance.
*
**/
export interface DanceEvent extends Event {
}

/**
*
* @see @link https://schema.org/DanceGroup
*
* @remarks
* A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
*
**/
export interface DanceGroup extends PerformingGroup {
}

/**
*
* @see @link https://schema.org/DataCatalog
*
* @remarks
* A collection of datasets.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass
*
**/
export interface DataCatalog extends CreativeWork {
  dataset ?: Dataset | Array<Dataset>;
  measurementTechnique ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/DataDownload
*
* @remarks
* A dataset in downloadable form.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass
*
**/
export interface DataDownload extends MediaObject {
  measurementTechnique ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/DataFeed
*
* @remarks
* A single feed providing structured information about one or more entities or topics.
*
**/
export interface DataFeed extends Dataset {
  dataFeedElement ?: Thing | Array<Thing> | Text | Array<Text> | DataFeedItem | Array<DataFeedItem>
}

/**
*
* @see @link https://schema.org/DataFeedItem
*
* @remarks
* A single item within a larger data feed.
*
**/
export interface DataFeedItem extends Intangible {
  dateCreated ?: DateTime | Array<DateTime> | Date | Array<Date>
  dateDeleted ?: DateTime | Array<DateTime> | Date | Array<Date>
  dateModified ?: DateTime | Array<DateTime> | Date | Array<Date>
  item ?: Thing | Array<Thing>;
}

/**
*
* @see @link https://schema.org/Dataset
*
* @remarks
* A body of structured information describing some topic(s) of interest.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass
*
**/
export interface Dataset extends CreativeWork {
  catalog ?: DataCatalog | Array<DataCatalog>;
  datasetTimeInterval ?: DateTime | Array<DateTime>;
  distribution ?: DataDownload | Array<DataDownload>;
  includedDataCatalog ?: DataCatalog | Array<DataCatalog>;
  includedInDataCatalog ?: DataCatalog | Array<DataCatalog>;
  issn ?: Text | Array<Text>;
  measurementTechnique ?: Text | Array<Text> | URL | Array<URL>
  variableMeasured ?: Text | Array<Text> | PropertyValue | Array<PropertyValue>
}

/**
*
* @see @link https://schema.org/DatedMoneySpecification
*
* @remarks
* A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended
*
**/
export interface DatedMoneySpecification extends StructuredValue {
  amount ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
  currency ?: Text | Array<Text>;
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
}

/**
*
* @see @link https://schema.org/DaySpa
*
* @remarks
* A day spa.
*
**/
export interface DaySpa extends HealthAndBeautyBusiness {
}

/**
*
* @see @link https://schema.org/DDxElement
*
* @remarks
* An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DDxElement extends MedicalIntangible {
  diagnosis ?: MedicalCondition | Array<MedicalCondition>;
  distinguishingSign ?: MedicalSignOrSymptom | Array<MedicalSignOrSymptom>;
}

/**
*
* @see @link https://schema.org/DeactivateAction
*
* @remarks
* The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
*
**/
export interface DeactivateAction extends ControlAction {
}

/**
*
* @see @link https://schema.org/DefenceEstablishment
*
* @remarks
* A defence establishment, such as an army or navy base.
*
**/
export interface DefenceEstablishment extends GovernmentBuilding {
}

/**
*
* @see @link https://schema.org/DefinedRegion
*
* @remarks
* A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.

Examples: a delivery destination when shopping. Region where regional pricing is configured.

Requirement 1:
Country: US
States: "NY", "CA"

Requirement 2:
Country: US
PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
{ [12345, 12345], [78945, 78945], }
Region = state, canton, prefecture, autonomous community...

*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface DefinedRegion extends StructuredValue {
  addressCountry ?: Text | Array<Text> | Country | Array<Country>
  addressRegion ?: Text | Array<Text>;
  postalCode ?: Text | Array<Text>;
  postalCodePrefix ?: Text | Array<Text>;
  postalCodeRange ?: PostalCodeRangeSpecification | Array<PostalCodeRangeSpecification>;
}

/**
*
* @see @link https://schema.org/DefinedTerm
*
* @remarks
* A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/894
*
**/
export interface DefinedTerm extends Intangible {
  inDefinedTermSet ?: DefinedTermSet | Array<DefinedTermSet> | URL | Array<URL>
  termCode ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/DefinedTermSet
*
* @remarks
* A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/894
*
**/
export interface DefinedTermSet extends CreativeWork {
  hasDefinedTerm ?: DefinedTerm | Array<DefinedTerm>;
}

/**
*
* @see @link https://schema.org/DeleteAction
*
* @remarks
* The act of editing a recipient by removing one of its objects.
*
**/
export interface DeleteAction extends UpdateAction {
}

/**
*
* @see @link https://schema.org/DeliveryChargeSpecification
*
* @remarks
* The price for the delivery of an offer using a particular delivery method.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface DeliveryChargeSpecification extends PriceSpecification {
  appliesToDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  eligibleRegion ?: Text | Array<Text> | GeoShape | Array<GeoShape> | Place | Array<Place>
  ineligibleRegion ?: GeoShape | Array<GeoShape> | Text | Array<Text> | Place | Array<Place>
}

/**
*
* @see @link https://schema.org/DeliveryEvent
*
* @remarks
* An event involving the delivery of an item.
*
**/
export interface DeliveryEvent extends Event {
  accessCode ?: Text | Array<Text>;
  availableFrom ?: DateTime | Array<DateTime>;
  availableThrough ?: DateTime | Array<DateTime>;
  hasDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
}

/**
*
* @see @link https://schema.org/DeliveryTimeSettings
*
* @remarks
* A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of a [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface DeliveryTimeSettings extends StructuredValue {
  deliveryTime ?: ShippingDeliveryTime | Array<ShippingDeliveryTime>;
  isUnlabelledFallback ?: Boolean | Array<Boolean>;
  shippingDestination ?: DefinedRegion | Array<DefinedRegion>;
  transitTimeLabel ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Demand
*
* @remarks
* A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface Demand extends Intangible {
  acceptedPaymentMethod ?: LoanOrCredit | Array<LoanOrCredit> | PaymentMethod | Array<PaymentMethod>
  advanceBookingRequirement ?: QuantitativeValue | Array<QuantitativeValue>;
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  availability ?: ItemAvailability | Array<ItemAvailability>;
  availabilityEnds ?: DateTime | Array<DateTime> | Time | Array<Time> | Date | Array<Date>
  availabilityStarts ?: DateTime | Array<DateTime> | Date | Array<Date> | Time | Array<Time>
  availableAtOrFrom ?: Place | Array<Place>;
  availableDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  businessFunction ?: BusinessFunction | Array<BusinessFunction>;
  deliveryLeadTime ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleCustomerType ?: BusinessEntityType | Array<BusinessEntityType>;
  eligibleDuration ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleQuantity ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleRegion ?: Text | Array<Text> | GeoShape | Array<GeoShape> | Place | Array<Place>
  eligibleTransactionVolume ?: PriceSpecification | Array<PriceSpecification>;
  gtin ?: Text | Array<Text>;
  gtin12 ?: Text | Array<Text>;
  gtin13 ?: Text | Array<Text>;
  gtin14 ?: Text | Array<Text>;
  gtin8 ?: Text | Array<Text>;
  includesObject ?: TypeAndQuantityNode | Array<TypeAndQuantityNode>;
  ineligibleRegion ?: GeoShape | Array<GeoShape> | Text | Array<Text> | Place | Array<Place>
  inventoryLevel ?: QuantitativeValue | Array<QuantitativeValue>;
  itemCondition ?: OfferItemCondition | Array<OfferItemCondition>;
  itemOffered ?: Trip | Array<Trip> | Product | Array<Product> | MenuItem | Array<MenuItem> | Service | Array<Service> | Event | Array<Event> | CreativeWork | Array<CreativeWork> | AggregateOffer | Array<AggregateOffer>
  mpn ?: Text | Array<Text>;
  priceSpecification ?: PriceSpecification | Array<PriceSpecification>;
  seller ?: Organization | Array<Organization> | Person | Array<Person>
  serialNumber ?: Text | Array<Text>;
  sku ?: Text | Array<Text>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
  warranty ?: WarrantyPromise | Array<WarrantyPromise>;
}

/**
*
* @see @link https://schema.org/Dentist
*
* @remarks
* A dentist.
*
**/
export interface Dentist extends MedicalBusiness, LocalBusiness, MedicalOrganization {
}

/**
*
* @see @link https://schema.org/DepartAction
*
* @remarks
* The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
*
**/
export interface DepartAction extends MoveAction {
}

/**
*
* @see @link https://schema.org/DepartmentStore
*
* @remarks
* A department store.
*
**/
export interface DepartmentStore extends Store {
}

/**
*
* @see @link https://schema.org/DepositAccount
*
* @remarks
* A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface DepositAccount extends BankAccount, InvestmentOrDeposit {
}

/**
*
* @see @link https://schema.org/DiagnosticLab
*
* @remarks
* A medical laboratory that offers on-site or off-site diagnostic services.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DiagnosticLab extends MedicalOrganization {
  availableTest ?: MedicalTest | Array<MedicalTest>;
}

/**
*
* @see @link https://schema.org/DiagnosticProcedure
*
* @remarks
* A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DiagnosticProcedure extends MedicalProcedure {
}

/**
*
* @see @link https://schema.org/Diet
*
* @remarks
* A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Diet extends LifestyleModification, CreativeWork {
  dietFeatures ?: Text | Array<Text>;
  endorsers ?: Organization | Array<Organization> | Person | Array<Person>
  expertConsiderations ?: Text | Array<Text>;
  physiologicalBenefits ?: Text | Array<Text>;
  risks ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/DietarySupplement
*
* @remarks
* A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DietarySupplement extends Substance {
  activeIngredient ?: Text | Array<Text>;
  isProprietary ?: Boolean | Array<Boolean>;
  legalStatus ?: MedicalEnumeration | Array<MedicalEnumeration> | Text | Array<Text> | DrugLegalStatus | Array<DrugLegalStatus>
  manufacturer ?: Organization | Array<Organization>;
  maximumIntake ?: MaximumDoseSchedule | Array<MaximumDoseSchedule>;
  mechanismOfAction ?: Text | Array<Text>;
  nonProprietaryName ?: Text | Array<Text>;
  proprietaryName ?: Text | Array<Text>;
  recommendedIntake ?: RecommendedDoseSchedule | Array<RecommendedDoseSchedule>;
  safetyConsideration ?: Text | Array<Text>;
  targetPopulation ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/DigitalDocument
*
* @remarks
* An electronic file or document.
*
**/
export interface DigitalDocument extends CreativeWork {
  hasDigitalDocumentPermission ?: DigitalDocumentPermission | Array<DigitalDocumentPermission>;
}

/**
*
* @see @link https://schema.org/DigitalDocumentPermission
*
* @remarks
* A permission for a particular person or group to access a particular file.
*
**/
export interface DigitalDocumentPermission extends Intangible {
  grantee ?: Organization | Array<Organization> | Person | Array<Person> | Audience | Array<Audience> | ContactPoint | Array<ContactPoint>
  permissionType ?: DigitalDocumentPermissionType | Array<DigitalDocumentPermissionType>;
}

/**
*
* @see @link https://schema.org/DisagreeAction
*
* @remarks
* The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.
*
**/
export interface DisagreeAction extends ReactAction {
}

/**
*
* @see @link https://schema.org/DiscoverAction
*
* @remarks
* The act of discovering/finding an object.
*
**/
export interface DiscoverAction extends FindAction {
}

/**
*
* @see @link https://schema.org/DiscussionForumPosting
*
* @remarks
* A posting to a discussion forum.
*
**/
export interface DiscussionForumPosting extends SocialMediaPosting {
}

/**
*
* @see @link https://schema.org/DislikeAction
*
* @remarks
* The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
*
**/
export interface DislikeAction extends ReactAction {
}

/**
*
* @see @link https://schema.org/Distance
*
* @remarks
* Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.
*
**/
export interface Distance extends Quantity {
}

/**
*
* @see @link https://schema.org/Distillery
*
* @remarks
* A distillery.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/743
*
**/
export interface Distillery extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/DonateAction
*
* @remarks
* The act of providing goods, services, or money without compensation, often for philanthropic reasons.
*
**/
export interface DonateAction extends TradeAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/DoseSchedule
*
* @remarks
* A specific dosing schedule for a drug or supplement.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DoseSchedule extends MedicalIntangible {
  doseUnit ?: Text | Array<Text>;
  doseValue ?: Number | Array<Number> | QualitativeValue | Array<QualitativeValue>
  frequency ?: Text | Array<Text>;
  targetPopulation ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/DownloadAction
*
* @remarks
* The act of downloading an object.
*
**/
export interface DownloadAction extends TransferAction {
}

/**
*
* @see @link https://schema.org/DrawAction
*
* @remarks
* The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.
*
**/
export interface DrawAction extends CreateAction {
}

/**
*
* @see @link https://schema.org/Drawing
*
* @remarks
* A picture or diagram made with a pencil, pen, or crayon rather than paint.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1448
*
**/
export interface Drawing extends CreativeWork {
}

/**
*
* @see @link https://schema.org/DrinkAction
*
* @remarks
* The act of swallowing liquids.
*
**/
export interface DrinkAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/Drug
*
* @remarks
* A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Drug extends Substance {
  activeIngredient ?: Text | Array<Text>;
  administrationRoute ?: Text | Array<Text>;
  alcoholWarning ?: Text | Array<Text>;
  availableStrength ?: DrugStrength | Array<DrugStrength>;
  breastfeedingWarning ?: Text | Array<Text>;
  clincalPharmacology ?: Text | Array<Text>;
  clinicalPharmacology ?: Text | Array<Text>;
  dosageForm ?: Text | Array<Text>;
  doseSchedule ?: DoseSchedule | Array<DoseSchedule>;
  drugClass ?: DrugClass | Array<DrugClass>;
  drugUnit ?: Text | Array<Text>;
  foodWarning ?: Text | Array<Text>;
  includedInHealthInsurancePlan ?: HealthInsurancePlan | Array<HealthInsurancePlan>;
  interactingDrug ?: Drug | Array<Drug>;
  isAvailableGenerically ?: Boolean | Array<Boolean>;
  isProprietary ?: Boolean | Array<Boolean>;
  labelDetails ?: URL | Array<URL>;
  legalStatus ?: MedicalEnumeration | Array<MedicalEnumeration> | Text | Array<Text> | DrugLegalStatus | Array<DrugLegalStatus>
  manufacturer ?: Organization | Array<Organization>;
  maximumIntake ?: MaximumDoseSchedule | Array<MaximumDoseSchedule>;
  mechanismOfAction ?: Text | Array<Text>;
  nonProprietaryName ?: Text | Array<Text>;
  overdosage ?: Text | Array<Text>;
  pregnancyCategory ?: DrugPregnancyCategory | Array<DrugPregnancyCategory>;
  pregnancyWarning ?: Text | Array<Text>;
  prescribingInfo ?: URL | Array<URL>;
  prescriptionStatus ?: DrugPrescriptionStatus | Array<DrugPrescriptionStatus> | Text | Array<Text>
  proprietaryName ?: Text | Array<Text>;
  relatedDrug ?: Drug | Array<Drug>;
  rxcui ?: Text | Array<Text>;
  warning ?: URL | Array<URL> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/DrugClass
*
* @remarks
* A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DrugClass extends MedicalEntity {
  drug ?: Drug | Array<Drug>;
}

/**
*
* @see @link https://schema.org/DrugCost
*
* @remarks
* The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DrugCost extends MedicalEntity {
  applicableLocation ?: AdministrativeArea | Array<AdministrativeArea>;
  costCategory ?: DrugCostCategory | Array<DrugCostCategory>;
  costCurrency ?: Text | Array<Text>;
  costOrigin ?: Text | Array<Text>;
  costPerUnit ?: Text | Array<Text> | QualitativeValue | Array<QualitativeValue> | Number | Array<Number>
  drugUnit ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/DrugLegalStatus
*
* @remarks
* The legal availability status of a medical drug.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DrugLegalStatus extends MedicalIntangible {
  applicableLocation ?: AdministrativeArea | Array<AdministrativeArea>;
}

/**
*
* @see @link https://schema.org/DrugStrength
*
* @remarks
* A specific strength in which a medical drug is available in a specific country.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface DrugStrength extends MedicalIntangible {
  activeIngredient ?: Text | Array<Text>;
  availableIn ?: AdministrativeArea | Array<AdministrativeArea>;
  maximumIntake ?: MaximumDoseSchedule | Array<MaximumDoseSchedule>;
  strengthUnit ?: Text | Array<Text>;
  strengthValue ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/DryCleaningOrLaundry
*
* @remarks
* A dry-cleaning business.
*
**/
export interface DryCleaningOrLaundry extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/Duration
*
* @remarks
* Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
*
**/
export interface Duration extends Quantity {
}

/**
*
* @see @link https://schema.org/EatAction
*
* @remarks
* The act of swallowing solid objects.
*
**/
export interface EatAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/EducationalAudience
*
* @remarks
* An EducationalAudience.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass
*
**/
export interface EducationalAudience extends Audience {
  educationalRole ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/EducationalOccupationalCredential
*
* @remarks
* An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1779
*
**/
export interface EducationalOccupationalCredential extends CreativeWork {
  competencyRequired ?: Text | Array<Text> | URL | Array<URL> | DefinedTerm | Array<DefinedTerm>
  credentialCategory ?: DefinedTerm | Array<DefinedTerm> | URL | Array<URL> | Text | Array<Text>
  educationalLevel ?: URL | Array<URL> | DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  recognizedBy ?: Organization | Array<Organization>;
  validFor ?: Duration | Array<Duration>;
  validIn ?: AdministrativeArea | Array<AdministrativeArea>;
}

/**
*
* @see @link https://schema.org/EducationalOccupationalProgram
*
* @remarks
* A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2289
*
**/
export interface EducationalOccupationalProgram extends Intangible {
  applicationDeadline ?: Date | Array<Date>;
  applicationStartDate ?: Date | Array<Date>;
  dayOfWeek ?: DayOfWeek | Array<DayOfWeek>;
  educationalCredentialAwarded ?: URL | Array<URL> | Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  educationalProgramMode ?: Text | Array<Text> | URL | Array<URL>
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  financialAidEligible ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  hasCourse ?: Course | Array<Course>;
  maximumEnrollment ?: Integer | Array<Integer>;
  numberOfCredits ?: StructuredValue | Array<StructuredValue> | Integer | Array<Integer>
  occupationalCategory ?: CategoryCode | Array<CategoryCode> | Text | Array<Text>
  occupationalCredentialAwarded ?: URL | Array<URL> | Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  programPrerequisites ?: Course | Array<Course> | AlignmentObject | Array<AlignmentObject> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential> | Text | Array<Text>
  programType ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  salaryUponCompletion ?: MonetaryAmountDistribution | Array<MonetaryAmountDistribution>;
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  termDuration ?: Duration | Array<Duration>;
  termsPerYear ?: Number | Array<Number>;
  timeOfDay ?: Text | Array<Text>;
  timeToComplete ?: Duration | Array<Duration>;
  trainingSalary ?: MonetaryAmountDistribution | Array<MonetaryAmountDistribution>;
  typicalCreditsPerTerm ?: Integer | Array<Integer> | StructuredValue | Array<StructuredValue>
}

/**
*
* @see @link https://schema.org/EducationalOrganization
*
* @remarks
* An educational organization.
*
**/
export interface EducationalOrganization extends Organization, CivicStructure {
  alumni ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/EducationEvent
*
* @remarks
* Event type: Education event.
*
**/
export interface EducationEvent extends Event {
  assesses ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  educationalLevel ?: URL | Array<URL> | DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  teaches ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
}

/**
*
* @see @link https://schema.org/Electrician
*
* @remarks
* An electrician.
*
**/
export interface Electrician extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/ElectronicsStore
*
* @remarks
* An electronics store.
*
**/
export interface ElectronicsStore extends Store {
}

/**
*
* @see @link https://schema.org/ElementarySchool
*
* @remarks
* An elementary school.
*
**/
export interface ElementarySchool extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/EmailMessage
*
* @remarks
* An email message.
*
**/
export interface EmailMessage extends Message {
}

/**
*
* @see @link https://schema.org/Embassy
*
* @remarks
* An embassy.
*
**/
export interface Embassy extends GovernmentBuilding {
}

/**
*
* @see @link https://schema.org/EmergencyService
*
* @remarks
* An emergency service, such as a fire station or ER.
*
**/
export interface EmergencyService extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/EmployeeRole
*
* @remarks
* A subclass of OrganizationRole used to describe employee relationships.
*
**/
export interface EmployeeRole extends OrganizationRole {
  baseSalary ?: MonetaryAmount | Array<MonetaryAmount> | PriceSpecification | Array<PriceSpecification> | Number | Array<Number>
  salaryCurrency ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/EmployerAggregateRating
*
* @remarks
* An aggregate rating of an Organization related to its role as an employer.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1689
*
**/
export interface EmployerAggregateRating extends AggregateRating {
}

/**
*
* @see @link https://schema.org/EmployerReview
*
* @remarks
* An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or former employee of that organization.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1589
*
**/
export interface EmployerReview extends Review {
}

/**
*
* @see @link https://schema.org/EmploymentAgency
*
* @remarks
* An employment agency.
*
**/
export interface EmploymentAgency extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/EndorseAction
*
* @remarks
* An agent approves/certifies/likes/supports/sanction an object.
*
**/
export interface EndorseAction extends ReactAction {
  endorsee ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/EndorsementRating
*
* @remarks
* An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a
"Like" or "+1" on a social network. It can be considered the [[result]] of an [[EndorseAction]] in which the [[object]] of the action is rated positively by
some [[agent]]. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the [[Action]].

An [[EndorsementRating]] may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,
endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.

*
* @see @link https://github.com/schemaorg/schemaorg/issues/1293
*
**/
export interface EndorsementRating extends Rating {
}

/**
*
* @see @link https://schema.org/Energy
*
* @remarks
* Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
*
**/
export interface Energy extends Quantity {
}

/**
*
* @see @link https://schema.org/EnergyConsumptionDetails
*
* @remarks
* EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2670
*
**/
export interface EnergyConsumptionDetails extends Intangible {
  energyEfficiencyScaleMax ?: EUEnergyEfficiencyEnumeration | Array<EUEnergyEfficiencyEnumeration>;
  energyEfficiencyScaleMin ?: EUEnergyEfficiencyEnumeration | Array<EUEnergyEfficiencyEnumeration>;
  hasEnergyEfficiencyCategory ?: EnergyEfficiencyEnumeration | Array<EnergyEfficiencyEnumeration>;
}

/**
*
* @see @link https://schema.org/EnergyEfficiencyEnumeration
*
* @remarks
* Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2670
*
**/
export interface EnergyEfficiencyEnumeration extends Enumeration {
}

/**
*
* @see @link https://schema.org/EngineSpecification
*
* @remarks
* Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export interface EngineSpecification extends StructuredValue {
  engineDisplacement ?: QuantitativeValue | Array<QuantitativeValue>;
  enginePower ?: QuantitativeValue | Array<QuantitativeValue>;
  engineType ?: URL | Array<URL> | QualitativeValue | Array<QualitativeValue> | Text | Array<Text>
  fuelType ?: QualitativeValue | Array<QualitativeValue> | URL | Array<URL> | Text | Array<Text>
  torque ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/EntertainmentBusiness
*
* @remarks
* A business providing entertainment.
*
**/
export interface EntertainmentBusiness extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/EntryPoint
*
* @remarks
* An entry point, within some Web-based protocol.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass
*
**/
export interface EntryPoint extends Intangible {
  actionApplication ?: SoftwareApplication | Array<SoftwareApplication>;
  actionPlatform ?: Text | Array<Text> | URL | Array<URL>
  application ?: SoftwareApplication | Array<SoftwareApplication>;
  contentType ?: Text | Array<Text>;
  encodingType ?: Text | Array<Text>;
  httpMethod ?: Text | Array<Text>;
  urlTemplate ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Enumeration
*
* @remarks
* Lists or enumerations—for example, a list of cuisines or music genres, etc.
*
**/
export interface Enumeration extends Intangible {
}

/**
*
* @see @link https://schema.org/Episode
*
* @remarks
* A media episode (e.g. TV, radio, video game) which can be part of a series or season.
*
**/
export interface Episode extends CreativeWork {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  duration ?: Duration | Array<Duration>;
  episodeNumber ?: Text | Array<Text> | Integer | Array<Integer>
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  partOfSeason ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  partOfSeries ?: CreativeWorkSeries | Array<CreativeWorkSeries>;
  productionCompany ?: Organization | Array<Organization>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/Event
*
* @remarks
* An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
*
**/
export interface Event extends Thing {
  about ?: Thing | Array<Thing>;
  actor ?: Person | Array<Person>;
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  attendee ?: Person | Array<Person> | Organization | Array<Organization>
  attendees ?: Person | Array<Person> | Organization | Array<Organization>
  audience ?: Audience | Array<Audience>;
  composer ?: Organization | Array<Organization> | Person | Array<Person>
  contributor ?: Organization | Array<Organization> | Person | Array<Person>
  director ?: Person | Array<Person>;
  doorTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  duration ?: Duration | Array<Duration>;
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  eventAttendanceMode ?: EventAttendanceModeEnumeration | Array<EventAttendanceModeEnumeration>;
  eventSchedule ?: Schedule | Array<Schedule>;
  eventStatus ?: EventStatusType | Array<EventStatusType>;
  funder ?: Organization | Array<Organization> | Person | Array<Person>
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  isAccessibleForFree ?: Boolean | Array<Boolean>;
  location ?: Place | Array<Place> | Text | Array<Text> | VirtualLocation | Array<VirtualLocation> | PostalAddress | Array<PostalAddress>
  maximumAttendeeCapacity ?: Integer | Array<Integer>;
  maximumPhysicalAttendeeCapacity ?: Integer | Array<Integer>;
  maximumVirtualAttendeeCapacity ?: Integer | Array<Integer>;
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  organizer ?: Organization | Array<Organization> | Person | Array<Person>
  performer ?: Organization | Array<Organization> | Person | Array<Person>
  performers ?: Organization | Array<Organization> | Person | Array<Person>
  previousStartDate ?: Date | Array<Date>;
  recordedIn ?: CreativeWork | Array<CreativeWork>;
  remainingAttendeeCapacity ?: Integer | Array<Integer>;
  review ?: Review | Array<Review>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  subEvent ?: Event | Array<Event>;
  subEvents ?: Event | Array<Event>;
  superEvent ?: Event | Array<Event>;
  translator ?: Person | Array<Person> | Organization | Array<Organization>
  typicalAgeRange ?: Text | Array<Text>;
  workFeatured ?: CreativeWork | Array<CreativeWork>;
  workPerformed ?: CreativeWork | Array<CreativeWork>;
}

/**
*
* @see @link https://schema.org/EventReservation
*
* @remarks
* A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
**/
export interface EventReservation extends Reservation {
}

/**
*
* @see @link https://schema.org/EventSeries
*
* @remarks
* A series of [[Event]]s. Included events can relate with the series using the [[superEvent]] property.

An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which
is repeated regularly. The "2012 London Olympics" can be presented both as an [[Event]] in the series "Olympic Games", and as an
[[EventSeries]] that included a number of sporting competitions as Events.

The nature of the association between the events in an [[EventSeries]] can vary, but typical examples could
include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.

EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without
worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries
may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but
it may also sometimes prove useful to describe a longer-term series as an Event.
   
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/447
*
**/
export interface EventSeries extends Series, Event {
}

/**
*
* @see @link https://schema.org/EventVenue
*
* @remarks
* An event venue.
*
**/
export interface EventVenue extends CivicStructure {
}

/**
*
* @see @link https://schema.org/ExchangeRateSpecification
*
* @remarks
* A structured value representing exchange rate.
*
* 
* Partof: https://pending.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
*
**/
export interface ExchangeRateSpecification extends StructuredValue {
  currency ?: Text | Array<Text>;
  currentExchangeRate ?: UnitPriceSpecification | Array<UnitPriceSpecification>;
  exchangeRateSpread ?: MonetaryAmount | Array<MonetaryAmount> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/ExerciseAction
*
* @remarks
* The act of participating in exertive activity for the purposes of improving health and fitness.
*
**/
export interface ExerciseAction extends PlayAction {
  course ?: Place | Array<Place>;
  diet ?: Diet | Array<Diet>;
  distance ?: Distance | Array<Distance>;
  exerciseCourse ?: Place | Array<Place>;
  exercisePlan ?: ExercisePlan | Array<ExercisePlan>;
  exerciseRelatedDiet ?: Diet | Array<Diet>;
  exerciseType ?: Text | Array<Text>;
  fromLocation ?: Place | Array<Place>;
  opponent ?: Person | Array<Person>;
  sportsActivityLocation ?: SportsActivityLocation | Array<SportsActivityLocation>;
  sportsEvent ?: SportsEvent | Array<SportsEvent>;
  sportsTeam ?: SportsTeam | Array<SportsTeam>;
  toLocation ?: Place | Array<Place>;
}

/**
*
* @see @link https://schema.org/ExerciseGym
*
* @remarks
* A gym.
*
**/
export interface ExerciseGym extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/ExercisePlan
*
* @remarks
* Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface ExercisePlan extends PhysicalActivity, CreativeWork {
  activityDuration ?: QuantitativeValue | Array<QuantitativeValue> | Duration | Array<Duration>
  activityFrequency ?: Text | Array<Text> | QuantitativeValue | Array<QuantitativeValue>
  additionalVariable ?: Text | Array<Text>;
  exerciseType ?: Text | Array<Text>;
  intensity ?: QuantitativeValue | Array<QuantitativeValue> | Text | Array<Text>
  repetitions ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  restPeriods ?: Text | Array<Text> | QuantitativeValue | Array<QuantitativeValue>
  workload ?: Energy | Array<Energy> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/ExhibitionEvent
*
* @remarks
* Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
*
**/
export interface ExhibitionEvent extends Event {
}

/**
*
* @see @link https://schema.org/FAQPage
*
* @remarks
* A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)" (see also [[QAPage]]).
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1723
*
**/
export interface FAQPage extends WebPage {
}

/**
*
* @see @link https://schema.org/FastFoodRestaurant
*
* @remarks
* A fast-food restaurant.
*
**/
export interface FastFoodRestaurant extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/Festival
*
* @remarks
* Event type: Festival.
*
**/
export interface Festival extends Event {
}

/**
*
* @see @link https://schema.org/FilmAction
*
* @remarks
* The act of capturing sound and moving images on film, video, or digitally.
*
**/
export interface FilmAction extends CreateAction {
}

/**
*
* @see @link https://schema.org/FinancialProduct
*
* @remarks
* A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface FinancialProduct extends Service {
  annualPercentageRate ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  feesAndCommissionsSpecification ?: URL | Array<URL> | Text | Array<Text>
  interestRate ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/FinancialService
*
* @remarks
* Financial services business.
*
**/
export interface FinancialService extends LocalBusiness {
  feesAndCommissionsSpecification ?: URL | Array<URL> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/FindAction
*
* @remarks
* The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily.
*
**/
export interface FindAction extends Action {
}

/**
*
* @see @link https://schema.org/FireStation
*
* @remarks
* A fire station. With firemen.
*
**/
export interface FireStation extends CivicStructure, EmergencyService {
}

/**
*
* @see @link https://schema.org/Flight
*
* @remarks
* An airline flight.
*
**/
export interface Flight extends Trip {
  aircraft ?: Vehicle | Array<Vehicle> | Text | Array<Text>
  arrivalAirport ?: Airport | Array<Airport>;
  arrivalGate ?: Text | Array<Text>;
  arrivalTerminal ?: Text | Array<Text>;
  boardingPolicy ?: BoardingPolicyType | Array<BoardingPolicyType>;
  carrier ?: Organization | Array<Organization>;
  departureAirport ?: Airport | Array<Airport>;
  departureGate ?: Text | Array<Text>;
  departureTerminal ?: Text | Array<Text>;
  estimatedFlightDuration ?: Duration | Array<Duration> | Text | Array<Text>
  flightDistance ?: Distance | Array<Distance> | Text | Array<Text>
  flightNumber ?: Text | Array<Text>;
  mealService ?: Text | Array<Text>;
  seller ?: Organization | Array<Organization> | Person | Array<Person>
  webCheckinTime ?: DateTime | Array<DateTime>;
}

/**
*
* @see @link https://schema.org/FlightReservation
*
* @remarks
* A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
**/
export interface FlightReservation extends Reservation {
  boardingGroup ?: Text | Array<Text>;
  passengerPriorityStatus ?: QualitativeValue | Array<QualitativeValue> | Text | Array<Text>
  passengerSequenceNumber ?: Text | Array<Text>;
  securityScreening ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Float
*
* @remarks
* Data type: Floating number.
*
**/
export type Float = Number;

/**
*
* @see @link https://schema.org/FloorPlan
*
* @remarks
* A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]]. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2373
*
**/
export interface FloorPlan extends Intangible {
  amenityFeature ?: LocationFeatureSpecification | Array<LocationFeatureSpecification>;
  floorSize ?: QuantitativeValue | Array<QuantitativeValue>;
  isPlanForApartment ?: Accommodation | Array<Accommodation>;
  layoutImage ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  numberOfAccommodationUnits ?: QuantitativeValue | Array<QuantitativeValue>;
  numberOfAvailableAccommodationUnits ?: QuantitativeValue | Array<QuantitativeValue>;
  numberOfBathroomsTotal ?: Integer | Array<Integer>;
  numberOfBedrooms ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  numberOfFullBathrooms ?: Number | Array<Number>;
  numberOfPartialBathrooms ?: Number | Array<Number>;
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  petsAllowed ?: Text | Array<Text> | Boolean | Array<Boolean>
}

/**
*
* @see @link https://schema.org/Florist
*
* @remarks
* A florist.
*
**/
export interface Florist extends Store {
}

/**
*
* @see @link https://schema.org/FMRadioChannel
*
* @remarks
* A radio channel that uses FM.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1004
*
**/
export interface FMRadioChannel extends RadioChannel {
}

/**
*
* @see @link https://schema.org/FollowAction
*
* @remarks
* The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\n\nRelated actions:\n\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
*
**/
export interface FollowAction extends InteractAction {
  followee ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/FoodEstablishment
*
* @remarks
* A food-related business.
*
**/
export interface FoodEstablishment extends LocalBusiness {
  acceptsReservations ?: URL | Array<URL> | Boolean | Array<Boolean> | Text | Array<Text>
  hasMenu ?: URL | Array<URL> | Menu | Array<Menu> | Text | Array<Text>
  menu ?: Text | Array<Text> | URL | Array<URL> | Menu | Array<Menu>
  servesCuisine ?: Text | Array<Text>;
  starRating ?: Rating | Array<Rating>;
}

/**
*
* @see @link https://schema.org/FoodEstablishmentReservation
*
* @remarks
* A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
*
**/
export interface FoodEstablishmentReservation extends Reservation {
  endTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  partySize ?: QuantitativeValue | Array<QuantitativeValue> | Integer | Array<Integer>
  startTime ?: DateTime | Array<DateTime> | Time | Array<Time>
}

/**
*
* @see @link https://schema.org/FoodEvent
*
* @remarks
* Event type: Food event.
*
**/
export interface FoodEvent extends Event {
}

/**
*
* @see @link https://schema.org/FoodService
*
* @remarks
* A food service, like breakfast, lunch, or dinner.
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface FoodService extends Service {
}

/**
*
* @see @link https://schema.org/FundingAgency
*
* @remarks
* A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages
    the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s).
    A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
    
Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...
    
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
* @see @link https://github.com/schemaorg/schemaorg/issues/383
*
**/
export interface FundingAgency extends Project {
}

/**
*
* @see @link https://schema.org/FundingScheme
*
* @remarks
* A FundingScheme combines organizational, project and policy aspects of grant-based funding
    that sets guidelines, principles and mechanisms to support other kinds of projects and activities.
    Funding is typically organized via [[Grant]] funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - [[FundingAgency]]s such as ERC, REA, ...
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/383
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
*
**/
export interface FundingScheme extends Organization {
}

/**
*
* @see @link https://schema.org/FurnitureStore
*
* @remarks
* A furniture store.
*
**/
export interface FurnitureStore extends Store {
}

/**
*
* @see @link https://schema.org/Game
*
* @remarks
* The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
*
**/
export interface Game extends CreativeWork {
  characterAttribute ?: Thing | Array<Thing>;
  gameItem ?: Thing | Array<Thing>;
  gameLocation ?: PostalAddress | Array<PostalAddress> | Place | Array<Place> | URL | Array<URL>
  numberOfPlayers ?: QuantitativeValue | Array<QuantitativeValue>;
  quest ?: Thing | Array<Thing>;
}

/**
*
* @see @link https://schema.org/GameServer
*
* @remarks
* Server that provides game interaction in a multiplayer game.
*
**/
export interface GameServer extends Intangible {
  game ?: VideoGame | Array<VideoGame>;
  playersOnline ?: Integer | Array<Integer>;
  serverStatus ?: GameServerStatus | Array<GameServerStatus>;
}

/**
*
* @see @link https://schema.org/GardenStore
*
* @remarks
* A garden store.
*
**/
export interface GardenStore extends Store {
}

/**
*
* @see @link https://schema.org/GasStation
*
* @remarks
* A gas station.
*
**/
export interface GasStation extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/GatedResidenceCommunity
*
* @remarks
* Residence type: Gated community.
*
**/
export interface GatedResidenceCommunity extends Residence {
}

/**
*
* @see @link https://schema.org/GeneralContractor
*
* @remarks
* A general contractor.
*
**/
export interface GeneralContractor extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/GeoCircle
*
* @remarks
* A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
          it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
          The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
       
*
**/
export interface GeoCircle extends GeoShape {
  geoMidpoint ?: GeoCoordinates | Array<GeoCoordinates>;
  geoRadius ?: Text | Array<Text> | Distance | Array<Distance> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/GeoCoordinates
*
* @remarks
* The geographic coordinates of a place or event.
*
**/
export interface GeoCoordinates extends StructuredValue {
  address ?: Text | Array<Text> | PostalAddress | Array<PostalAddress>
  addressCountry ?: Text | Array<Text> | Country | Array<Country>
  elevation ?: Number | Array<Number> | Text | Array<Text>
  latitude ?: Text | Array<Text> | Number | Array<Number>
  longitude ?: Text | Array<Text> | Number | Array<Number>
  postalCode ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/GeoShape
*
* @remarks
* The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface GeoShape extends StructuredValue {
  address ?: Text | Array<Text> | PostalAddress | Array<PostalAddress>
  addressCountry ?: Text | Array<Text> | Country | Array<Country>
  box ?: Text | Array<Text>;
  circle ?: Text | Array<Text>;
  elevation ?: Number | Array<Number> | Text | Array<Text>
  line ?: Text | Array<Text>;
  polygon ?: Text | Array<Text>;
  postalCode ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/GeospatialGeometry
*
* @remarks
* (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1375
*
**/
export interface GeospatialGeometry extends Intangible {
  geoContains ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCoveredBy ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCovers ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCrosses ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoDisjoint ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoEquals ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoIntersects ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoOverlaps ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoTouches ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoWithin ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
}

/**
*
* @see @link https://schema.org/GiveAction
*
* @remarks
* The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[TakeAction]]: Reciprocal of GiveAction.\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
*
**/
export interface GiveAction extends TransferAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/GolfCourse
*
* @remarks
* A golf course.
*
**/
export interface GolfCourse extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/GovernmentBuilding
*
* @remarks
* A government building.
*
**/
export interface GovernmentBuilding extends CivicStructure {
}

/**
*
* @see @link https://schema.org/GovernmentOffice
*
* @remarks
* A government office&#x2014;for example, an IRS or DMV office.
*
**/
export interface GovernmentOffice extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/GovernmentOrganization
*
* @remarks
* A governmental organization or agency.
*
**/
export interface GovernmentOrganization extends Organization {
}

/**
*
* @see @link https://schema.org/GovernmentPermit
*
* @remarks
* A permit issued by a government agency.
*
**/
export interface GovernmentPermit extends Permit {
}

/**
*
* @see @link https://schema.org/GovernmentService
*
* @remarks
* A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
*
**/
export interface GovernmentService extends Service {
  jurisdiction ?: AdministrativeArea | Array<AdministrativeArea> | Text | Array<Text>
  serviceOperator ?: Organization | Array<Organization>;
}

/**
*
* @see @link https://schema.org/Grant
*
* @remarks
* A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
    sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).

Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.

The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
    
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
* @see @link https://github.com/schemaorg/schemaorg/issues/383
*
**/
export interface Grant extends Intangible {
  fundedItem ?: Thing | Array<Thing>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
}

/**
*
* @see @link https://schema.org/GroceryStore
*
* @remarks
* A grocery store.
*
**/
export interface GroceryStore extends Store {
}

/**
*
* @see @link https://schema.org/Guide
*
* @remarks
* [[Guide]] is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2405
*
**/
export interface Guide extends CreativeWork {
  reviewAspect ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Hackathon
*
* @remarks
* A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2526
*
**/
export interface Hackathon extends Event {
}

/**
*
* @see @link https://schema.org/HairSalon
*
* @remarks
* A hair salon.
*
**/
export interface HairSalon extends HealthAndBeautyBusiness {
}

/**
*
* @see @link https://schema.org/HardwareStore
*
* @remarks
* A hardware store.
*
**/
export interface HardwareStore extends Store {
}

/**
*
* @see @link https://schema.org/HealthAndBeautyBusiness
*
* @remarks
* Health and beauty.
*
**/
export interface HealthAndBeautyBusiness extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/HealthClub
*
* @remarks
* A health club.
*
**/
export interface HealthClub extends HealthAndBeautyBusiness, SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/HealthInsurancePlan
*
* @remarks
* A US-style health insurance plan, including PPOs, EPOs, and HMOs. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1062
*
**/
export interface HealthInsurancePlan extends Intangible {
  benefitsSummaryUrl ?: URL | Array<URL>;
  contactPoint ?: ContactPoint | Array<ContactPoint>;
  healthPlanDrugOption ?: Text | Array<Text>;
  healthPlanDrugTier ?: Text | Array<Text>;
  healthPlanId ?: Text | Array<Text>;
  healthPlanMarketingUrl ?: URL | Array<URL>;
  includesHealthPlanFormulary ?: HealthPlanFormulary | Array<HealthPlanFormulary>;
  includesHealthPlanNetwork ?: HealthPlanNetwork | Array<HealthPlanNetwork>;
  usesHealthPlanIdStandard ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/HealthPlanCostSharingSpecification
*
* @remarks
* A description of costs to the patient under a given network or formulary.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1062
*
**/
export interface HealthPlanCostSharingSpecification extends Intangible {
  healthPlanCoinsuranceOption ?: Text | Array<Text>;
  healthPlanCoinsuranceRate ?: Number | Array<Number>;
  healthPlanCopay ?: PriceSpecification | Array<PriceSpecification>;
  healthPlanCopayOption ?: Text | Array<Text>;
  healthPlanPharmacyCategory ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/HealthPlanFormulary
*
* @remarks
* For a given health insurance plan, the specification for costs and coverage of prescription drugs. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1062
*
**/
export interface HealthPlanFormulary extends Intangible {
  healthPlanCostSharing ?: Boolean | Array<Boolean>;
  healthPlanDrugTier ?: Text | Array<Text>;
  offersPrescriptionByMail ?: Boolean | Array<Boolean>;
}

/**
*
* @see @link https://schema.org/HealthPlanNetwork
*
* @remarks
* A US-style health insurance plan network. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1062
*
**/
export interface HealthPlanNetwork extends Intangible {
  healthPlanCostSharing ?: Boolean | Array<Boolean>;
  healthPlanNetworkId ?: Text | Array<Text>;
  healthPlanNetworkTier ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/HealthTopicContent
*
* @remarks
* [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2374
*
**/
export interface HealthTopicContent extends WebContent {
  hasHealthAspect ?: HealthAspectEnumeration | Array<HealthAspectEnumeration>;
}

/**
*
* @see @link https://schema.org/HighSchool
*
* @remarks
* A high school.
*
**/
export interface HighSchool extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/HinduTemple
*
* @remarks
* A Hindu temple.
*
**/
export interface HinduTemple extends PlaceOfWorship {
}

/**
*
* @see @link https://schema.org/HobbyShop
*
* @remarks
* A store that sells materials useful or necessary for various hobbies.
*
**/
export interface HobbyShop extends Store {
}

/**
*
* @see @link https://schema.org/HomeAndConstructionBusiness
*
* @remarks
* A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
*
**/
export interface HomeAndConstructionBusiness extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/HomeGoodsStore
*
* @remarks
* A home goods store.
*
**/
export interface HomeGoodsStore extends Store {
}

/**
*
* @see @link https://schema.org/Hospital
*
* @remarks
* A hospital.
*
**/
export interface Hospital extends CivicStructure, MedicalOrganization, EmergencyService {
  availableService ?: MedicalTest | Array<MedicalTest> | MedicalTherapy | Array<MedicalTherapy> | MedicalProcedure | Array<MedicalProcedure>
  healthcareReportingData ?: CDCPMDRecord | Array<CDCPMDRecord> | Dataset | Array<Dataset>
  medicalSpecialty ?: MedicalSpecialty | Array<MedicalSpecialty>;
}

/**
*
* @see @link https://schema.org/Hostel
*
* @remarks
* A hostel - cheap accommodation, often in shared dormitories.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
**/
export interface Hostel extends LodgingBusiness {
}

/**
*
* @see @link https://schema.org/Hotel
*
* @remarks
* A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Hotel extends LodgingBusiness {
}

/**
*
* @see @link https://schema.org/HotelRoom
*
* @remarks
* A hotel room is a single room in a hotel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface HotelRoom extends Room {
  bed ?: BedDetails | Array<BedDetails> | Text | Array<Text> | BedType | Array<BedType>
  occupancy ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/House
*
* @remarks
* A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface House extends Accommodation {
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/HousePainter
*
* @remarks
* A house painting service.
*
**/
export interface HousePainter extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/HowTo
*
* @remarks
* Instructions that explain how to achieve a result by performing a sequence of steps.
*
**/
export interface HowTo extends CreativeWork {
  estimatedCost ?: Text | Array<Text> | MonetaryAmount | Array<MonetaryAmount>
  performTime ?: Duration | Array<Duration>;
  prepTime ?: Duration | Array<Duration>;
  step ?: HowToStep | Array<HowToStep> | Text | Array<Text> | CreativeWork | Array<CreativeWork> | HowToSection | Array<HowToSection>
  steps ?: CreativeWork | Array<CreativeWork> | ItemList | Array<ItemList> | Text | Array<Text>
  supply ?: HowToSupply | Array<HowToSupply> | Text | Array<Text>
  tool ?: Text | Array<Text> | HowToTool | Array<HowToTool>
  totalTime ?: Duration | Array<Duration>;
  yield ?: Text | Array<Text> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/HowToDirection
*
* @remarks
* A direction indicating a single action to do in the instructions for how to achieve a result.
*
**/
export interface HowToDirection extends ListItem, CreativeWork {
  afterMedia ?: MediaObject | Array<MediaObject> | URL | Array<URL>
  beforeMedia ?: MediaObject | Array<MediaObject> | URL | Array<URL>
  duringMedia ?: URL | Array<URL> | MediaObject | Array<MediaObject>
  performTime ?: Duration | Array<Duration>;
  prepTime ?: Duration | Array<Duration>;
  supply ?: HowToSupply | Array<HowToSupply> | Text | Array<Text>
  tool ?: Text | Array<Text> | HowToTool | Array<HowToTool>
  totalTime ?: Duration | Array<Duration>;
}

/**
*
* @see @link https://schema.org/HowToItem
*
* @remarks
* An item used as either a tool or supply when performing the instructions for how to to achieve a result.
*
**/
export interface HowToItem extends ListItem {
  requiredQuantity ?: Text | Array<Text> | QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/HowToSection
*
* @remarks
* A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
*
**/
export interface HowToSection extends ListItem, CreativeWork, ItemList {
  steps ?: CreativeWork | Array<CreativeWork> | ItemList | Array<ItemList> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/HowToStep
*
* @remarks
* A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
*
**/
export interface HowToStep extends ListItem, CreativeWork, ItemList {
}

/**
*
* @see @link https://schema.org/HowToSupply
*
* @remarks
* A supply consumed when performing the instructions for how to achieve a result.
*
**/
export interface HowToSupply extends HowToItem {
  estimatedCost ?: Text | Array<Text> | MonetaryAmount | Array<MonetaryAmount>
}

/**
*
* @see @link https://schema.org/HowToTip
*
* @remarks
* An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
*
**/
export interface HowToTip extends CreativeWork, ListItem {
}

/**
*
* @see @link https://schema.org/HowToTool
*
* @remarks
* A tool used (but not consumed) when performing instructions for how to achieve a result.
*
**/
export interface HowToTool extends HowToItem {
}

/**
*
* @see @link https://schema.org/HVACBusiness
*
* @remarks
* A business that provide Heating, Ventilation and Air Conditioning services.
*
**/
export interface HVACBusiness extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/HyperToc
*
* @remarks
* A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2766
*
**/
export interface HyperToc extends CreativeWork {
  associatedMedia ?: MediaObject | Array<MediaObject>;
  tocEntry ?: HyperTocEntry | Array<HyperTocEntry>;
}

/**
*
* @see @link https://schema.org/HyperTocEntry
*
* @remarks
* A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2766
*
**/
export interface HyperTocEntry extends CreativeWork {
  associatedMedia ?: MediaObject | Array<MediaObject>;
  tocContinuation ?: HyperTocEntry | Array<HyperTocEntry>;
  utterances ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/IceCreamShop
*
* @remarks
* An ice cream shop.
*
**/
export interface IceCreamShop extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/IgnoreAction
*
* @remarks
* The act of intentionally disregarding the object. An agent ignores an object.
*
**/
export interface IgnoreAction extends AssessAction {
}

/**
*
* @see @link https://schema.org/ImageGallery
*
* @remarks
* Web page type: Image gallery page.
*
**/
export interface ImageGallery extends MediaGallery {
}

/**
*
* @see @link https://schema.org/ImageObject
*
* @remarks
* An image file.
*
**/
export interface ImageObject extends MediaObject {
  caption ?: Text | Array<Text> | MediaObject | Array<MediaObject>
  exifData ?: Text | Array<Text> | PropertyValue | Array<PropertyValue>
  representativeOfPage ?: Boolean | Array<Boolean>;
  thumbnail ?: ImageObject | Array<ImageObject>;
}

/**
*
* @see @link https://schema.org/ImagingTest
*
* @remarks
* Any medical imaging modality typically used for diagnostic purposes.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface ImagingTest extends MedicalTest {
  imagingTechnique ?: MedicalImagingTechnique | Array<MedicalImagingTechnique>;
}

/**
*
* @see @link https://schema.org/IndividualProduct
*
* @remarks
* A single, identifiable product instance (e.g. a laptop with a particular serial number).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface IndividualProduct extends Product {
  serialNumber ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/InfectiousDisease
*
* @remarks
* An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface InfectiousDisease extends MedicalCondition {
  infectiousAgent ?: Text | Array<Text>;
  infectiousAgentClass ?: InfectiousAgentClass | Array<InfectiousAgentClass>;
  transmissionMethod ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/InformAction
*
* @remarks
* The act of notifying someone of information pertinent to them, with no expectation of a response.
*
**/
export interface InformAction extends CommunicateAction {
  event ?: Event | Array<Event>;
}

/**
*
* @see @link https://schema.org/InsertAction
*
* @remarks
* The act of adding at a specific location in an ordered collection.
*
**/
export interface InsertAction extends AddAction {
  toLocation ?: Place | Array<Place>;
}

/**
*
* @see @link https://schema.org/InstallAction
*
* @remarks
* The act of installing an application.
*
**/
export interface InstallAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/InsuranceAgency
*
* @remarks
* An Insurance agency.
*
**/
export interface InsuranceAgency extends FinancialService {
}

/**
*
* @see @link https://schema.org/Intangible
*
* @remarks
* A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
*
**/
export interface Intangible extends Thing {
}

/**
*
* @see @link https://schema.org/Integer
*
* @remarks
* Data type: Integer.
*
**/
export type Integer = Number;

/**
*
* @see @link https://schema.org/InteractAction
*
* @remarks
* The act of interacting with another person or organization.
*
**/
export interface InteractAction extends Action {
}

/**
*
* @see @link https://schema.org/InteractionCounter
*
* @remarks
* A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
*
**/
export interface InteractionCounter extends StructuredValue {
  interactionService ?: SoftwareApplication | Array<SoftwareApplication> | WebSite | Array<WebSite>
  interactionType ?: Action | Array<Action>;
  userInteractionCount ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/InternetCafe
*
* @remarks
* An internet cafe.
*
**/
export interface InternetCafe extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/InvestmentFund
*
* @remarks
* A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets.
*
* 
* Partof: https://pending.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
*
**/
export interface InvestmentFund extends InvestmentOrDeposit {
}

/**
*
* @see @link https://schema.org/InvestmentOrDeposit
*
* @remarks
* A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface InvestmentOrDeposit extends FinancialProduct {
  amount ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
}

/**
*
* @see @link https://schema.org/InviteAction
*
* @remarks
* The act of asking someone to attend an event. Reciprocal of RsvpAction.
*
**/
export interface InviteAction extends CommunicateAction {
  event ?: Event | Array<Event>;
}

/**
*
* @see @link https://schema.org/Invoice
*
* @remarks
* A statement of the money due for goods or services; a bill.
*
**/
export interface Invoice extends Intangible {
  accountId ?: Text | Array<Text>;
  billingPeriod ?: Duration | Array<Duration>;
  broker ?: Person | Array<Person> | Organization | Array<Organization>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  confirmationNumber ?: Text | Array<Text>;
  customer ?: Organization | Array<Organization> | Person | Array<Person>
  minimumPaymentDue ?: PriceSpecification | Array<PriceSpecification> | MonetaryAmount | Array<MonetaryAmount>
  paymentDue ?: DateTime | Array<DateTime>;
  paymentDueDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  paymentMethod ?: PaymentMethod | Array<PaymentMethod>;
  paymentMethodId ?: Text | Array<Text>;
  paymentStatus ?: Text | Array<Text> | PaymentStatusType | Array<PaymentStatusType>
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  referencesOrder ?: Order | Array<Order>;
  scheduledPaymentDate ?: Date | Array<Date>;
  totalPaymentDue ?: PriceSpecification | Array<PriceSpecification> | MonetaryAmount | Array<MonetaryAmount>
}

/**
*
* @see @link https://schema.org/ItemList
*
* @remarks
* A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
*
**/
export interface ItemList extends Intangible {
  itemListElement ?: Text | Array<Text> | ListItem | Array<ListItem> | Thing | Array<Thing>
  itemListOrder ?: ItemListOrderType | Array<ItemListOrderType> | Text | Array<Text>
  numberOfItems ?: Integer | Array<Integer>;
}

/**
*
* @see @link https://schema.org/ItemPage
*
* @remarks
* A page devoted to a single item, such as a particular product or hotel.
*
**/
export interface ItemPage extends WebPage {
}

/**
*
* @see @link https://schema.org/JewelryStore
*
* @remarks
* A jewelry store.
*
**/
export interface JewelryStore extends Store {
}

/**
*
* @see @link https://schema.org/JobPosting
*
* @remarks
* A listing that describes a job opening in a certain organization.
*
**/
export interface JobPosting extends Intangible {
  applicantLocationRequirements ?: AdministrativeArea | Array<AdministrativeArea>;
  applicationContact ?: ContactPoint | Array<ContactPoint>;
  baseSalary ?: MonetaryAmount | Array<MonetaryAmount> | PriceSpecification | Array<PriceSpecification> | Number | Array<Number>
  benefits ?: Text | Array<Text>;
  datePosted ?: Date | Array<Date> | DateTime | Array<DateTime>
  educationRequirements ?: Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  eligibilityToWorkRequirement ?: Text | Array<Text>;
  employerOverview ?: Text | Array<Text>;
  employmentType ?: Text | Array<Text>;
  employmentUnit ?: Organization | Array<Organization>;
  estimatedSalary ?: MonetaryAmount | Array<MonetaryAmount> | Number | Array<Number> | MonetaryAmountDistribution | Array<MonetaryAmountDistribution>
  experienceInPlaceOfEducation ?: Boolean | Array<Boolean>;
  experienceRequirements ?: Text | Array<Text> | OccupationalExperienceRequirements | Array<OccupationalExperienceRequirements>
  hiringOrganization ?: Organization | Array<Organization>;
  incentiveCompensation ?: Text | Array<Text>;
  incentives ?: Text | Array<Text>;
  industry ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  jobBenefits ?: Text | Array<Text>;
  jobImmediateStart ?: Boolean | Array<Boolean>;
  jobLocation ?: Place | Array<Place>;
  jobLocationType ?: Text | Array<Text>;
  jobStartDate ?: Date | Array<Date> | Text | Array<Text>
  occupationalCategory ?: CategoryCode | Array<CategoryCode> | Text | Array<Text>
  physicalRequirement ?: DefinedTerm | Array<DefinedTerm> | URL | Array<URL> | Text | Array<Text>
  qualifications ?: Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  relevantOccupation ?: Occupation | Array<Occupation>;
  responsibilities ?: Text | Array<Text>;
  salaryCurrency ?: Text | Array<Text>;
  securityClearanceRequirement ?: URL | Array<URL> | Text | Array<Text>
  sensoryRequirement ?: DefinedTerm | Array<DefinedTerm> | URL | Array<URL> | Text | Array<Text>
  skills ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  specialCommitments ?: Text | Array<Text>;
  title ?: Text | Array<Text>;
  totalJobOpenings ?: Integer | Array<Integer>;
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
  workHours ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/JoinAction
*
* @remarks
* An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
*
**/
export interface JoinAction extends InteractAction {
  event ?: Event | Array<Event>;
}

/**
*
* @see @link https://schema.org/Joint
*
* @remarks
* The anatomical location at which two or more bones make contact.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Joint extends AnatomicalStructure {
  biomechnicalClass ?: Text | Array<Text>;
  functionalClass ?: MedicalEntity | Array<MedicalEntity> | Text | Array<Text>
  structuralClass ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/LakeBodyOfWater
*
* @remarks
* A lake (for example, Lake Pontrachain).
*
**/
export interface LakeBodyOfWater extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/Landform
*
* @remarks
* A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.
*
**/
export interface Landform extends Place {
}

/**
*
* @see @link https://schema.org/LandmarksOrHistoricalBuildings
*
* @remarks
* An historical landmark or building.
*
**/
export interface LandmarksOrHistoricalBuildings extends Place {
}

/**
*
* @see @link https://schema.org/Language
*
* @remarks
* Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]].
*
**/
export interface Language extends Intangible {
}

/**
*
* @see @link https://schema.org/LearningResource
*
* @remarks
* The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.

[[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.

[[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1401
*
**/
export interface LearningResource extends CreativeWork {
  assesses ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  competencyRequired ?: Text | Array<Text> | URL | Array<URL> | DefinedTerm | Array<DefinedTerm>
  educationalAlignment ?: AlignmentObject | Array<AlignmentObject>;
  educationalLevel ?: URL | Array<URL> | DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  educationalUse ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  learningResourceType ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  teaches ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
}

/**
*
* @see @link https://schema.org/LeaveAction
*
* @remarks
* An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
*
**/
export interface LeaveAction extends InteractAction {
  event ?: Event | Array<Event>;
}

/**
*
* @see @link https://schema.org/LegalService
*
* @remarks
* A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
*
**/
export interface LegalService extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/Legislation
*
* @remarks
* A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1156
* @see @link http://publications.europa.eu/mdr/eli/index.html
*
**/
export interface Legislation extends CreativeWork {
  jurisdiction ?: AdministrativeArea | Array<AdministrativeArea> | Text | Array<Text>
  legislationApplies ?: Legislation | Array<Legislation>;
  legislationChanges ?: Legislation | Array<Legislation>;
  legislationConsolidates ?: Legislation | Array<Legislation>;
  legislationDate ?: Date | Array<Date>;
  legislationDateVersion ?: Date | Array<Date>;
  legislationIdentifier ?: Text | Array<Text> | URL | Array<URL>
  legislationJurisdiction ?: Text | Array<Text> | AdministrativeArea | Array<AdministrativeArea>
  legislationLegalForce ?: LegalForceStatus | Array<LegalForceStatus>;
  legislationPassedBy ?: Organization | Array<Organization> | Person | Array<Person>
  legislationResponsible ?: Person | Array<Person> | Organization | Array<Organization>
  legislationTransposes ?: Legislation | Array<Legislation>;
  legislationType ?: CategoryCode | Array<CategoryCode> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/LegislationObject
*
* @remarks
* A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1156
* @see @link http://publications.europa.eu/mdr/eli/index.html
*
**/
export interface LegislationObject extends Legislation, MediaObject {
  legislationLegalValue ?: LegalValueLevel | Array<LegalValueLevel>;
}

/**
*
* @see @link https://schema.org/LegislativeBuilding
*
* @remarks
* A legislative building&#x2014;for example, the state capitol.
*
**/
export interface LegislativeBuilding extends GovernmentBuilding {
}

/**
*
* @see @link https://schema.org/LendAction
*
* @remarks
* The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
*
**/
export interface LendAction extends TransferAction {
  borrower ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/Library
*
* @remarks
* A library.
*
**/
export interface Library extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/LibrarySystem
*
* @remarks
* A [[LibrarySystem]] is a collaborative system amongst several libraries.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1495
*
**/
export interface LibrarySystem extends Organization {
}

/**
*
* @see @link https://schema.org/LifestyleModification
*
* @remarks
* A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface LifestyleModification extends MedicalEntity {
}

/**
*
* @see @link https://schema.org/Ligament
*
* @remarks
* A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Ligament extends AnatomicalStructure {
}

/**
*
* @see @link https://schema.org/LikeAction
*
* @remarks
* The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.
*
**/
export interface LikeAction extends ReactAction {
}

/**
*
* @see @link https://schema.org/LinkRole
*
* @remarks
* A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1045
*
**/
export interface LinkRole extends Role {
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  linkRelationship ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/LiquorStore
*
* @remarks
* A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.
*
**/
export interface LiquorStore extends Store {
}

/**
*
* @see @link https://schema.org/ListenAction
*
* @remarks
* The act of consuming audio content.
*
**/
export interface ListenAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/ListItem
*
* @remarks
* An list item, e.g. a step in a checklist or how-to description.
*
**/
export interface ListItem extends Intangible {
  item ?: Thing | Array<Thing>;
  nextItem ?: ListItem | Array<ListItem>;
  position ?: Text | Array<Text> | Integer | Array<Integer>
  previousItem ?: ListItem | Array<ListItem>;
}

/**
*
* @see @link https://schema.org/LiteraryEvent
*
* @remarks
* Event type: Literary event.
*
**/
export interface LiteraryEvent extends Event {
}

/**
*
* @see @link https://schema.org/LiveBlogPosting
*
* @remarks
* A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
*
**/
export interface LiveBlogPosting extends BlogPosting {
  coverageEndTime ?: DateTime | Array<DateTime>;
  coverageStartTime ?: DateTime | Array<DateTime>;
  liveBlogUpdate ?: BlogPosting | Array<BlogPosting>;
}

/**
*
* @see @link https://schema.org/LoanOrCredit
*
* @remarks
* A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface LoanOrCredit extends FinancialProduct {
  amount ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
  currency ?: Text | Array<Text>;
  gracePeriod ?: Duration | Array<Duration>;
  loanRepaymentForm ?: RepaymentSpecification | Array<RepaymentSpecification>;
  loanTerm ?: QuantitativeValue | Array<QuantitativeValue>;
  loanType ?: URL | Array<URL> | Text | Array<Text>
  recourseLoan ?: Boolean | Array<Boolean>;
  renegotiableLoan ?: Boolean | Array<Boolean>;
  requiredCollateral ?: Text | Array<Text> | Thing | Array<Thing>
}

/**
*
* @see @link https://schema.org/LocalBusiness
*
* @remarks
* A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
*
**/
export interface LocalBusiness extends Organization, Place {
  branchOf ?: Organization | Array<Organization>;
  currenciesAccepted ?: Text | Array<Text>;
  openingHours ?: Text | Array<Text>;
  paymentAccepted ?: Text | Array<Text>;
  priceRange ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/LocationFeatureSpecification
*
* @remarks
* Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface LocationFeatureSpecification extends PropertyValue {
  hoursAvailable ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
}

/**
*
* @see @link https://schema.org/Locksmith
*
* @remarks
* A locksmith.
*
**/
export interface Locksmith extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/LodgingBusiness
*
* @remarks
* A lodging business, such as a motel, hotel, or inn.
*
**/
export interface LodgingBusiness extends LocalBusiness {
  amenityFeature ?: LocationFeatureSpecification | Array<LocationFeatureSpecification>;
  audience ?: Audience | Array<Audience>;
  availableLanguage ?: Language | Array<Language> | Text | Array<Text>
  checkinTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  checkoutTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  petsAllowed ?: Text | Array<Text> | Boolean | Array<Boolean>
  starRating ?: Rating | Array<Rating>;
}

/**
*
* @see @link https://schema.org/LodgingReservation
*
* @remarks
* A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
*
**/
export interface LodgingReservation extends Reservation {
  checkinTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  checkoutTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  lodgingUnitDescription ?: Text | Array<Text>;
  lodgingUnitType ?: QualitativeValue | Array<QualitativeValue> | Text | Array<Text>
  numAdults ?: Integer | Array<Integer> | QuantitativeValue | Array<QuantitativeValue>
  numChildren ?: Integer | Array<Integer> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/LoseAction
*
* @remarks
* The act of being defeated in a competitive activity.
*
**/
export interface LoseAction extends AchieveAction {
  winner ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/LymphaticVessel
*
* @remarks
* A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface LymphaticVessel extends Vessel {
  originatesFrom ?: Vessel | Array<Vessel>;
  regionDrained ?: AnatomicalStructure | Array<AnatomicalStructure> | AnatomicalSystem | Array<AnatomicalSystem>
  runsTo ?: Vessel | Array<Vessel>;
}

/**
*
* @see @link https://schema.org/Manuscript
*
* @remarks
* A book, document, or piece of music written by hand rather than typed or printed.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1448
*
**/
export interface Manuscript extends CreativeWork {
}

/**
*
* @see @link https://schema.org/Map
*
* @remarks
* A map.
*
**/
export interface Map extends CreativeWork {
  mapType ?: MapCategoryType | Array<MapCategoryType>;
}

/**
*
* @see @link https://schema.org/MarryAction
*
* @remarks
* The act of marrying a person.
*
**/
export interface MarryAction extends InteractAction {
}

/**
*
* @see @link https://schema.org/Mass
*
* @remarks
* Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.
*
**/
export interface Mass extends Quantity {
}

/**
*
* @see @link https://schema.org/MathSolver
*
* @remarks
* A math solver which is capable of solving a subset of mathematical problems.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2740
*
**/
export interface MathSolver extends CreativeWork {
  mathExpression ?: Text | Array<Text> | SolveMathAction | Array<SolveMathAction>
}

/**
*
* @see @link https://schema.org/MaximumDoseSchedule
*
* @remarks
* The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MaximumDoseSchedule extends DoseSchedule {
}

/**
*
* @see @link https://schema.org/MeasurementTypeEnumeration
*
* @remarks
* Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export interface MeasurementTypeEnumeration extends Enumeration {
}

/**
*
* @see @link https://schema.org/MediaGallery
*
* @remarks
* Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.
*
**/
export interface MediaGallery extends CollectionPage {
}

/**
*
* @see @link https://schema.org/MediaObject
*
* @remarks
* A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
*
**/
export interface MediaObject extends CreativeWork {
  associatedArticle ?: NewsArticle | Array<NewsArticle>;
  bitrate ?: Text | Array<Text>;
  contentSize ?: Text | Array<Text>;
  contentUrl ?: URL | Array<URL>;
  duration ?: Duration | Array<Duration>;
  embedUrl ?: URL | Array<URL>;
  encodesCreativeWork ?: CreativeWork | Array<CreativeWork>;
  encodingFormat ?: Text | Array<Text> | URL | Array<URL>
  endTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  height ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
  ineligibleRegion ?: GeoShape | Array<GeoShape> | Text | Array<Text> | Place | Array<Place>
  playerType ?: Text | Array<Text>;
  productionCompany ?: Organization | Array<Organization>;
  regionsAllowed ?: Place | Array<Place>;
  requiresSubscription ?: Boolean | Array<Boolean> | MediaSubscription | Array<MediaSubscription>
  startTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  uploadDate ?: Date | Array<Date>;
  width ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
}

/**
*
* @see @link https://schema.org/MediaReview
*
* @remarks
* A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
    For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
    a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
    to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup has not yet been finalized.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2450
*
**/
export interface MediaReview extends Review {
  mediaAuthenticityCategory ?: MediaManipulationRatingEnumeration | Array<MediaManipulationRatingEnumeration>;
}

/**
*
* @see @link https://schema.org/MediaSubscription
*
* @remarks
* A subscription which allows a user to access media including audio, video, books, etc.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1741
*
**/
export interface MediaSubscription extends Intangible {
  authenticator ?: Organization | Array<Organization>;
  expectsAcceptanceOf ?: Offer | Array<Offer>;
}

/**
*
* @see @link https://schema.org/MedicalAudience
*
* @remarks
* Target audiences for medical web pages.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalAudience extends Audience, PeopleAudience {
}

/**
*
* @see @link https://schema.org/MedicalBusiness
*
* @remarks
* A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalBusiness extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/MedicalCause
*
* @remarks
* The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalCause extends MedicalEntity {
  causeOf ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalClinic
*
* @remarks
* A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalClinic extends MedicalOrganization, MedicalBusiness {
  availableService ?: MedicalTest | Array<MedicalTest> | MedicalTherapy | Array<MedicalTherapy> | MedicalProcedure | Array<MedicalProcedure>
  medicalSpecialty ?: MedicalSpecialty | Array<MedicalSpecialty>;
}

/**
*
* @see @link https://schema.org/MedicalCode
*
* @remarks
* A code for a medical entity.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalCode extends CategoryCode, MedicalIntangible {
  codeValue ?: Text | Array<Text>;
  codingSystem ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MedicalCondition
*
* @remarks
* Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalCondition extends MedicalEntity {
  associatedAnatomy ?: AnatomicalStructure | Array<AnatomicalStructure> | AnatomicalSystem | Array<AnatomicalSystem> | SuperficialAnatomy | Array<SuperficialAnatomy>
  differentialDiagnosis ?: DDxElement | Array<DDxElement>;
  drug ?: Drug | Array<Drug>;
  epidemiology ?: Text | Array<Text>;
  expectedPrognosis ?: Text | Array<Text>;
  naturalProgression ?: Text | Array<Text>;
  pathophysiology ?: Text | Array<Text>;
  possibleComplication ?: Text | Array<Text>;
  possibleTreatment ?: MedicalTherapy | Array<MedicalTherapy>;
  primaryPrevention ?: MedicalTherapy | Array<MedicalTherapy>;
  riskFactor ?: MedicalRiskFactor | Array<MedicalRiskFactor>;
  secondaryPrevention ?: MedicalTherapy | Array<MedicalTherapy>;
  signOrSymptom ?: MedicalSignOrSymptom | Array<MedicalSignOrSymptom>;
  stage ?: MedicalConditionStage | Array<MedicalConditionStage>;
  status ?: EventStatusType | Array<EventStatusType> | Text | Array<Text> | MedicalStudyStatus | Array<MedicalStudyStatus>
  typicalTest ?: MedicalTest | Array<MedicalTest>;
}

/**
*
* @see @link https://schema.org/MedicalConditionStage
*
* @remarks
* A stage of a medical condition, such as 'Stage IIIa'.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalConditionStage extends MedicalIntangible {
  stageAsNumber ?: Number | Array<Number>;
  subStageSuffix ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MedicalContraindication
*
* @remarks
* A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures).
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalContraindication extends MedicalEntity {
}

/**
*
* @see @link https://schema.org/MedicalDevice
*
* @remarks
* Any object used in a medical capacity, such as to diagnose or treat a patient.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalDevice extends MedicalEntity {
  adverseOutcome ?: MedicalEntity | Array<MedicalEntity>;
  contraindication ?: Text | Array<Text> | MedicalContraindication | Array<MedicalContraindication>
  postOp ?: Text | Array<Text>;
  preOp ?: Text | Array<Text>;
  procedure ?: Text | Array<Text>;
  seriousAdverseOutcome ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalEntity
*
* @remarks
* The most generic type of entity related to health and the practice of medicine.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalEntity extends Thing {
  code ?: MedicalCode | Array<MedicalCode>;
  guideline ?: MedicalGuideline | Array<MedicalGuideline>;
  legalStatus ?: MedicalEnumeration | Array<MedicalEnumeration> | Text | Array<Text> | DrugLegalStatus | Array<DrugLegalStatus>
  medicineSystem ?: MedicineSystem | Array<MedicineSystem>;
  recognizingAuthority ?: Organization | Array<Organization>;
  relevantSpecialty ?: MedicalSpecialty | Array<MedicalSpecialty>;
  study ?: MedicalStudy | Array<MedicalStudy>;
}

/**
*
* @see @link https://schema.org/MedicalEnumeration
*
* @remarks
* Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalEnumeration extends Enumeration {
}

/**
*
* @see @link https://schema.org/MedicalGuideline
*
* @remarks
* Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalGuideline extends MedicalEntity {
  evidenceLevel ?: MedicalEvidenceLevel | Array<MedicalEvidenceLevel>;
  evidenceOrigin ?: Text | Array<Text>;
  guidelineDate ?: Date | Array<Date>;
  guidelineSubject ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalGuidelineContraindication
*
* @remarks
* A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalGuidelineContraindication extends MedicalGuideline {
}

/**
*
* @see @link https://schema.org/MedicalGuidelineRecommendation
*
* @remarks
* A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalGuidelineRecommendation extends MedicalGuideline {
  recommendationStrength ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MedicalIndication
*
* @remarks
* A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalIndication extends MedicalEntity {
}

/**
*
* @see @link https://schema.org/MedicalIntangible
*
* @remarks
* A utility class that serves as the umbrella for a number of 'intangible' things in the medical space.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalIntangible extends MedicalEntity {
}

/**
*
* @see @link https://schema.org/MedicalObservationalStudy
*
* @remarks
* An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalObservationalStudy extends MedicalStudy {
  studyDesign ?: MedicalObservationalStudyDesign | Array<MedicalObservationalStudyDesign>;
}

/**
*
* @see @link https://schema.org/MedicalOrganization
*
* @remarks
* A medical organization (physical or not), such as hospital, institution or clinic.
*
**/
export interface MedicalOrganization extends Organization {
  healthPlanNetworkId ?: Text | Array<Text>;
  isAcceptingNewPatients ?: Boolean | Array<Boolean>;
  medicalSpecialty ?: MedicalSpecialty | Array<MedicalSpecialty>;
}

/**
*
* @see @link https://schema.org/MedicalProcedure
*
* @remarks
* A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalProcedure extends MedicalEntity {
  bodyLocation ?: Text | Array<Text>;
  followup ?: Text | Array<Text>;
  howPerformed ?: Text | Array<Text>;
  preparation ?: MedicalEntity | Array<MedicalEntity> | Text | Array<Text>
  procedureType ?: MedicalProcedureType | Array<MedicalProcedureType>;
  status ?: EventStatusType | Array<EventStatusType> | Text | Array<Text> | MedicalStudyStatus | Array<MedicalStudyStatus>
}

/**
*
* @see @link https://schema.org/MedicalRiskCalculator
*
* @remarks
* A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalRiskCalculator extends MedicalRiskEstimator {
}

/**
*
* @see @link https://schema.org/MedicalRiskEstimator
*
* @remarks
* Any rule set or interactive tool for estimating the risk of developing a complication or condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalRiskEstimator extends MedicalEntity {
  estimatesRiskOf ?: MedicalEntity | Array<MedicalEntity>;
  includedRiskFactor ?: MedicalRiskFactor | Array<MedicalRiskFactor>;
}

/**
*
* @see @link https://schema.org/MedicalRiskFactor
*
* @remarks
* A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalRiskFactor extends MedicalEntity {
  increasesRiskOf ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalRiskScore
*
* @remarks
* A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalRiskScore extends MedicalRiskEstimator {
  algorithm ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MedicalScholarlyArticle
*
* @remarks
* A scholarly article in the medical domain.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalScholarlyArticle extends ScholarlyArticle {
  publicationType ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MedicalSign
*
* @remarks
* Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalSign extends MedicalSignOrSymptom {
  identifyingExam ?: PhysicalExam | Array<PhysicalExam>;
  identifyingTest ?: MedicalTest | Array<MedicalTest>;
}

/**
*
* @see @link https://schema.org/MedicalSignOrSymptom
*
* @remarks
* Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalSignOrSymptom extends MedicalCondition {
  possibleTreatment ?: MedicalTherapy | Array<MedicalTherapy>;
}

/**
*
* @see @link https://schema.org/MedicalStudy
*
* @remarks
* A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalStudy extends MedicalEntity {
  healthCondition ?: MedicalCondition | Array<MedicalCondition>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
  status ?: EventStatusType | Array<EventStatusType> | Text | Array<Text> | MedicalStudyStatus | Array<MedicalStudyStatus>
  studyLocation ?: AdministrativeArea | Array<AdministrativeArea>;
  studySubject ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalSymptom
*
* @remarks
* Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalSymptom extends MedicalSignOrSymptom {
}

/**
*
* @see @link https://schema.org/MedicalTest
*
* @remarks
* Any medical test, typically performed for diagnostic purposes.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalTest extends MedicalEntity {
  affectedBy ?: Drug | Array<Drug>;
  normalRange ?: MedicalEnumeration | Array<MedicalEnumeration> | Text | Array<Text>
  signDetected ?: MedicalSign | Array<MedicalSign>;
  usedToDiagnose ?: MedicalCondition | Array<MedicalCondition>;
  usesDevice ?: MedicalDevice | Array<MedicalDevice>;
}

/**
*
* @see @link https://schema.org/MedicalTestPanel
*
* @remarks
* Any collection of tests commonly ordered together.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalTestPanel extends MedicalTest {
  subTest ?: MedicalTest | Array<MedicalTest>;
}

/**
*
* @see @link https://schema.org/MedicalTherapy
*
* @remarks
* Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalTherapy extends TherapeuticProcedure {
  contraindication ?: Text | Array<Text> | MedicalContraindication | Array<MedicalContraindication>
  duplicateTherapy ?: MedicalTherapy | Array<MedicalTherapy>;
  seriousAdverseOutcome ?: MedicalEntity | Array<MedicalEntity>;
}

/**
*
* @see @link https://schema.org/MedicalTrial
*
* @remarks
* A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalTrial extends MedicalStudy {
  trialDesign ?: MedicalTrialDesign | Array<MedicalTrialDesign>;
}

/**
*
* @see @link https://schema.org/MedicalWebPage
*
* @remarks
* A web page that provides medical information.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface MedicalWebPage extends WebPage {
  aspect ?: Text | Array<Text>;
  medicalAudience ?: MedicalAudienceType | Array<MedicalAudienceType> | MedicalAudience | Array<MedicalAudience>
}

/**
*
* @see @link https://schema.org/MeetingRoom
*
* @remarks
* A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface MeetingRoom extends Room {
}

/**
*
* @see @link https://schema.org/MensClothingStore
*
* @remarks
* A men's clothing store.
*
**/
export interface MensClothingStore extends Store {
}

/**
*
* @see @link https://schema.org/Menu
*
* @remarks
* A structured representation of food or drink items available from a FoodEstablishment.
*
**/
export interface Menu extends CreativeWork {
  hasMenuItem ?: MenuItem | Array<MenuItem>;
  hasMenuSection ?: MenuSection | Array<MenuSection>;
}

/**
*
* @see @link https://schema.org/MenuItem
*
* @remarks
* A food or drink item listed in a menu or menu section.
*
**/
export interface MenuItem extends Intangible {
  menuAddOn ?: MenuItem | Array<MenuItem> | MenuSection | Array<MenuSection>
  nutrition ?: NutritionInformation | Array<NutritionInformation>;
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  suitableForDiet ?: RestrictedDiet | Array<RestrictedDiet>;
}

/**
*
* @see @link https://schema.org/MenuSection
*
* @remarks
* A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
*
**/
export interface MenuSection extends CreativeWork {
  hasMenuItem ?: MenuItem | Array<MenuItem>;
  hasMenuSection ?: MenuSection | Array<MenuSection>;
}

/**
*
* @see @link https://schema.org/MerchantReturnPolicy
*
* @remarks
* A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2288
*
**/
export interface MerchantReturnPolicy extends Intangible {
  inStoreReturnsOffered ?: Boolean | Array<Boolean>;
  merchantReturnDays ?: Integer | Array<Integer>;
  merchantReturnLink ?: URL | Array<URL>;
  refundType ?: RefundTypeEnumeration | Array<RefundTypeEnumeration>;
  returnFees ?: ReturnFeesEnumeration | Array<ReturnFeesEnumeration>;
  returnPolicyCategory ?: MerchantReturnEnumeration | Array<MerchantReturnEnumeration>;
}

/**
*
* @see @link https://schema.org/Message
*
* @remarks
* A single message from a sender to one or more organizations or people.
*
**/
export interface Message extends CreativeWork {
  bccRecipient ?: Person | Array<Person> | Organization | Array<Organization> | ContactPoint | Array<ContactPoint>
  ccRecipient ?: ContactPoint | Array<ContactPoint> | Person | Array<Person> | Organization | Array<Organization>
  dateRead ?: DateTime | Array<DateTime> | Date | Array<Date>
  dateReceived ?: DateTime | Array<DateTime>;
  dateSent ?: DateTime | Array<DateTime>;
  messageAttachment ?: CreativeWork | Array<CreativeWork>;
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
  sender ?: Person | Array<Person> | Audience | Array<Audience> | Organization | Array<Organization>
  toRecipient ?: ContactPoint | Array<ContactPoint> | Audience | Array<Audience> | Person | Array<Person> | Organization | Array<Organization>
}

/**
*
* @see @link https://schema.org/MiddleSchool
*
* @remarks
* A middle school (typically for children aged around 11-14, although this varies somewhat).
*
**/
export interface MiddleSchool extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/MobileApplication
*
* @remarks
* A software application designed specifically to work well on a mobile device such as a telephone.
*
**/
export interface MobileApplication extends SoftwareApplication {
  carrierRequirements ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MobilePhoneStore
*
* @remarks
* A store that sells mobile phones and related accessories.
*
**/
export interface MobilePhoneStore extends Store {
}

/**
*
* @see @link https://schema.org/MonetaryAmount
*
* @remarks
* A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface MonetaryAmount extends StructuredValue {
  currency ?: Text | Array<Text>;
  maxValue ?: Number | Array<Number>;
  minValue ?: Number | Array<Number>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
  value ?: Number | Array<Number> | StructuredValue | Array<StructuredValue> | Boolean | Array<Boolean> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/MonetaryAmountDistribution
*
* @remarks
* A statistical distribution of monetary amounts.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1698
*
**/
export interface MonetaryAmountDistribution extends QuantitativeValueDistribution {
  currency ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/MonetaryGrant
*
* @remarks
* A monetary grant.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
* @see @link https://github.com/schemaorg/schemaorg/issues/383
*
**/
export interface MonetaryGrant extends Grant {
  amount ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
  funder ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/MoneyTransfer
*
* @remarks
* The act of transferring money from one place to another place. This may occur electronically or physically.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface MoneyTransfer extends TransferAction {
  amount ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
  beneficiaryBank ?: Text | Array<Text> | BankOrCreditUnion | Array<BankOrCreditUnion>
}

/**
*
* @see @link https://schema.org/MortgageLoan
*
* @remarks
* A loan in which property or real estate is used as collateral. (A loan securitized against some real estate).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface MortgageLoan extends LoanOrCredit {
  domiciledMortgage ?: Boolean | Array<Boolean>;
  loanMortgageMandateAmount ?: MonetaryAmount | Array<MonetaryAmount>;
}

/**
*
* @see @link https://schema.org/Mosque
*
* @remarks
* A mosque.
*
**/
export interface Mosque extends PlaceOfWorship {
}

/**
*
* @see @link https://schema.org/Motel
*
* @remarks
* A motel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
**/
export interface Motel extends LodgingBusiness {
}

/**
*
* @see @link https://schema.org/Motorcycle
*
* @remarks
* A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.
*
* 
* Partof: https://auto.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export interface Motorcycle extends Vehicle {
}

/**
*
* @see @link https://schema.org/MotorcycleDealer
*
* @remarks
* A motorcycle dealer.
*
**/
export interface MotorcycleDealer extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/MotorcycleRepair
*
* @remarks
* A motorcycle repair shop.
*
**/
export interface MotorcycleRepair extends AutomotiveBusiness {
}

/**
*
* @see @link https://schema.org/MotorizedBicycle
*
* @remarks
* A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.
*
* 
* Partof: https://auto.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group
*
**/
export interface MotorizedBicycle extends Vehicle {
}

/**
*
* @see @link https://schema.org/Mountain
*
* @remarks
* A mountain, like Mount Whitney or Mount Everest.
*
**/
export interface Mountain extends Landform {
}

/**
*
* @see @link https://schema.org/MoveAction
*
* @remarks
* The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
*
**/
export interface MoveAction extends Action {
  fromLocation ?: Place | Array<Place>;
  toLocation ?: Place | Array<Place>;
}

/**
*
* @see @link https://schema.org/Movie
*
* @remarks
* A movie.
*
**/
export interface Movie extends CreativeWork {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  countryOfOrigin ?: Country | Array<Country>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  duration ?: Duration | Array<Duration>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  productionCompany ?: Organization | Array<Organization>;
  subtitleLanguage ?: Text | Array<Text> | Language | Array<Language>
  titleEIDR ?: URL | Array<URL> | Text | Array<Text>
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/MovieClip
*
* @remarks
* A short segment/part of a movie.
*
**/
export interface MovieClip extends Clip {
}

/**
*
* @see @link https://schema.org/MovieRentalStore
*
* @remarks
* A movie rental store.
*
**/
export interface MovieRentalStore extends Store {
}

/**
*
* @see @link https://schema.org/MovieSeries
*
* @remarks
* A series of movies. Included movies can be indicated with the hasPart property.
*
**/
export interface MovieSeries extends CreativeWorkSeries {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  productionCompany ?: Organization | Array<Organization>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/MovieTheater
*
* @remarks
* A movie theater.
*
**/
export interface MovieTheater extends CivicStructure, EntertainmentBusiness {
  screenCount ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/MovingCompany
*
* @remarks
* A moving company.
*
**/
export interface MovingCompany extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/Muscle
*
* @remarks
* A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Muscle extends AnatomicalStructure {
  antagonist ?: Muscle | Array<Muscle>;
  bloodSupply ?: Vessel | Array<Vessel>;
  insertion ?: AnatomicalStructure | Array<AnatomicalStructure>;
  muscleAction ?: Text | Array<Text>;
  nerve ?: Nerve | Array<Nerve>;
}

/**
*
* @see @link https://schema.org/Museum
*
* @remarks
* A museum.
*
**/
export interface Museum extends CivicStructure {
}

/**
*
* @see @link https://schema.org/MusicAlbum
*
* @remarks
* A collection of music tracks.
*
**/
export interface MusicAlbum extends MusicPlaylist {
  albumProductionType ?: MusicAlbumProductionType | Array<MusicAlbumProductionType>;
  albumRelease ?: MusicRelease | Array<MusicRelease>;
  albumReleaseType ?: MusicAlbumReleaseType | Array<MusicAlbumReleaseType>;
  byArtist ?: MusicGroup | Array<MusicGroup> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/MusicComposition
*
* @remarks
* A musical composition.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ
*
**/
export interface MusicComposition extends CreativeWork {
  composer ?: Organization | Array<Organization> | Person | Array<Person>
  firstPerformance ?: Event | Array<Event>;
  includedComposition ?: MusicComposition | Array<MusicComposition>;
  iswcCode ?: Text | Array<Text>;
  lyricist ?: Person | Array<Person>;
  lyrics ?: CreativeWork | Array<CreativeWork>;
  musicalKey ?: Text | Array<Text>;
  musicArrangement ?: MusicComposition | Array<MusicComposition>;
  musicCompositionForm ?: Text | Array<Text>;
  recordedAs ?: MusicRecording | Array<MusicRecording>;
}

/**
*
* @see @link https://schema.org/MusicEvent
*
* @remarks
* Event type: Music event.
*
**/
export interface MusicEvent extends Event {
}

/**
*
* @see @link https://schema.org/MusicGroup
*
* @remarks
* A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
*
**/
export interface MusicGroup extends PerformingGroup {
  album ?: MusicAlbum | Array<MusicAlbum>;
  albums ?: MusicAlbum | Array<MusicAlbum>;
  genre ?: URL | Array<URL> | Text | Array<Text>
  musicGroupMember ?: Person | Array<Person>;
  track ?: ItemList | Array<ItemList> | MusicRecording | Array<MusicRecording>
  tracks ?: MusicRecording | Array<MusicRecording>;
}

/**
*
* @see @link https://schema.org/MusicPlaylist
*
* @remarks
* A collection of music tracks in playlist form.
*
**/
export interface MusicPlaylist extends CreativeWork {
  numTracks ?: Integer | Array<Integer>;
  track ?: ItemList | Array<ItemList> | MusicRecording | Array<MusicRecording>
  tracks ?: MusicRecording | Array<MusicRecording>;
}

/**
*
* @see @link https://schema.org/MusicRecording
*
* @remarks
* A music recording (track), usually a single song.
*
**/
export interface MusicRecording extends CreativeWork {
  byArtist ?: MusicGroup | Array<MusicGroup> | Person | Array<Person>
  duration ?: Duration | Array<Duration>;
  inAlbum ?: MusicAlbum | Array<MusicAlbum>;
  inPlaylist ?: MusicPlaylist | Array<MusicPlaylist>;
  isrcCode ?: Text | Array<Text>;
  recordingOf ?: MusicComposition | Array<MusicComposition>;
}

/**
*
* @see @link https://schema.org/MusicRelease
*
* @remarks
* A MusicRelease is a specific release of a music album.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ
*
**/
export interface MusicRelease extends MusicPlaylist {
  catalogNumber ?: Text | Array<Text>;
  creditedTo ?: Person | Array<Person> | Organization | Array<Organization>
  duration ?: Duration | Array<Duration>;
  musicReleaseFormat ?: MusicReleaseFormatType | Array<MusicReleaseFormatType>;
  recordLabel ?: Organization | Array<Organization>;
  releaseOf ?: MusicAlbum | Array<MusicAlbum>;
}

/**
*
* @see @link https://schema.org/MusicStore
*
* @remarks
* A music store.
*
**/
export interface MusicStore extends Store {
}

/**
*
* @see @link https://schema.org/MusicVenue
*
* @remarks
* A music venue.
*
**/
export interface MusicVenue extends CivicStructure {
}

/**
*
* @see @link https://schema.org/MusicVideoObject
*
* @remarks
* A music video file.
*
**/
export interface MusicVideoObject extends MediaObject {
}

/**
*
* @see @link https://schema.org/NailSalon
*
* @remarks
* A nail salon.
*
**/
export interface NailSalon extends HealthAndBeautyBusiness {
}

/**
*
* @see @link https://schema.org/Nerve
*
* @remarks
* A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Nerve extends AnatomicalStructure {
  branch ?: AnatomicalStructure | Array<AnatomicalStructure>;
  nerveMotor ?: Muscle | Array<Muscle>;
  sensoryUnit ?: SuperficialAnatomy | Array<SuperficialAnatomy> | AnatomicalStructure | Array<AnatomicalStructure>
  sourcedFrom ?: BrainStructure | Array<BrainStructure>;
}

/**
*
* @see @link https://schema.org/NewsArticle
*
* @remarks
* A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.

A more detailed overview of [schema.org News markup](/docs/news.html) is also available.

*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP-draws
*
**/
export interface NewsArticle extends Article {
  dateline ?: Text | Array<Text>;
  printColumn ?: Text | Array<Text>;
  printEdition ?: Text | Array<Text>;
  printPage ?: Text | Array<Text>;
  printSection ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/NewsMediaOrganization
*
* @remarks
* A News/Media organization such as a newspaper or TV station.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
*
**/
export interface NewsMediaOrganization extends Organization {
  actionableFeedbackPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  correctionsPolicy ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  diversityPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  diversityStaffingReport ?: Article | Array<Article> | URL | Array<URL>
  ethicsPolicy ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  masthead ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  missionCoveragePrioritiesPolicy ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  noBylinesPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  ownershipFundingInfo ?: Text | Array<Text> | URL | Array<URL> | CreativeWork | Array<CreativeWork> | AboutPage | Array<AboutPage>
  unnamedSourcesPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  verificationFactCheckingPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/Newspaper
*
* @remarks
* A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily.
*
* 
* Partof: https://bib.schema.org
* @see @link http://www.productontology.org/id/Newspaper
*
**/
export interface Newspaper extends Periodical {
}

/**
*
* @see @link https://schema.org/NGO
*
* @remarks
* Organization: Non-governmental Organization.
*
**/
export interface NGO extends Organization {
}

/**
*
* @see @link https://schema.org/NightClub
*
* @remarks
* A nightclub or discotheque.
*
**/
export interface NightClub extends EntertainmentBusiness {
}

/**
*
* @see @link https://schema.org/NonprofitType
*
* @remarks
* NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2543
*
**/
export interface NonprofitType extends Enumeration {
}

/**
*
* @see @link https://schema.org/Notary
*
* @remarks
* A notary.
*
**/
export interface Notary extends LegalService {
}

/**
*
* @see @link https://schema.org/NoteDigitalDocument
*
* @remarks
* A file containing a note, primarily for the author.
*
**/
export interface NoteDigitalDocument extends DigitalDocument {
}

/**
*
* @see @link https://schema.org/NutritionInformation
*
* @remarks
* Nutritional information about the recipe.
*
**/
export interface NutritionInformation extends StructuredValue {
  calories ?: Energy | Array<Energy>;
  carbohydrateContent ?: Mass | Array<Mass>;
  cholesterolContent ?: Mass | Array<Mass>;
  fatContent ?: Mass | Array<Mass>;
  fiberContent ?: Mass | Array<Mass>;
  proteinContent ?: Mass | Array<Mass>;
  saturatedFatContent ?: Mass | Array<Mass>;
  servingSize ?: Text | Array<Text>;
  sodiumContent ?: Mass | Array<Mass>;
  sugarContent ?: Mass | Array<Mass>;
  transFatContent ?: Mass | Array<Mass>;
  unsaturatedFatContent ?: Mass | Array<Mass>;
}

/**
*
* @see @link https://schema.org/Observation
*
* @remarks
* Instances of the class [[Observation]] are used to specify observations about an entity (which may or may not be an instance of a [[StatisticalPopulation]]), at a particular time. The principal properties of an [[Observation]] are [[observedNode]], [[measuredProperty]], [[measuredValue]] (or [[median]], etc.) and [[observationDate]] ([[measuredProperty]] properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the [lifeExpectancy example](https://www.w3.org/TR/vocab-data-cube/#dsd-example)).
See also [[StatisticalPopulation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2291
*
**/
export interface Observation extends Intangible {
  marginOfError ?: QuantitativeValue | Array<QuantitativeValue>;
  measuredProperty ?: Property | Array<Property>;
  measuredValue ?: DataType | Array<DataType>;
  observationDate ?: DateTime | Array<DateTime>;
  observedNode ?: StatisticalPopulation | Array<StatisticalPopulation>;
}

/**
*
* @see @link https://schema.org/Occupation
*
* @remarks
* A profession, may involve prolonged training and/or a formal qualification.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1698
*
**/
export interface Occupation extends Intangible {
  educationRequirements ?: Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  estimatedSalary ?: MonetaryAmount | Array<MonetaryAmount> | Number | Array<Number> | MonetaryAmountDistribution | Array<MonetaryAmountDistribution>
  experienceRequirements ?: Text | Array<Text> | OccupationalExperienceRequirements | Array<OccupationalExperienceRequirements>
  occupationalCategory ?: CategoryCode | Array<CategoryCode> | Text | Array<Text>
  occupationLocation ?: AdministrativeArea | Array<AdministrativeArea>;
  qualifications ?: Text | Array<Text> | EducationalOccupationalCredential | Array<EducationalOccupationalCredential>
  responsibilities ?: Text | Array<Text>;
  skills ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/OccupationalExperienceRequirements
*
* @remarks
* Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2681
*
**/
export interface OccupationalExperienceRequirements extends Intangible {
  monthsOfExperience ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/OccupationalTherapy
*
* @remarks
* A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface OccupationalTherapy extends MedicalTherapy {
}

/**
*
* @see @link https://schema.org/OceanBodyOfWater
*
* @remarks
* An ocean (for example, the Pacific).
*
**/
export interface OceanBodyOfWater extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/Offer
*
* @remarks
* An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms
*
**/
export interface Offer extends Intangible {
  acceptedPaymentMethod ?: LoanOrCredit | Array<LoanOrCredit> | PaymentMethod | Array<PaymentMethod>
  addOn ?: Offer | Array<Offer>;
  advanceBookingRequirement ?: QuantitativeValue | Array<QuantitativeValue>;
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  availability ?: ItemAvailability | Array<ItemAvailability>;
  availabilityEnds ?: DateTime | Array<DateTime> | Time | Array<Time> | Date | Array<Date>
  availabilityStarts ?: DateTime | Array<DateTime> | Date | Array<Date> | Time | Array<Time>
  availableAtOrFrom ?: Place | Array<Place>;
  availableDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  businessFunction ?: BusinessFunction | Array<BusinessFunction>;
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  deliveryLeadTime ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleCustomerType ?: BusinessEntityType | Array<BusinessEntityType>;
  eligibleDuration ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleQuantity ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleRegion ?: Text | Array<Text> | GeoShape | Array<GeoShape> | Place | Array<Place>
  eligibleTransactionVolume ?: PriceSpecification | Array<PriceSpecification>;
  gtin ?: Text | Array<Text>;
  gtin12 ?: Text | Array<Text>;
  gtin13 ?: Text | Array<Text>;
  gtin14 ?: Text | Array<Text>;
  gtin8 ?: Text | Array<Text>;
  hasMeasurement ?: QuantitativeValue | Array<QuantitativeValue>;
  includesObject ?: TypeAndQuantityNode | Array<TypeAndQuantityNode>;
  ineligibleRegion ?: GeoShape | Array<GeoShape> | Text | Array<Text> | Place | Array<Place>
  inventoryLevel ?: QuantitativeValue | Array<QuantitativeValue>;
  itemCondition ?: OfferItemCondition | Array<OfferItemCondition>;
  itemOffered ?: Trip | Array<Trip> | Product | Array<Product> | MenuItem | Array<MenuItem> | Service | Array<Service> | Event | Array<Event> | CreativeWork | Array<CreativeWork> | AggregateOffer | Array<AggregateOffer>
  leaseLength ?: Duration | Array<Duration> | QuantitativeValue | Array<QuantitativeValue>
  mpn ?: Text | Array<Text>;
  offeredBy ?: Person | Array<Person> | Organization | Array<Organization>
  price ?: Number | Array<Number> | Text | Array<Text>
  priceCurrency ?: Text | Array<Text>;
  priceSpecification ?: PriceSpecification | Array<PriceSpecification>;
  priceValidUntil ?: Date | Array<Date>;
  review ?: Review | Array<Review>;
  reviews ?: Review | Array<Review>;
  seller ?: Organization | Array<Organization> | Person | Array<Person>
  serialNumber ?: Text | Array<Text>;
  shippingDetails ?: OfferShippingDetails | Array<OfferShippingDetails>;
  sku ?: Text | Array<Text>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
  warranty ?: WarrantyPromise | Array<WarrantyPromise>;
}

/**
*
* @see @link https://schema.org/OfferCatalog
*
* @remarks
* An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
*
**/
export interface OfferCatalog extends ItemList {
}

/**
*
* @see @link https://schema.org/OfferForLease
*
* @remarks
* An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose
  [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2348
*
**/
export interface OfferForLease extends Offer {
}

/**
*
* @see @link https://schema.org/OfferForPurchase
*
* @remarks
* An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose
  [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
  background on the underlying concepts.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2348
*
**/
export interface OfferForPurchase extends Offer {
}

/**
*
* @see @link https://schema.org/OfferShippingDetails
*
* @remarks
* OfferShippingDetails represents information about shipping destinations.

Multiple of these entities can be used to represent different shipping rates for different destinations:

One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.

Multiple of these entities can be used to represent different shipping costs and delivery times.

Two entities that are identical but differ in rate and time:

e.g. Cheaper and slower: $5 in 5-7days
or Fast and expensive: $15 in 1-2 days.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface OfferShippingDetails extends StructuredValue {
  deliveryTime ?: ShippingDeliveryTime | Array<ShippingDeliveryTime>;
  doesNotShip ?: Boolean | Array<Boolean>;
  shippingDestination ?: DefinedRegion | Array<DefinedRegion>;
  shippingLabel ?: Text | Array<Text>;
  shippingRate ?: MonetaryAmount | Array<MonetaryAmount>;
  shippingSettingsLink ?: URL | Array<URL>;
  transitTimeLabel ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/OfficeEquipmentStore
*
* @remarks
* An office equipment store.
*
**/
export interface OfficeEquipmentStore extends Store {
}

/**
*
* @see @link https://schema.org/OnDemandEvent
*
* @remarks
* A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
*
**/
export interface OnDemandEvent extends PublicationEvent {
}

/**
*
* @see @link https://schema.org/OpeningHoursSpecification
*
* @remarks
* A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
      
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface OpeningHoursSpecification extends StructuredValue {
  closes ?: Time | Array<Time>;
  dayOfWeek ?: DayOfWeek | Array<DayOfWeek>;
  opens ?: Time | Array<Time>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
}

/**
*
* @see @link https://schema.org/OpinionNewsArticle
*
* @remarks
* An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface OpinionNewsArticle extends NewsArticle {
}

/**
*
* @see @link https://schema.org/Optician
*
* @remarks
* A store that sells reading glasses and similar devices for improving vision.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Optician extends MedicalBusiness {
}

/**
*
* @see @link https://schema.org/Order
*
* @remarks
* An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
*
**/
export interface Order extends Intangible {
  acceptedOffer ?: Offer | Array<Offer>;
  billingAddress ?: PostalAddress | Array<PostalAddress>;
  broker ?: Person | Array<Person> | Organization | Array<Organization>
  confirmationNumber ?: Text | Array<Text>;
  customer ?: Organization | Array<Organization> | Person | Array<Person>
  discount ?: Number | Array<Number> | Text | Array<Text>
  discountCode ?: Text | Array<Text>;
  discountCurrency ?: Text | Array<Text>;
  isGift ?: Boolean | Array<Boolean>;
  merchant ?: Person | Array<Person> | Organization | Array<Organization>
  orderDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  orderDelivery ?: ParcelDelivery | Array<ParcelDelivery>;
  orderedItem ?: Product | Array<Product> | OrderItem | Array<OrderItem> | Service | Array<Service>
  orderNumber ?: Text | Array<Text>;
  orderStatus ?: OrderStatus | Array<OrderStatus>;
  partOfInvoice ?: Invoice | Array<Invoice>;
  paymentDue ?: DateTime | Array<DateTime>;
  paymentDueDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  paymentMethod ?: PaymentMethod | Array<PaymentMethod>;
  paymentMethodId ?: Text | Array<Text>;
  paymentUrl ?: URL | Array<URL>;
  seller ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/OrderAction
*
* @remarks
* An agent orders an object/product/service to be delivered/sent.
*
**/
export interface OrderAction extends TradeAction {
  deliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
}

/**
*
* @see @link https://schema.org/OrderItem
*
* @remarks
* An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
*
**/
export interface OrderItem extends Intangible {
  orderDelivery ?: ParcelDelivery | Array<ParcelDelivery>;
  orderedItem ?: Product | Array<Product> | OrderItem | Array<OrderItem> | Service | Array<Service>
  orderItemNumber ?: Text | Array<Text>;
  orderItemStatus ?: OrderStatus | Array<OrderStatus>;
  orderQuantity ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/Organization
*
* @remarks
* An organization such as a school, NGO, corporation, club, etc.
*
**/
export interface Organization extends Thing {
  actionableFeedbackPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  address ?: Text | Array<Text> | PostalAddress | Array<PostalAddress>
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  alumni ?: Person | Array<Person>;
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  award ?: Text | Array<Text>;
  awards ?: Text | Array<Text>;
  brand ?: Brand | Array<Brand> | Organization | Array<Organization>
  contactPoint ?: ContactPoint | Array<ContactPoint>;
  contactPoints ?: ContactPoint | Array<ContactPoint>;
  correctionsPolicy ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  department ?: Organization | Array<Organization>;
  dissolutionDate ?: Date | Array<Date>;
  diversityPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  diversityStaffingReport ?: Article | Array<Article> | URL | Array<URL>
  duns ?: Text | Array<Text>;
  email ?: Text | Array<Text>;
  employee ?: Person | Array<Person>;
  employees ?: Person | Array<Person>;
  ethicsPolicy ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  event ?: Event | Array<Event>;
  events ?: Event | Array<Event>;
  faxNumber ?: Text | Array<Text>;
  founder ?: Person | Array<Person>;
  founders ?: Person | Array<Person>;
  foundingDate ?: Date | Array<Date>;
  foundingLocation ?: Place | Array<Place>;
  funder ?: Organization | Array<Organization> | Person | Array<Person>
  globalLocationNumber ?: Text | Array<Text>;
  hasCredential ?: EducationalOccupationalCredential | Array<EducationalOccupationalCredential>;
  hasMerchantReturnPolicy ?: MerchantReturnPolicy | Array<MerchantReturnPolicy>;
  hasOfferCatalog ?: OfferCatalog | Array<OfferCatalog>;
  hasPOS ?: Place | Array<Place>;
  interactionStatistic ?: InteractionCounter | Array<InteractionCounter>;
  isicV4 ?: Text | Array<Text>;
  knowsAbout ?: Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  knowsLanguage ?: Text | Array<Text> | Language | Array<Language>
  legalName ?: Text | Array<Text>;
  leiCode ?: Text | Array<Text>;
  location ?: Place | Array<Place> | Text | Array<Text> | VirtualLocation | Array<VirtualLocation> | PostalAddress | Array<PostalAddress>
  logo ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  makesOffer ?: Offer | Array<Offer>;
  member ?: Organization | Array<Organization> | Person | Array<Person>
  memberOf ?: ProgramMembership | Array<ProgramMembership> | Organization | Array<Organization>
  members ?: Person | Array<Person> | Organization | Array<Organization>
  naics ?: Text | Array<Text>;
  nonprofitStatus ?: NonprofitType | Array<NonprofitType>;
  numberOfEmployees ?: QuantitativeValue | Array<QuantitativeValue>;
  ownershipFundingInfo ?: Text | Array<Text> | URL | Array<URL> | CreativeWork | Array<CreativeWork> | AboutPage | Array<AboutPage>
  owns ?: OwnershipInfo | Array<OwnershipInfo> | Product | Array<Product>
  parentOrganization ?: Organization | Array<Organization>;
  publishingPrinciples ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  review ?: Review | Array<Review>;
  reviews ?: Review | Array<Review>;
  seeks ?: Demand | Array<Demand>;
  serviceArea ?: Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  slogan ?: Text | Array<Text>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
  subOrganization ?: Organization | Array<Organization>;
  taxID ?: Text | Array<Text>;
  telephone ?: Text | Array<Text>;
  unnamedSourcesPolicy ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  vatID ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/OrganizationRole
*
* @remarks
* A subclass of Role used to describe roles within organizations.
*
**/
export interface OrganizationRole extends Role {
  numberedPosition ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/OrganizeAction
*
* @remarks
* The act of manipulating/administering/supervising/controlling one or more objects.
*
**/
export interface OrganizeAction extends Action {
}

/**
*
* @see @link https://schema.org/OutletStore
*
* @remarks
* An outlet store.
*
**/
export interface OutletStore extends Store {
}

/**
*
* @see @link https://schema.org/OwnershipInfo
*
* @remarks
* A structured value providing information about when a certain organization or person owned a certain product.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface OwnershipInfo extends StructuredValue {
  acquiredFrom ?: Organization | Array<Organization> | Person | Array<Person>
  ownedFrom ?: DateTime | Array<DateTime>;
  ownedThrough ?: DateTime | Array<DateTime>;
  typeOfGood ?: Service | Array<Service> | Product | Array<Product>
}

/**
*
* @see @link https://schema.org/PaintAction
*
* @remarks
* The act of producing a painting, typically with paint and canvas as instruments.
*
**/
export interface PaintAction extends CreateAction {
}

/**
*
* @see @link https://schema.org/Painting
*
* @remarks
* A painting.
*
**/
export interface Painting extends CreativeWork {
}

/**
*
* @see @link https://schema.org/PalliativeProcedure
*
* @remarks
* A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PalliativeProcedure extends MedicalTherapy, MedicalProcedure {
}

/**
*
* @see @link https://schema.org/ParcelDelivery
*
* @remarks
* The delivery of a parcel either via the postal service or a commercial service.
*
**/
export interface ParcelDelivery extends Intangible {
  carrier ?: Organization | Array<Organization>;
  deliveryAddress ?: PostalAddress | Array<PostalAddress>;
  deliveryStatus ?: DeliveryEvent | Array<DeliveryEvent>;
  expectedArrivalFrom ?: Date | Array<Date> | DateTime | Array<DateTime>
  expectedArrivalUntil ?: Date | Array<Date> | DateTime | Array<DateTime>
  hasDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  itemShipped ?: Product | Array<Product>;
  originAddress ?: PostalAddress | Array<PostalAddress>;
  partOfOrder ?: Order | Array<Order>;
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  trackingNumber ?: Text | Array<Text>;
  trackingUrl ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/ParentAudience
*
* @remarks
* A set of characteristics describing parents, who can be interested in viewing some content.
*
**/
export interface ParentAudience extends PeopleAudience {
  childMaxAge ?: Number | Array<Number>;
  childMinAge ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/Park
*
* @remarks
* A park.
*
**/
export interface Park extends CivicStructure {
}

/**
*
* @see @link https://schema.org/ParkingFacility
*
* @remarks
* A parking lot or other parking facility.
*
**/
export interface ParkingFacility extends CivicStructure {
}

/**
*
* @see @link https://schema.org/PathologyTest
*
* @remarks
* A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PathologyTest extends MedicalTest {
  tissueSample ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Patient
*
* @remarks
* A patient is any person recipient of health care services.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Patient extends MedicalAudience, Person {
  diagnosis ?: MedicalCondition | Array<MedicalCondition>;
  drug ?: Drug | Array<Drug>;
  healthCondition ?: MedicalCondition | Array<MedicalCondition>;
}

/**
*
* @see @link https://schema.org/PawnShop
*
* @remarks
* A shop that will buy, or lend money against the security of, personal possessions.
*
**/
export interface PawnShop extends Store {
}

/**
*
* @see @link https://schema.org/PayAction
*
* @remarks
* An agent pays a price to a participant.
*
**/
export interface PayAction extends TradeAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/PaymentCard
*
* @remarks
* A payment method using a credit, debit, store or other card to associate the payment with an account.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface PaymentCard extends PaymentMethod, FinancialProduct {
  cashBack ?: Number | Array<Number> | Boolean | Array<Boolean>
  contactlessPayment ?: Boolean | Array<Boolean>;
  floorLimit ?: MonetaryAmount | Array<MonetaryAmount>;
  monthlyMinimumRepaymentAmount ?: MonetaryAmount | Array<MonetaryAmount> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/PaymentChargeSpecification
*
* @remarks
* The costs of settling the payment using a particular payment method.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface PaymentChargeSpecification extends PriceSpecification {
  appliesToDeliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  appliesToPaymentMethod ?: PaymentMethod | Array<PaymentMethod>;
}

/**
*
* @see @link https://schema.org/PaymentMethod
*
* @remarks
* A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\n* http://purl.org/goodrelations/v1#ByInvoice\n* http://purl.org/goodrelations/v1#Cash\n* http://purl.org/goodrelations/v1#CheckInAdvance\n* http://purl.org/goodrelations/v1#COD\n* http://purl.org/goodrelations/v1#DirectDebit\n* http://purl.org/goodrelations/v1#GoogleCheckout\n* http://purl.org/goodrelations/v1#PayPal\n* http://purl.org/goodrelations/v1#PaySwarm
        
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface PaymentMethod extends Enumeration {
}

/**
*
* @see @link https://schema.org/PaymentService
*
* @remarks
* A Service to transfer funds from a person or organization to a beneficiary person or organization.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface PaymentService extends FinancialProduct {
}

/**
*
* @see @link https://schema.org/PeopleAudience
*
* @remarks
* A set of characteristics belonging to people, e.g. who compose an item's target audience.
*
**/
export interface PeopleAudience extends Audience {
  healthCondition ?: MedicalCondition | Array<MedicalCondition>;
  requiredGender ?: Text | Array<Text>;
  requiredMaxAge ?: Integer | Array<Integer>;
  requiredMinAge ?: Integer | Array<Integer>;
  suggestedAge ?: QuantitativeValue | Array<QuantitativeValue>;
  suggestedGender ?: Text | Array<Text> | GenderType | Array<GenderType>
  suggestedMaxAge ?: Number | Array<Number>;
  suggestedMeasurement ?: QuantitativeValue | Array<QuantitativeValue>;
  suggestedMinAge ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/PerformAction
*
* @remarks
* The act of participating in performance arts.
*
**/
export interface PerformAction extends PlayAction {
  entertainmentBusiness ?: EntertainmentBusiness | Array<EntertainmentBusiness>;
}

/**
*
* @see @link https://schema.org/PerformanceRole
*
* @remarks
* A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
*
**/
export interface PerformanceRole extends Role {
  characterName ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/PerformingArtsTheater
*
* @remarks
* A theater or other performing art center.
*
**/
export interface PerformingArtsTheater extends CivicStructure {
}

/**
*
* @see @link https://schema.org/PerformingGroup
*
* @remarks
* A performance group, such as a band, an orchestra, or a circus.
*
**/
export interface PerformingGroup extends Organization {
}

/**
*
* @see @link https://schema.org/Periodical
*
* @remarks
* A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex
*
**/
export interface Periodical extends CreativeWorkSeries {
}

/**
*
* @see @link https://schema.org/Permit
*
* @remarks
* A permit issued by an organization, e.g. a parking pass.
*
**/
export interface Permit extends Intangible {
  issuedBy ?: Organization | Array<Organization>;
  issuedThrough ?: Service | Array<Service>;
  permitAudience ?: Audience | Array<Audience>;
  validFor ?: Duration | Array<Duration>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validIn ?: AdministrativeArea | Array<AdministrativeArea>;
  validUntil ?: Date | Array<Date>;
}

/**
*
* @see @link https://schema.org/Person
*
* @remarks
* A person (alive, dead, undead, or fictional).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface Person extends Thing {
  additionalName ?: Text | Array<Text>;
  address ?: Text | Array<Text> | PostalAddress | Array<PostalAddress>
  affiliation ?: Organization | Array<Organization>;
  alumniOf ?: EducationalOrganization | Array<EducationalOrganization> | Organization | Array<Organization>
  award ?: Text | Array<Text>;
  awards ?: Text | Array<Text>;
  birthDate ?: Date | Array<Date>;
  birthPlace ?: Place | Array<Place>;
  brand ?: Brand | Array<Brand> | Organization | Array<Organization>
  callSign ?: Text | Array<Text>;
  children ?: Person | Array<Person>;
  colleague ?: Person | Array<Person> | URL | Array<URL>
  colleagues ?: Person | Array<Person>;
  contactPoint ?: ContactPoint | Array<ContactPoint>;
  contactPoints ?: ContactPoint | Array<ContactPoint>;
  deathDate ?: Date | Array<Date>;
  deathPlace ?: Place | Array<Place>;
  duns ?: Text | Array<Text>;
  email ?: Text | Array<Text>;
  familyName ?: Text | Array<Text>;
  faxNumber ?: Text | Array<Text>;
  follows ?: Person | Array<Person>;
  funder ?: Organization | Array<Organization> | Person | Array<Person>
  gender ?: GenderType | Array<GenderType> | Text | Array<Text>
  givenName ?: Text | Array<Text>;
  globalLocationNumber ?: Text | Array<Text>;
  hasCredential ?: EducationalOccupationalCredential | Array<EducationalOccupationalCredential>;
  hasOccupation ?: Occupation | Array<Occupation>;
  hasOfferCatalog ?: OfferCatalog | Array<OfferCatalog>;
  hasPOS ?: Place | Array<Place>;
  height ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
  homeLocation ?: Place | Array<Place> | ContactPoint | Array<ContactPoint>
  honorificPrefix ?: Text | Array<Text>;
  honorificSuffix ?: Text | Array<Text>;
  interactionStatistic ?: InteractionCounter | Array<InteractionCounter>;
  isicV4 ?: Text | Array<Text>;
  jobTitle ?: DefinedTerm | Array<DefinedTerm> | Text | Array<Text>
  knows ?: Person | Array<Person>;
  knowsAbout ?: Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  knowsLanguage ?: Text | Array<Text> | Language | Array<Language>
  makesOffer ?: Offer | Array<Offer>;
  memberOf ?: ProgramMembership | Array<ProgramMembership> | Organization | Array<Organization>
  naics ?: Text | Array<Text>;
  nationality ?: Country | Array<Country>;
  netWorth ?: PriceSpecification | Array<PriceSpecification> | MonetaryAmount | Array<MonetaryAmount>
  owns ?: OwnershipInfo | Array<OwnershipInfo> | Product | Array<Product>
  parent ?: Person | Array<Person>;
  parents ?: Person | Array<Person>;
  performerIn ?: Event | Array<Event>;
  publishingPrinciples ?: URL | Array<URL> | CreativeWork | Array<CreativeWork>
  relatedTo ?: Person | Array<Person>;
  seeks ?: Demand | Array<Demand>;
  sibling ?: Person | Array<Person>;
  siblings ?: Person | Array<Person>;
  sponsor ?: Person | Array<Person> | Organization | Array<Organization>
  spouse ?: Person | Array<Person>;
  taxID ?: Text | Array<Text>;
  telephone ?: Text | Array<Text>;
  vatID ?: Text | Array<Text>;
  weight ?: QuantitativeValue | Array<QuantitativeValue>;
  workLocation ?: ContactPoint | Array<ContactPoint> | Place | Array<Place>
  worksFor ?: Organization | Array<Organization>;
}

/**
*
* @see @link https://schema.org/PetStore
*
* @remarks
* A pet store.
*
**/
export interface PetStore extends Store {
}

/**
*
* @see @link https://schema.org/Pharmacy
*
* @remarks
* A pharmacy or drugstore.
*
**/
export interface Pharmacy extends MedicalOrganization, MedicalBusiness {
}

/**
*
* @see @link https://schema.org/Photograph
*
* @remarks
* A photograph.
*
**/
export interface Photograph extends CreativeWork {
}

/**
*
* @see @link https://schema.org/PhotographAction
*
* @remarks
* The act of capturing still images of objects using a camera.
*
**/
export interface PhotographAction extends CreateAction {
}

/**
*
* @see @link https://schema.org/PhysicalActivity
*
* @remarks
* Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PhysicalActivity extends LifestyleModification {
  associatedAnatomy ?: AnatomicalStructure | Array<AnatomicalStructure> | AnatomicalSystem | Array<AnatomicalSystem> | SuperficialAnatomy | Array<SuperficialAnatomy>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  epidemiology ?: Text | Array<Text>;
  pathophysiology ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/PhysicalTherapy
*
* @remarks
* A process of progressive physical care and rehabilitation aimed at improving a health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PhysicalTherapy extends MedicalTherapy {
}

/**
*
* @see @link https://schema.org/Physician
*
* @remarks
* A doctor's office.
*
**/
export interface Physician extends MedicalBusiness, MedicalOrganization {
  availableService ?: MedicalTest | Array<MedicalTest> | MedicalTherapy | Array<MedicalTherapy> | MedicalProcedure | Array<MedicalProcedure>
  hospitalAffiliation ?: Hospital | Array<Hospital>;
  medicalSpecialty ?: MedicalSpecialty | Array<MedicalSpecialty>;
}

/**
*
* @see @link https://schema.org/Place
*
* @remarks
* Entities that have a somewhat fixed, physical extension.
*
**/
export interface Place extends Thing {
  additionalProperty ?: PropertyValue | Array<PropertyValue>;
  address ?: Text | Array<Text> | PostalAddress | Array<PostalAddress>
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  amenityFeature ?: LocationFeatureSpecification | Array<LocationFeatureSpecification>;
  branchCode ?: Text | Array<Text>;
  containedIn ?: Place | Array<Place>;
  containedInPlace ?: Place | Array<Place>;
  containsPlace ?: Place | Array<Place>;
  event ?: Event | Array<Event>;
  events ?: Event | Array<Event>;
  faxNumber ?: Text | Array<Text>;
  geo ?: GeoCoordinates | Array<GeoCoordinates> | GeoShape | Array<GeoShape>
  geoContains ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCoveredBy ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCovers ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoCrosses ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoDisjoint ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoEquals ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoIntersects ?: GeospatialGeometry | Array<GeospatialGeometry> | Place | Array<Place>
  geoOverlaps ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoTouches ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  geoWithin ?: Place | Array<Place> | GeospatialGeometry | Array<GeospatialGeometry>
  globalLocationNumber ?: Text | Array<Text>;
  hasDriveThroughService ?: Boolean | Array<Boolean>;
  hasMap ?: URL | Array<URL> | Map | Array<Map>
  isAccessibleForFree ?: Boolean | Array<Boolean>;
  isicV4 ?: Text | Array<Text>;
  latitude ?: Text | Array<Text> | Number | Array<Number>
  logo ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  longitude ?: Text | Array<Text> | Number | Array<Number>
  map ?: URL | Array<URL>;
  maps ?: URL | Array<URL>;
  maximumAttendeeCapacity ?: Integer | Array<Integer>;
  openingHoursSpecification ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  photo ?: Photograph | Array<Photograph> | ImageObject | Array<ImageObject>
  photos ?: Photograph | Array<Photograph> | ImageObject | Array<ImageObject>
  publicAccess ?: Boolean | Array<Boolean>;
  review ?: Review | Array<Review>;
  reviews ?: Review | Array<Review>;
  slogan ?: Text | Array<Text>;
  smokingAllowed ?: Boolean | Array<Boolean>;
  specialOpeningHoursSpecification ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  telephone ?: Text | Array<Text>;
  tourBookingPage ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/PlaceOfWorship
*
* @remarks
* Place of worship, such as a church, synagogue, or mosque.
*
**/
export interface PlaceOfWorship extends CivicStructure {
}

/**
*
* @see @link https://schema.org/PlanAction
*
* @remarks
* The act of planning the execution of an event/task/action/reservation/plan to a future date.
*
**/
export interface PlanAction extends OrganizeAction {
  scheduledTime ?: DateTime | Array<DateTime>;
}

/**
*
* @see @link https://schema.org/Play
*
* @remarks
* A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note the peformance of a Play would be a [[TheaterEvent]] - the *Play* being the [[workPerformed]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1816
*
**/
export interface Play extends CreativeWork {
}

/**
*
* @see @link https://schema.org/PlayAction
*
* @remarks
* The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
*
**/
export interface PlayAction extends Action {
  audience ?: Audience | Array<Audience>;
  event ?: Event | Array<Event>;
}

/**
*
* @see @link https://schema.org/Playground
*
* @remarks
* A playground.
*
**/
export interface Playground extends CivicStructure {
}

/**
*
* @see @link https://schema.org/Plumber
*
* @remarks
* A plumbing service.
*
**/
export interface Plumber extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/PodcastEpisode
*
* @remarks
* A single episode of a podcast series.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/373
*
**/
export interface PodcastEpisode extends Episode {
}

/**
*
* @see @link https://schema.org/PodcastSeason
*
* @remarks
* A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/373
*
**/
export interface PodcastSeason extends CreativeWorkSeason {
}

/**
*
* @see @link https://schema.org/PodcastSeries
*
* @remarks
* A podcast is an episodic series of digital audio or video files which a user can download and listen to.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/373
*
**/
export interface PodcastSeries extends CreativeWorkSeries {
  webFeed ?: URL | Array<URL> | DataFeed | Array<DataFeed>
}

/**
*
* @see @link https://schema.org/PoliceStation
*
* @remarks
* A police station.
*
**/
export interface PoliceStation extends EmergencyService, CivicStructure {
}

/**
*
* @see @link https://schema.org/Pond
*
* @remarks
* A pond.
*
**/
export interface Pond extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/PostalAddress
*
* @remarks
* The mailing address.
*
**/
export interface PostalAddress extends ContactPoint {
  addressCountry ?: Text | Array<Text> | Country | Array<Country>
  addressLocality ?: Text | Array<Text>;
  addressRegion ?: Text | Array<Text>;
  postalCode ?: Text | Array<Text>;
  postOfficeBoxNumber ?: Text | Array<Text>;
  streetAddress ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/PostalCodeRangeSpecification
*
* @remarks
* Indicates a range of postalcodes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface PostalCodeRangeSpecification extends StructuredValue {
  postalCodeBegin ?: Text | Array<Text>;
  postalCodeEnd ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Poster
*
* @remarks
* A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1448
*
**/
export interface Poster extends CreativeWork {
}

/**
*
* @see @link https://schema.org/PostOffice
*
* @remarks
* A post office.
*
**/
export interface PostOffice extends GovernmentOffice {
}

/**
*
* @see @link https://schema.org/PreOrderAction
*
* @remarks
* An agent orders a (not yet released) object/product/service to be delivered/sent.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1125
*
**/
export interface PreOrderAction extends TradeAction {
}

/**
*
* @see @link https://schema.org/PrependAction
*
* @remarks
* The act of inserting at the beginning if an ordered collection.
*
**/
export interface PrependAction extends InsertAction {
}

/**
*
* @see @link https://schema.org/Preschool
*
* @remarks
* A preschool.
*
**/
export interface Preschool extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/PresentationDigitalDocument
*
* @remarks
* A file containing slides or used for a presentation.
*
**/
export interface PresentationDigitalDocument extends DigitalDocument {
}

/**
*
* @see @link https://schema.org/PreventionIndication
*
* @remarks
* An indication for preventing an underlying condition, symptom, etc.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PreventionIndication extends MedicalIndication {
}

/**
*
* @see @link https://schema.org/PriceSpecification
*
* @remarks
* A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface PriceSpecification extends StructuredValue {
  eligibleQuantity ?: QuantitativeValue | Array<QuantitativeValue>;
  eligibleTransactionVolume ?: PriceSpecification | Array<PriceSpecification>;
  maxPrice ?: Number | Array<Number>;
  minPrice ?: Number | Array<Number>;
  price ?: Number | Array<Number> | Text | Array<Text>
  priceCurrency ?: Text | Array<Text>;
  validFrom ?: DateTime | Array<DateTime> | Date | Array<Date>
  validThrough ?: DateTime | Array<DateTime> | Date | Array<Date>
  valueAddedTaxIncluded ?: Boolean | Array<Boolean>;
}

/**
*
* @see @link https://schema.org/Product
*
* @remarks
* Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms
*
**/
export interface Product extends Thing {
  additionalProperty ?: PropertyValue | Array<PropertyValue>;
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  audience ?: Audience | Array<Audience>;
  award ?: Text | Array<Text>;
  awards ?: Text | Array<Text>;
  brand ?: Brand | Array<Brand> | Organization | Array<Organization>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  color ?: Text | Array<Text>;
  depth ?: Distance | Array<Distance> | QuantitativeValue | Array<QuantitativeValue>
  gtin ?: Text | Array<Text>;
  gtin12 ?: Text | Array<Text>;
  gtin13 ?: Text | Array<Text>;
  gtin14 ?: Text | Array<Text>;
  gtin8 ?: Text | Array<Text>;
  hasEnergyConsumptionDetails ?: EnergyConsumptionDetails | Array<EnergyConsumptionDetails>;
  hasMeasurement ?: QuantitativeValue | Array<QuantitativeValue>;
  hasMerchantReturnPolicy ?: MerchantReturnPolicy | Array<MerchantReturnPolicy>;
  height ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
  inProductGroupWithID ?: Text | Array<Text>;
  isAccessoryOrSparePartFor ?: Product | Array<Product>;
  isConsumableFor ?: Product | Array<Product>;
  isRelatedTo ?: Product | Array<Product> | Service | Array<Service>
  isSimilarTo ?: Product | Array<Product> | Service | Array<Service>
  isVariantOf ?: ProductGroup | Array<ProductGroup> | ProductModel | Array<ProductModel>
  itemCondition ?: OfferItemCondition | Array<OfferItemCondition>;
  logo ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  manufacturer ?: Organization | Array<Organization>;
  material ?: Product | Array<Product> | Text | Array<Text> | URL | Array<URL>
  model ?: ProductModel | Array<ProductModel> | Text | Array<Text>
  mpn ?: Text | Array<Text>;
  nsn ?: Text | Array<Text>;
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  pattern ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
  productID ?: Text | Array<Text>;
  productionDate ?: Date | Array<Date>;
  purchaseDate ?: Date | Array<Date>;
  releaseDate ?: Date | Array<Date>;
  review ?: Review | Array<Review>;
  reviews ?: Review | Array<Review>;
  size ?: DefinedTerm | Array<DefinedTerm> | SizeSpecification | Array<SizeSpecification> | QuantitativeValue | Array<QuantitativeValue> | Text | Array<Text>
  sku ?: Text | Array<Text>;
  slogan ?: Text | Array<Text>;
  weight ?: QuantitativeValue | Array<QuantitativeValue>;
  width ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
}

/**
*
* @see @link https://schema.org/ProductCollection
*
* @remarks
* A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2597
*
**/
export interface ProductCollection extends Collection, Product {
  includesObject ?: TypeAndQuantityNode | Array<TypeAndQuantityNode>;
}

/**
*
* @see @link https://schema.org/ProductGroup
*
* @remarks
* A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.

While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]]. 
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2597
*
**/
export interface ProductGroup extends Product {
  hasVariant ?: Product | Array<Product>;
  productGroupID ?: Text | Array<Text>;
  variesBy ?: Text | Array<Text> | DefinedTerm | Array<DefinedTerm>
}

/**
*
* @see @link https://schema.org/ProductModel
*
* @remarks
* A datasheet or vendor specification of a product (in the sense of a prototypical description).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface ProductModel extends Product {
  isVariantOf ?: ProductGroup | Array<ProductGroup> | ProductModel | Array<ProductModel>
  predecessorOf ?: ProductModel | Array<ProductModel>;
  successorOf ?: ProductModel | Array<ProductModel>;
}

/**
*
* @see @link https://schema.org/ProfessionalService
*
* @remarks
* Original definition: "provider of professional services."\n\nThe general [[ProfessionalService]] type for local businesses was deprecated due to confusion with [[Service]]. For reference, the types that it included were: [[Dentist]],
        [[AccountingService]], [[Attorney]], [[Notary]], as well as types for several kinds of [[HomeAndConstructionBusiness]]: [[Electrician]], [[GeneralContractor]],
        [[HousePainter]], [[Locksmith]], [[Plumber]], [[RoofingContractor]]. [[LegalService]] was introduced as a more inclusive supertype of [[Attorney]].
*
**/
export interface ProfessionalService extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/ProfilePage
*
* @remarks
* Web page type: Profile page.
*
**/
export interface ProfilePage extends WebPage {
}

/**
*
* @see @link https://schema.org/ProgramMembership
*
* @remarks
* Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
*
**/
export interface ProgramMembership extends Intangible {
  hostingOrganization ?: Organization | Array<Organization>;
  member ?: Organization | Array<Organization> | Person | Array<Person>
  members ?: Person | Array<Person> | Organization | Array<Organization>
  membershipNumber ?: Text | Array<Text>;
  membershipPointsEarned ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  programName ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Project
*
* @remarks
* An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.
Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. 
   
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/383
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
*
**/
export interface Project extends Organization {
}

/**
*
* @see @link https://schema.org/PronounceableText
*
* @remarks
* Data type: PronounceableText.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2108
*
**/
export type PronounceableText = Text;

/**
*
* @see @link https://schema.org/Property
*
* @remarks
* A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
*
* 
* Partof: https://meta.schema.org
**/
export interface Property extends Intangible {
  domainIncludes ?: Class | Array<Class>;
  inverseOf ?: Property | Array<Property>;
  rangeIncludes ?: Class | Array<Class>;
}

/**
*
* @see @link https://schema.org/PropertyValue
*
* @remarks
* A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
    
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface PropertyValue extends StructuredValue {
  maxValue ?: Number | Array<Number>;
  measurementTechnique ?: Text | Array<Text> | URL | Array<URL>
  minValue ?: Number | Array<Number>;
  propertyID ?: Text | Array<Text> | URL | Array<URL>
  unitCode ?: Text | Array<Text> | URL | Array<URL>
  unitText ?: Text | Array<Text>;
  value ?: Number | Array<Number> | StructuredValue | Array<StructuredValue> | Boolean | Array<Boolean> | Text | Array<Text>
  valueReference ?: QuantitativeValue | Array<QuantitativeValue> | MeasurementTypeEnumeration | Array<MeasurementTypeEnumeration> | DefinedTerm | Array<DefinedTerm> | Enumeration | Array<Enumeration> | PropertyValue | Array<PropertyValue> | QualitativeValue | Array<QualitativeValue> | Text | Array<Text> | StructuredValue | Array<StructuredValue>
}

/**
*
* @see @link https://schema.org/PropertyValueSpecification
*
* @remarks
* A Property value specification.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass
*
**/
export interface PropertyValueSpecification extends Intangible {
  defaultValue ?: Thing | Array<Thing> | Text | Array<Text>
  maxValue ?: Number | Array<Number>;
  minValue ?: Number | Array<Number>;
  multipleValues ?: Boolean | Array<Boolean>;
  readonlyValue ?: Boolean | Array<Boolean>;
  stepValue ?: Number | Array<Number>;
  valueMaxLength ?: Number | Array<Number>;
  valueMinLength ?: Number | Array<Number>;
  valueName ?: Text | Array<Text>;
  valuePattern ?: Text | Array<Text>;
  valueRequired ?: Boolean | Array<Boolean>;
}

/**
*
* @see @link https://schema.org/PsychologicalTreatment
*
* @remarks
* A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface PsychologicalTreatment extends TherapeuticProcedure {
}

/**
*
* @see @link https://schema.org/PublicationEvent
*
* @remarks
* A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
*
**/
export interface PublicationEvent extends Event {
  free ?: Boolean | Array<Boolean>;
  publishedBy ?: Person | Array<Person> | Organization | Array<Organization>
  publishedOn ?: BroadcastService | Array<BroadcastService>;
}

/**
*
* @see @link https://schema.org/PublicationIssue
*
* @remarks
* A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex
*
**/
export interface PublicationIssue extends CreativeWork {
  issueNumber ?: Integer | Array<Integer> | Text | Array<Text>
  pageEnd ?: Text | Array<Text> | Integer | Array<Integer>
  pageStart ?: Text | Array<Text> | Integer | Array<Integer>
  pagination ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/PublicationVolume
*
* @remarks
* A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex
*
**/
export interface PublicationVolume extends CreativeWork {
  pageEnd ?: Text | Array<Text> | Integer | Array<Integer>
  pageStart ?: Text | Array<Text> | Integer | Array<Integer>
  pagination ?: Text | Array<Text>;
  volumeNumber ?: Text | Array<Text> | Integer | Array<Integer>
}

/**
*
* @see @link https://schema.org/PublicSwimmingPool
*
* @remarks
* A public swimming pool.
*
**/
export interface PublicSwimmingPool extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/PublicToilet
*
* @remarks
* A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1624
*
**/
export interface PublicToilet extends CivicStructure {
}

/**
*
* @see @link https://schema.org/QAPage
*
* @remarks
* A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
*
**/
export interface QAPage extends WebPage {
}

/**
*
* @see @link https://schema.org/QualitativeValue
*
* @remarks
* A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface QualitativeValue extends Enumeration {
  additionalProperty ?: PropertyValue | Array<PropertyValue>;
  equal ?: QualitativeValue | Array<QualitativeValue>;
  greater ?: QualitativeValue | Array<QualitativeValue>;
  greaterOrEqual ?: QualitativeValue | Array<QualitativeValue>;
  lesser ?: QualitativeValue | Array<QualitativeValue>;
  lesserOrEqual ?: QualitativeValue | Array<QualitativeValue>;
  nonEqual ?: QualitativeValue | Array<QualitativeValue>;
  valueReference ?: QuantitativeValue | Array<QuantitativeValue> | MeasurementTypeEnumeration | Array<MeasurementTypeEnumeration> | DefinedTerm | Array<DefinedTerm> | Enumeration | Array<Enumeration> | PropertyValue | Array<PropertyValue> | QualitativeValue | Array<QualitativeValue> | Text | Array<Text> | StructuredValue | Array<StructuredValue>
}

/**
*
* @see @link https://schema.org/QuantitativeValue
*
* @remarks
*  A point value or interval for product characteristics and other purposes.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface QuantitativeValue extends StructuredValue {
  additionalProperty ?: PropertyValue | Array<PropertyValue>;
  maxValue ?: Number | Array<Number>;
  minValue ?: Number | Array<Number>;
  unitCode ?: Text | Array<Text> | URL | Array<URL>
  unitText ?: Text | Array<Text>;
  value ?: Number | Array<Number> | StructuredValue | Array<StructuredValue> | Boolean | Array<Boolean> | Text | Array<Text>
  valueReference ?: QuantitativeValue | Array<QuantitativeValue> | MeasurementTypeEnumeration | Array<MeasurementTypeEnumeration> | DefinedTerm | Array<DefinedTerm> | Enumeration | Array<Enumeration> | PropertyValue | Array<PropertyValue> | QualitativeValue | Array<QualitativeValue> | Text | Array<Text> | StructuredValue | Array<StructuredValue>
}

/**
*
* @see @link https://schema.org/QuantitativeValueDistribution
*
* @remarks
* A statistical distribution of values.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1698
*
**/
export interface QuantitativeValueDistribution extends StructuredValue {
  duration ?: Duration | Array<Duration>;
  median ?: Number | Array<Number>;
  percentile10 ?: Number | Array<Number>;
  percentile25 ?: Number | Array<Number>;
  percentile75 ?: Number | Array<Number>;
  percentile90 ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/Quantity
*
* @remarks
* Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.
*
**/
export interface Quantity extends Intangible {
}

/**
*
* @see @link https://schema.org/Question
*
* @remarks
* A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange
*
**/
export interface Question extends Comment {
  acceptedAnswer ?: Answer | Array<Answer> | ItemList | Array<ItemList>
  answerCount ?: Integer | Array<Integer>;
  eduQuestionType ?: Text | Array<Text>;
  suggestedAnswer ?: Answer | Array<Answer> | ItemList | Array<ItemList>
}

/**
*
* @see @link https://schema.org/Quiz
*
* @remarks
* Quiz: A test of knowledge, skills and abilities.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2611
*
**/
export interface Quiz extends LearningResource {
}

/**
*
* @see @link https://schema.org/Quotation
*
* @remarks
* A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/271
*
**/
export interface Quotation extends CreativeWork {
  spokenByCharacter ?: Organization | Array<Organization> | Person | Array<Person>
}

/**
*
* @see @link https://schema.org/QuoteAction
*
* @remarks
* An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
*
**/
export interface QuoteAction extends TradeAction {
}

/**
*
* @see @link https://schema.org/RadiationTherapy
*
* @remarks
* A process of care using radiation aimed at improving a health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface RadiationTherapy extends MedicalTherapy {
}

/**
*
* @see @link https://schema.org/RadioBroadcastService
*
* @remarks
* A delivery service through which radio content is provided via broadcast over the air or online.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2109
*
**/
export interface RadioBroadcastService extends BroadcastService {
}

/**
*
* @see @link https://schema.org/RadioChannel
*
* @remarks
* A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
*
**/
export interface RadioChannel extends BroadcastChannel {
}

/**
*
* @see @link https://schema.org/RadioClip
*
* @remarks
* A short radio program or a segment/part of a radio program.
*
**/
export interface RadioClip extends Clip {
}

/**
*
* @see @link https://schema.org/RadioEpisode
*
* @remarks
* A radio episode which can be part of a series or season.
*
**/
export interface RadioEpisode extends Episode {
}

/**
*
* @see @link https://schema.org/RadioSeason
*
* @remarks
* Season dedicated to radio broadcast and associated online delivery.
*
**/
export interface RadioSeason extends CreativeWorkSeason {
}

/**
*
* @see @link https://schema.org/RadioSeries
*
* @remarks
* CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
*
**/
export interface RadioSeries extends CreativeWorkSeries {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  containsSeason ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  episode ?: Episode | Array<Episode>;
  episodes ?: Episode | Array<Episode>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  numberOfEpisodes ?: Integer | Array<Integer>;
  numberOfSeasons ?: Integer | Array<Integer>;
  productionCompany ?: Organization | Array<Organization>;
  season ?: CreativeWorkSeason | Array<CreativeWorkSeason> | URL | Array<URL>
  seasons ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/RadioStation
*
* @remarks
* A radio station.
*
**/
export interface RadioStation extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/Rating
*
* @remarks
* A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
*
**/
export interface Rating extends Intangible {
  author ?: Person | Array<Person> | Organization | Array<Organization>
  bestRating ?: Text | Array<Text> | Number | Array<Number>
  ratingExplanation ?: Text | Array<Text>;
  ratingValue ?: Number | Array<Number> | Text | Array<Text>
  reviewAspect ?: Text | Array<Text>;
  worstRating ?: Text | Array<Text> | Number | Array<Number>
}

/**
*
* @see @link https://schema.org/ReactAction
*
* @remarks
* The act of responding instinctively and emotionally to an object, expressing a sentiment.
*
**/
export interface ReactAction extends AssessAction {
}

/**
*
* @see @link https://schema.org/ReadAction
*
* @remarks
* The act of consuming written content.
*
**/
export interface ReadAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/RealEstateAgent
*
* @remarks
* A real-estate agent.
*
**/
export interface RealEstateAgent extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/RealEstateListing
*
* @remarks
* A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
  The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2348
*
**/
export interface RealEstateListing extends WebPage {
  datePosted ?: Date | Array<Date> | DateTime | Array<DateTime>
  leaseLength ?: Duration | Array<Duration> | QuantitativeValue | Array<QuantitativeValue>
}

/**
*
* @see @link https://schema.org/ReceiveAction
*
* @remarks
* The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
*
**/
export interface ReceiveAction extends TransferAction {
  deliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  sender ?: Person | Array<Person> | Audience | Array<Audience> | Organization | Array<Organization>
}

/**
*
* @see @link https://schema.org/Recipe
*
* @remarks
* A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
*
**/
export interface Recipe extends HowTo {
  cookingMethod ?: Text | Array<Text>;
  cookTime ?: Duration | Array<Duration>;
  ingredients ?: Text | Array<Text>;
  nutrition ?: NutritionInformation | Array<NutritionInformation>;
  recipeCategory ?: Text | Array<Text>;
  recipeCuisine ?: Text | Array<Text>;
  recipeIngredient ?: Text | Array<Text>;
  recipeInstructions ?: ItemList | Array<ItemList> | CreativeWork | Array<CreativeWork> | Text | Array<Text>
  recipeYield ?: QuantitativeValue | Array<QuantitativeValue> | Text | Array<Text>
  suitableForDiet ?: RestrictedDiet | Array<RestrictedDiet>;
}

/**
*
* @see @link https://schema.org/Recommendation
*
* @remarks
* [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2405
*
**/
export interface Recommendation extends Review {
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
}

/**
*
* @see @link https://schema.org/RecommendedDoseSchedule
*
* @remarks
* A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface RecommendedDoseSchedule extends DoseSchedule {
}

/**
*
* @see @link https://schema.org/RecyclingCenter
*
* @remarks
* A recycling center.
*
**/
export interface RecyclingCenter extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/RegisterAction
*
* @remarks
* The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
*
**/
export interface RegisterAction extends InteractAction {
}

/**
*
* @see @link https://schema.org/RejectAction
*
* @remarks
* The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
*
**/
export interface RejectAction extends AllocateAction {
}

/**
*
* @see @link https://schema.org/RentAction
*
* @remarks
* The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
*
**/
export interface RentAction extends TradeAction {
  landlord ?: Person | Array<Person> | Organization | Array<Organization>
  realEstateAgent ?: RealEstateAgent | Array<RealEstateAgent>;
}

/**
*
* @see @link https://schema.org/RentalCarReservation
*
* @remarks
* A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
*
**/
export interface RentalCarReservation extends Reservation {
  dropoffLocation ?: Place | Array<Place>;
  dropoffTime ?: DateTime | Array<DateTime>;
  pickupLocation ?: Place | Array<Place>;
  pickupTime ?: DateTime | Array<DateTime>;
}

/**
*
* @see @link https://schema.org/RepaymentSpecification
*
* @remarks
* A structured value representing repayment.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1253
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
*
**/
export interface RepaymentSpecification extends StructuredValue {
  downPayment ?: Number | Array<Number> | MonetaryAmount | Array<MonetaryAmount>
  earlyPrepaymentPenalty ?: MonetaryAmount | Array<MonetaryAmount>;
  loanPaymentAmount ?: MonetaryAmount | Array<MonetaryAmount>;
  loanPaymentFrequency ?: Number | Array<Number>;
  numberOfLoanPayments ?: Number | Array<Number>;
}

/**
*
* @see @link https://schema.org/ReplaceAction
*
* @remarks
* The act of editing a recipient by replacing an old object with a new object.
*
**/
export interface ReplaceAction extends UpdateAction {
  replacee ?: Thing | Array<Thing>;
  replacer ?: Thing | Array<Thing>;
}

/**
*
* @see @link https://schema.org/ReplyAction
*
* @remarks
* The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
*
**/
export interface ReplyAction extends CommunicateAction {
  resultComment ?: Comment | Array<Comment>;
}

/**
*
* @see @link https://schema.org/Report
*
* @remarks
* A Report generated by governmental or non-governmental organization.
*
**/
export interface Report extends Article {
  reportNumber ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/ReportageNewsArticle
*
* @remarks
* The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing
 news articles which are the result of journalistic news reporting conventions.

In practice many news publishers produce a wide variety of article types, many of which might be considered a [[NewsArticle]] but not a [[ReportageNewsArticle]]. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.

The [[ReportageNewsArticle]] type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources.  This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda).  News reports in the [[ReportageNewsArticle]] sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.

A [[ReportageNewsArticle]] which goes deeper into analysis can also be marked with an additional type of [[AnalysisNewsArticle]].

*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
*
**/
export interface ReportageNewsArticle extends NewsArticle {
}

/**
*
* @see @link https://schema.org/ReportedDoseSchedule
*
* @remarks
* A patient-reported or observed dosing schedule for a drug or supplement.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface ReportedDoseSchedule extends DoseSchedule {
}

/**
*
* @see @link https://schema.org/Researcher
*
* @remarks
* Researchers.
*
**/
export interface Researcher extends Audience {
}

/**
*
* @see @link https://schema.org/ResearchProject
*
* @remarks
* A Research project.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/383
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab
*
**/
export interface ResearchProject extends Project {
}

/**
*
* @see @link https://schema.org/Reservation
*
* @remarks
* Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
*
**/
export interface Reservation extends Intangible {
  bookingAgent ?: Person | Array<Person> | Organization | Array<Organization>
  bookingTime ?: DateTime | Array<DateTime>;
  broker ?: Person | Array<Person> | Organization | Array<Organization>
  modifiedTime ?: DateTime | Array<DateTime>;
  priceCurrency ?: Text | Array<Text>;
  programMembershipUsed ?: ProgramMembership | Array<ProgramMembership>;
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  reservationFor ?: Thing | Array<Thing>;
  reservationId ?: Text | Array<Text>;
  reservationStatus ?: ReservationStatusType | Array<ReservationStatusType>;
  reservedTicket ?: Ticket | Array<Ticket>;
  totalPrice ?: Number | Array<Number> | Text | Array<Text> | PriceSpecification | Array<PriceSpecification>
  underName ?: Person | Array<Person> | Organization | Array<Organization>
}

/**
*
* @see @link https://schema.org/ReservationPackage
*
* @remarks
* A group of multiple reservations with common values for all sub-reservations.
*
**/
export interface ReservationPackage extends Reservation {
  subReservation ?: Reservation | Array<Reservation>;
}

/**
*
* @see @link https://schema.org/ReserveAction
*
* @remarks
* Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
*
**/
export interface ReserveAction extends PlanAction {
}

/**
*
* @see @link https://schema.org/Reservoir
*
* @remarks
* A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
*
**/
export interface Reservoir extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/Residence
*
* @remarks
* The place where a person lives.
*
**/
export interface Residence extends Place {
  accommodationFloorPlan ?: FloorPlan | Array<FloorPlan>;
}

/**
*
* @see @link https://schema.org/Resort
*
* @remarks
* A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
    
*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Resort extends LodgingBusiness {
}

/**
*
* @see @link https://schema.org/Restaurant
*
* @remarks
* A restaurant.
*
**/
export interface Restaurant extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/ResumeAction
*
* @remarks
* The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
*
**/
export interface ResumeAction extends ControlAction {
}

/**
*
* @see @link https://schema.org/ReturnAction
*
* @remarks
* The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
*
**/
export interface ReturnAction extends TransferAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/Review
*
* @remarks
* A review of an item - for example, of a restaurant, movie, or store.
*
**/
export interface Review extends CreativeWork {
  itemReviewed ?: Thing | Array<Thing>;
  reviewAspect ?: Text | Array<Text>;
  reviewBody ?: Text | Array<Text>;
  reviewRating ?: Rating | Array<Rating>;
}

/**
*
* @see @link https://schema.org/ReviewAction
*
* @remarks
* The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
*
**/
export interface ReviewAction extends AssessAction {
  resultReview ?: Review | Array<Review>;
}

/**
*
* @see @link https://schema.org/ReviewNewsArticle
*
* @remarks
* A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface ReviewNewsArticle extends NewsArticle, CriticReview {
}

/**
*
* @see @link https://schema.org/RiverBodyOfWater
*
* @remarks
* A river (for example, the broad majestic Shannon).
*
**/
export interface RiverBodyOfWater extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/Role
*
* @remarks
* Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\n\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html).
*
**/
export interface Role extends Intangible {
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  namedPosition ?: URL | Array<URL> | Text | Array<Text>
  roleName ?: URL | Array<URL> | Text | Array<Text>
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
}

/**
*
* @see @link https://schema.org/RoofingContractor
*
* @remarks
* A roofing contractor.
*
**/
export interface RoofingContractor extends HomeAndConstructionBusiness {
}

/**
*
* @see @link https://schema.org/Room
*
* @remarks
* A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Room extends Accommodation {
}

/**
*
* @see @link https://schema.org/RsvpAction
*
* @remarks
* The act of notifying an event organizer as to whether you expect to attend the event.
*
**/
export interface RsvpAction extends InformAction {
  additionalNumberOfGuests ?: Number | Array<Number>;
  comment ?: Comment | Array<Comment>;
  rsvpResponse ?: RsvpResponseType | Array<RsvpResponseType>;
}

/**
*
* @see @link https://schema.org/RVPark
*
* @remarks
* A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.
*
**/
export interface RVPark extends CivicStructure {
}

/**
*
* @see @link https://schema.org/SaleEvent
*
* @remarks
* Event type: Sales event.
*
**/
export interface SaleEvent extends Event {
}

/**
*
* @see @link https://schema.org/SatiricalArticle
*
* @remarks
* An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a [[NewsArticle]]. [[ScholarlyArticle]]s are also sometimes satirized.
*
* 
* Partof: https://pending.schema.org
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP
* @see @link https://github.com/schemaorg/schemaorg/issues/1525
*
**/
export interface SatiricalArticle extends Article {
}

/**
*
* @see @link https://schema.org/Schedule
*
* @remarks
* A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely.
      This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
      have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1457
*
**/
export interface Schedule extends Intangible {
  byDay ?: DayOfWeek | Array<DayOfWeek> | Text | Array<Text>
  byMonth ?: Integer | Array<Integer>;
  byMonthDay ?: Integer | Array<Integer>;
  byMonthWeek ?: Integer | Array<Integer>;
  duration ?: Duration | Array<Duration>;
  endDate ?: Date | Array<Date> | DateTime | Array<DateTime>
  endTime ?: DateTime | Array<DateTime> | Time | Array<Time>
  exceptDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  repeatCount ?: Integer | Array<Integer>;
  repeatFrequency ?: Duration | Array<Duration> | Text | Array<Text>
  scheduleTimezone ?: Text | Array<Text>;
  startDate ?: DateTime | Array<DateTime> | Date | Array<Date>
  startTime ?: DateTime | Array<DateTime> | Time | Array<Time>
}

/**
*
* @see @link https://schema.org/ScheduleAction
*
* @remarks
* Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
*
**/
export interface ScheduleAction extends PlanAction {
}

/**
*
* @see @link https://schema.org/ScholarlyArticle
*
* @remarks
* A scholarly article.
*
**/
export interface ScholarlyArticle extends Article {
}

/**
*
* @see @link https://schema.org/School
*
* @remarks
* A school.
*
**/
export interface School extends EducationalOrganization {
}

/**
*
* @see @link https://schema.org/SchoolDistrict
*
* @remarks
* A School District is an administrative area for the administration of schools.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2500
*
**/
export interface SchoolDistrict extends AdministrativeArea {
}

/**
*
* @see @link https://schema.org/ScreeningEvent
*
* @remarks
* A screening of a movie or other video.
*
**/
export interface ScreeningEvent extends Event {
  subtitleLanguage ?: Text | Array<Text> | Language | Array<Language>
  videoFormat ?: Text | Array<Text>;
  workPresented ?: Movie | Array<Movie>;
}

/**
*
* @see @link https://schema.org/Sculpture
*
* @remarks
* A piece of sculpture.
*
**/
export interface Sculpture extends CreativeWork {
}

/**
*
* @see @link https://schema.org/SeaBodyOfWater
*
* @remarks
* A sea (for example, the Caspian sea).
*
**/
export interface SeaBodyOfWater extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/SearchAction
*
* @remarks
* The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
*
**/
export interface SearchAction extends Action {
  query ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/SearchResultsPage
*
* @remarks
* Web page type: Search results page.
*
**/
export interface SearchResultsPage extends WebPage {
}

/**
*
* @see @link https://schema.org/Season
*
* @remarks
* A media season e.g. tv, radio, video game etc.
*
**/
export interface Season extends CreativeWork {
}

/**
*
* @see @link https://schema.org/Seat
*
* @remarks
* Used to describe a seat, such as a reserved seat in an event reservation.
*
**/
export interface Seat extends Intangible {
  seatingType ?: QualitativeValue | Array<QualitativeValue> | Text | Array<Text>
  seatNumber ?: Text | Array<Text>;
  seatRow ?: Text | Array<Text>;
  seatSection ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/SeekToAction
*
* @remarks
* This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2722
*
**/
export interface SeekToAction extends Action {
}

/**
*
* @see @link https://schema.org/SelfStorage
*
* @remarks
* A self-storage facility.
*
**/
export interface SelfStorage extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/SellAction
*
* @remarks
* The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
*
**/
export interface SellAction extends TradeAction {
  buyer ?: Person | Array<Person>;
  warrantyPromise ?: WarrantyPromise | Array<WarrantyPromise>;
}

/**
*
* @see @link https://schema.org/SendAction
*
* @remarks
* The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
*
**/
export interface SendAction extends TransferAction {
  deliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/Series
*
* @remarks
* A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]].
*
**/
export interface Series extends Intangible {
}

/**
*
* @see @link https://schema.org/Service
*
* @remarks
* A service provided by an organization, e.g. delivery service, print services, etc.
*
**/
export interface Service extends Intangible {
  aggregateRating ?: AggregateRating | Array<AggregateRating>;
  areaServed ?: Text | Array<Text> | Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  audience ?: Audience | Array<Audience>;
  availableChannel ?: ServiceChannel | Array<ServiceChannel>;
  award ?: Text | Array<Text>;
  brand ?: Brand | Array<Brand> | Organization | Array<Organization>
  broker ?: Person | Array<Person> | Organization | Array<Organization>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  hasOfferCatalog ?: OfferCatalog | Array<OfferCatalog>;
  hoursAvailable ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  isRelatedTo ?: Product | Array<Product> | Service | Array<Service>
  isSimilarTo ?: Product | Array<Product> | Service | Array<Service>
  logo ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  produces ?: Thing | Array<Thing>;
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  providerMobility ?: Text | Array<Text>;
  review ?: Review | Array<Review>;
  serviceArea ?: Place | Array<Place> | AdministrativeArea | Array<AdministrativeArea> | GeoShape | Array<GeoShape>
  serviceAudience ?: Audience | Array<Audience>;
  serviceOutput ?: Thing | Array<Thing>;
  serviceType ?: Text | Array<Text> | GovernmentBenefitsType | Array<GovernmentBenefitsType>
  slogan ?: Text | Array<Text>;
  termsOfService ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/ServiceChannel
*
* @remarks
* A means for accessing a service, e.g. a government office location, web site, or phone number.
*
**/
export interface ServiceChannel extends Intangible {
  availableLanguage ?: Language | Array<Language> | Text | Array<Text>
  processingTime ?: Duration | Array<Duration>;
  providesService ?: Service | Array<Service>;
  serviceLocation ?: Place | Array<Place>;
  servicePhone ?: ContactPoint | Array<ContactPoint>;
  servicePostalAddress ?: PostalAddress | Array<PostalAddress>;
  serviceSmsNumber ?: ContactPoint | Array<ContactPoint>;
  serviceUrl ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/ShareAction
*
* @remarks
* The act of distributing content to people for their amusement or edification.
*
**/
export interface ShareAction extends CommunicateAction {
}

/**
*
* @see @link https://schema.org/SheetMusic
*
* @remarks
* Printed music, as opposed to performed or recorded music.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1448
*
**/
export interface SheetMusic extends CreativeWork {
}

/**
*
* @see @link https://schema.org/ShippingDeliveryTime
*
* @remarks
* ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface ShippingDeliveryTime extends StructuredValue {
  businessDays ?: OpeningHoursSpecification | Array<OpeningHoursSpecification>;
  cutoffTime ?: Time | Array<Time>;
  handlingTime ?: QuantitativeValue | Array<QuantitativeValue>;
  transitTime ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/ShippingRateSettings
*
* @remarks
* A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2506
*
**/
export interface ShippingRateSettings extends StructuredValue {
  doesNotShip ?: Boolean | Array<Boolean>;
  freeShippingThreshold ?: DeliveryChargeSpecification | Array<DeliveryChargeSpecification> | MonetaryAmount | Array<MonetaryAmount>
  isUnlabelledFallback ?: Boolean | Array<Boolean>;
  shippingDestination ?: DefinedRegion | Array<DefinedRegion>;
  shippingLabel ?: Text | Array<Text>;
  shippingRate ?: MonetaryAmount | Array<MonetaryAmount>;
}

/**
*
* @see @link https://schema.org/ShoeStore
*
* @remarks
* A shoe store.
*
**/
export interface ShoeStore extends Store {
}

/**
*
* @see @link https://schema.org/ShoppingCenter
*
* @remarks
* A shopping center or mall.
*
**/
export interface ShoppingCenter extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/ShortStory
*
* @remarks
* Short story or tale. A brief work of literature, usually written in narrative prose.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1976
*
**/
export interface ShortStory extends CreativeWork {
}

/**
*
* @see @link https://schema.org/SingleFamilyResidence
*
* @remarks
* Residence type: Single-family home.
*
**/
export interface SingleFamilyResidence extends House {
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  occupancy ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/SiteNavigationElement
*
* @remarks
* A navigation element of the page.
*
**/
export interface SiteNavigationElement extends WebPageElement {
}

/**
*
* @see @link https://schema.org/SizeGroupEnumeration
*
* @remarks
* Enumerates common size groups for various product categories.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export interface SizeGroupEnumeration extends Enumeration {
}

/**
*
* @see @link https://schema.org/SizeSpecification
*
* @remarks
* Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2811
*
**/
export interface SizeSpecification extends QualitativeValue {
  hasMeasurement ?: QuantitativeValue | Array<QuantitativeValue>;
  sizeGroup ?: SizeGroupEnumeration | Array<SizeGroupEnumeration> | Text | Array<Text>
  sizeSystem ?: SizeSystemEnumeration | Array<SizeSystemEnumeration> | Text | Array<Text>
  suggestedAge ?: QuantitativeValue | Array<QuantitativeValue>;
  suggestedGender ?: Text | Array<Text> | GenderType | Array<GenderType>
  suggestedMeasurement ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/SkiResort
*
* @remarks
* A ski resort.
*
**/
export interface SkiResort extends Resort, SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/SocialEvent
*
* @remarks
* Event type: Social event.
*
**/
export interface SocialEvent extends Event {
}

/**
*
* @see @link https://schema.org/SocialMediaPosting
*
* @remarks
* A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
*
**/
export interface SocialMediaPosting extends Article {
  sharedContent ?: CreativeWork | Array<CreativeWork>;
}

/**
*
* @see @link https://schema.org/SoftwareApplication
*
* @remarks
* A software application.
*
**/
export interface SoftwareApplication extends CreativeWork {
  applicationCategory ?: Text | Array<Text> | URL | Array<URL>
  applicationSubCategory ?: Text | Array<Text> | URL | Array<URL>
  applicationSuite ?: Text | Array<Text>;
  availableOnDevice ?: Text | Array<Text>;
  countriesNotSupported ?: Text | Array<Text>;
  countriesSupported ?: Text | Array<Text>;
  device ?: Text | Array<Text>;
  downloadUrl ?: URL | Array<URL>;
  featureList ?: Text | Array<Text> | URL | Array<URL>
  fileSize ?: Text | Array<Text>;
  installUrl ?: URL | Array<URL>;
  memoryRequirements ?: Text | Array<Text> | URL | Array<URL>
  operatingSystem ?: Text | Array<Text>;
  permissions ?: Text | Array<Text>;
  processorRequirements ?: Text | Array<Text>;
  releaseNotes ?: URL | Array<URL> | Text | Array<Text>
  requirements ?: URL | Array<URL> | Text | Array<Text>
  screenshot ?: URL | Array<URL> | ImageObject | Array<ImageObject>
  softwareAddOn ?: SoftwareApplication | Array<SoftwareApplication>;
  softwareHelp ?: CreativeWork | Array<CreativeWork>;
  softwareRequirements ?: URL | Array<URL> | Text | Array<Text>
  softwareVersion ?: Text | Array<Text>;
  storageRequirements ?: Text | Array<Text> | URL | Array<URL>
  supportingData ?: DataFeed | Array<DataFeed>;
}

/**
*
* @see @link https://schema.org/SoftwareSourceCode
*
* @remarks
* Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
*
**/
export interface SoftwareSourceCode extends CreativeWork {
  codeRepository ?: URL | Array<URL>;
  codeSampleType ?: Text | Array<Text>;
  programmingLanguage ?: Text | Array<Text> | ComputerLanguage | Array<ComputerLanguage>
  runtime ?: Text | Array<Text>;
  runtimePlatform ?: Text | Array<Text>;
  sampleType ?: Text | Array<Text>;
  targetProduct ?: SoftwareApplication | Array<SoftwareApplication>;
}

/**
*
* @see @link https://schema.org/SolveMathAction
*
* @remarks
* The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2740
*
**/
export interface SolveMathAction extends Action {
  eduQuestionType ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/SomeProducts
*
* @remarks
* A placeholder for multiple similar products of the same kind.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface SomeProducts extends Product {
  inventoryLevel ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/SpeakableSpecification
*
* @remarks
* A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/1389
*
**/
export interface SpeakableSpecification extends Intangible {
  cssSelector ?: CssSelectorType | Array<CssSelectorType>;
  xpath ?: XPathType | Array<XPathType>;
}

/**
*
* @see @link https://schema.org/SpecialAnnouncement
*
* @remarks
* A SpecialAnnouncement combines a simple date-stamped textual information update
      with contextualized Web links and other structured data.  It represents an information update made by a
      locally-oriented organization, for example schools, pharmacies, healthcare providers,  community groups, police,
      local government.

For work in progress guidelines on Coronavirus-related markup see [this doc](https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit#).

The motivating scenario for SpecialAnnouncement is the [Coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), and the initial vocabulary is oriented to this urgent situation. Schema.org
expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our
usual [Github entry](https://github.com/schemaorg/schemaorg/issues/2490), feedback comments can also be provided in [this document](https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit#).


While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like [CAP](https://en.wikipedia.org/wiki/Common_Alerting_Protocol), although there may be overlaps. The intent is to cover
the kinds of everyday practical information being posted to existing websites during an emergency situation.

Several kinds of information can be provided:

We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and
"url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known
URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".

For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a [[WebContent]] type, and provide the url as a property of that, alongside at least a simple "[[text]]" summary of the page. It is
unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.

We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, [[openingHours]], [[Event]], [[FAQPage]] etc. By linking to those pages from a [[SpecialAnnouncement]] you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the [[category]] property of the [[SpecialAnnouncement]].

Many [[SpecialAnnouncement]]s will relate to particular regions and to identifiable local organizations. Use [[spatialCoverage]] for the region, and [[announcementLocation]] to indicate specific [[LocalBusiness]]es and [[CivicStructure]]s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both [[spatialCoverage]] and [[announcementLocation]].

The [[about]] property can be used to indicate entities that are the focus of the announcement. We now recommend using [[about]] only
for representing non-location entities (e.g. a [[Course]] or a [[RadioStation]]). For places, use [[announcementLocation]] and [[spatialCoverage]]. Consumers of this markup should be aware that the initial design encouraged the use of /about for locations too.

The basic content of [[SpecialAnnouncement]] is similar to that of an [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed. For publishers without such feeds, basic feed-like information can be shared by posting
[[SpecialAnnouncement]] updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed
with the [[webFeed]] property. This can be a simple URL, or an inline [[DataFeed]] object, with [[encodingFormat]] providing
media type information e.g. "application/rss+xml" or "application/atom+xml".

*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2490
*
**/
export interface SpecialAnnouncement extends CreativeWork {
  announcementLocation ?: CivicStructure | Array<CivicStructure> | LocalBusiness | Array<LocalBusiness>
  category ?: PhysicalActivityCategory | Array<PhysicalActivityCategory> | Text | Array<Text> | URL | Array<URL> | Thing | Array<Thing>
  datePosted ?: Date | Array<Date> | DateTime | Array<DateTime>
  diseasePreventionInfo ?: URL | Array<URL> | WebContent | Array<WebContent>
  diseaseSpreadStatistics ?: Dataset | Array<Dataset> | WebContent | Array<WebContent> | Observation | Array<Observation> | URL | Array<URL>
  gettingTestedInfo ?: WebContent | Array<WebContent> | URL | Array<URL>
  governmentBenefitsInfo ?: GovernmentService | Array<GovernmentService>;
  newsUpdatesAndGuidelines ?: WebContent | Array<WebContent> | URL | Array<URL>
  publicTransportClosuresInfo ?: URL | Array<URL> | WebContent | Array<WebContent>
  quarantineGuidelines ?: WebContent | Array<WebContent> | URL | Array<URL>
  schoolClosuresInfo ?: URL | Array<URL> | WebContent | Array<WebContent>
  travelBans ?: WebContent | Array<WebContent> | URL | Array<URL>
  webFeed ?: URL | Array<URL> | DataFeed | Array<DataFeed>
}

/**
*
* @see @link https://schema.org/Specialty
*
* @remarks
* Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
*
**/
export interface Specialty extends Enumeration {
}

/**
*
* @see @link https://schema.org/SportingGoodsStore
*
* @remarks
* A sporting goods store.
*
**/
export interface SportingGoodsStore extends Store {
}

/**
*
* @see @link https://schema.org/SportsActivityLocation
*
* @remarks
* A sports location, such as a playing field.
*
**/
export interface SportsActivityLocation extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/SportsClub
*
* @remarks
* A sports club.
*
**/
export interface SportsClub extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/SportsEvent
*
* @remarks
* Event type: Sports event.
*
**/
export interface SportsEvent extends Event {
  awayTeam ?: Person | Array<Person> | SportsTeam | Array<SportsTeam>
  competitor ?: Person | Array<Person> | SportsTeam | Array<SportsTeam>
  homeTeam ?: SportsTeam | Array<SportsTeam> | Person | Array<Person>
  sport ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/SportsOrganization
*
* @remarks
* Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
*
**/
export interface SportsOrganization extends Organization {
  sport ?: Text | Array<Text> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/SportsTeam
*
* @remarks
* Organization: Sports team.
*
**/
export interface SportsTeam extends SportsOrganization {
  athlete ?: Person | Array<Person>;
  coach ?: Person | Array<Person>;
  gender ?: GenderType | Array<GenderType> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/SpreadsheetDigitalDocument
*
* @remarks
* A spreadsheet file.
*
**/
export interface SpreadsheetDigitalDocument extends DigitalDocument {
}

/**
*
* @see @link https://schema.org/StadiumOrArena
*
* @remarks
* A stadium.
*
**/
export interface StadiumOrArena extends CivicStructure, SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/State
*
* @remarks
* A state or province of a country.
*
**/
export interface State extends AdministrativeArea {
}

/**
*
* @see @link https://schema.org/StatisticalPopulation
*
* @remarks
* A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property [[populationType]] is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a [[StatisticalPopulation]] representing all [[Person]]s with a [[homeLocation]] of East Podunk California, would be described by applying the appropriate [[homeLocation]] and [[populationType]] properties to a [[StatisticalPopulation]] item that stands for that set of people.
The properties [[numConstraints]] and [[constrainingProperty]] are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical
population, and does not imply that the population consists of people. For example, a [[populationType]] of [[Event]] or [[NewsArticle]] could be used. See also [[Observation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2291
*
**/
export interface StatisticalPopulation extends Intangible {
  constrainingProperty ?: Integer | Array<Integer>;
  numConstraints ?: Integer | Array<Integer>;
  populationType ?: Class | Array<Class>;
}

/**
*
* @see @link https://schema.org/StatusEnumeration
*
* @remarks
* Lists or enumerations dealing with status types.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/2604
*
**/
export interface StatusEnumeration extends Enumeration {
}

/**
*
* @see @link https://schema.org/Store
*
* @remarks
* A retail good store.
*
**/
export interface Store extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/StructuredValue
*
* @remarks
* Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
*
**/
export interface StructuredValue extends Intangible {
}

/**
*
* @see @link https://schema.org/SubscribeAction
*
* @remarks
* The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
*
**/
export interface SubscribeAction extends InteractAction {
}

/**
*
* @see @link https://schema.org/Substance
*
* @remarks
* Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Substance extends MedicalEntity {
  activeIngredient ?: Text | Array<Text>;
  maximumIntake ?: MaximumDoseSchedule | Array<MaximumDoseSchedule>;
}

/**
*
* @see @link https://schema.org/SubwayStation
*
* @remarks
* A subway station.
*
**/
export interface SubwayStation extends CivicStructure {
}

/**
*
* @see @link https://schema.org/Suite
*
* @remarks
* A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

*
* @see @link https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology
*
**/
export interface Suite extends Accommodation {
  bed ?: BedDetails | Array<BedDetails> | Text | Array<Text> | BedType | Array<BedType>
  numberOfRooms ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  occupancy ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/SuperficialAnatomy
*
* @remarks
* Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface SuperficialAnatomy extends MedicalEntity {
  associatedPathophysiology ?: Text | Array<Text>;
  relatedAnatomy ?: AnatomicalSystem | Array<AnatomicalSystem> | AnatomicalStructure | Array<AnatomicalStructure>
  relatedCondition ?: MedicalCondition | Array<MedicalCondition>;
  relatedTherapy ?: MedicalTherapy | Array<MedicalTherapy>;
  significance ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/SurgicalProcedure
*
* @remarks
* A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface SurgicalProcedure extends MedicalProcedure {
}

/**
*
* @see @link https://schema.org/SuspendAction
*
* @remarks
* The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
*
**/
export interface SuspendAction extends ControlAction {
}

/**
*
* @see @link https://schema.org/Synagogue
*
* @remarks
* A synagogue.
*
**/
export interface Synagogue extends PlaceOfWorship {
}

/**
*
* @see @link https://schema.org/Table
*
* @remarks
* A table on a Web page.
*
**/
export interface Table extends WebPageElement {
}

/**
*
* @see @link https://schema.org/TakeAction
*
* @remarks
* The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
*
**/
export interface TakeAction extends TransferAction {
}

/**
*
* @see @link https://schema.org/TattooParlor
*
* @remarks
* A tattoo parlor.
*
**/
export interface TattooParlor extends HealthAndBeautyBusiness {
}

/**
*
* @see @link https://schema.org/Taxi
*
* @remarks
* A taxi.
*
**/
export interface Taxi extends Service {
}

/**
*
* @see @link https://schema.org/TaxiReservation
*
* @remarks
* A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
**/
export interface TaxiReservation extends Reservation {
  partySize ?: QuantitativeValue | Array<QuantitativeValue> | Integer | Array<Integer>
  pickupLocation ?: Place | Array<Place>;
  pickupTime ?: DateTime | Array<DateTime>;
}

/**
*
* @see @link https://schema.org/TaxiService
*
* @remarks
* A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
*
**/
export interface TaxiService extends Service {
}

/**
*
* @see @link https://schema.org/TaxiStand
*
* @remarks
* A taxi stand.
*
**/
export interface TaxiStand extends CivicStructure {
}

/**
*
* @see @link https://schema.org/TechArticle
*
* @remarks
* A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
*
**/
export interface TechArticle extends Article {
  dependencies ?: Text | Array<Text>;
  proficiencyLevel ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/TelevisionChannel
*
* @remarks
* A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
*
**/
export interface TelevisionChannel extends BroadcastChannel {
}

/**
*
* @see @link https://schema.org/TelevisionStation
*
* @remarks
* A television station.
*
**/
export interface TelevisionStation extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/TennisComplex
*
* @remarks
* A tennis complex.
*
**/
export interface TennisComplex extends SportsActivityLocation {
}

/**
*
* @see @link https://schema.org/TextDigitalDocument
*
* @remarks
* A file composed primarily of text.
*
**/
export interface TextDigitalDocument extends DigitalDocument {
}

/**
*
* @see @link https://schema.org/TheaterEvent
*
* @remarks
* Event type: Theater performance.
*
**/
export interface TheaterEvent extends Event {
}

/**
*
* @see @link https://schema.org/TheaterGroup
*
* @remarks
* A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
*
**/
export interface TheaterGroup extends PerformingGroup {
}

/**
*
* @see @link https://schema.org/TherapeuticProcedure
*
* @remarks
* A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface TherapeuticProcedure extends MedicalProcedure {
  adverseOutcome ?: MedicalEntity | Array<MedicalEntity>;
  doseSchedule ?: DoseSchedule | Array<DoseSchedule>;
  drug ?: Drug | Array<Drug>;
}

/**
*
* @see @link https://schema.org/Thesis
*
* @remarks
* A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
*
* 
* Partof: https://bib.schema.org
* @see @link http://www.productontology.org/id/Thesis
*
**/
export interface Thesis extends CreativeWork {
  inSupportOf ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/Thing
*
* @remarks
* The most generic type of item.
*
**/
export interface Thing {
  additionalType ?: URL | Array<URL>;
  alternateName ?: Text | Array<Text>;
  description ?: Text | Array<Text>;
  disambiguatingDescription ?: Text | Array<Text>;
  identifier ?: PropertyValue | Array<PropertyValue> | URL | Array<URL> | Text | Array<Text>
  image ?: ImageObject | Array<ImageObject> | URL | Array<URL>
  mainEntityOfPage ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
  name ?: Text | Array<Text>;
  potentialAction ?: Action | Array<Action>;
  sameAs ?: URL | Array<URL>;
  subjectOf ?: Event | Array<Event> | CreativeWork | Array<CreativeWork>
  url ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/Ticket
*
* @remarks
* Used to describe a ticket to an event, a flight, a bus ride, etc.
*
**/
export interface Ticket extends Intangible {
  dateIssued ?: Date | Array<Date> | DateTime | Array<DateTime>
  issuedBy ?: Organization | Array<Organization>;
  priceCurrency ?: Text | Array<Text>;
  ticketedSeat ?: Seat | Array<Seat>;
  ticketNumber ?: Text | Array<Text>;
  ticketToken ?: Text | Array<Text> | URL | Array<URL>
  totalPrice ?: Number | Array<Number> | Text | Array<Text> | PriceSpecification | Array<PriceSpecification>
  underName ?: Person | Array<Person> | Organization | Array<Organization>
}

/**
*
* @see @link https://schema.org/TieAction
*
* @remarks
* The act of reaching a draw in a competitive activity.
*
**/
export interface TieAction extends AchieveAction {
}

/**
*
* @see @link https://schema.org/TipAction
*
* @remarks
* The act of giving money voluntarily to a beneficiary in recognition of services rendered.
*
**/
export interface TipAction extends TradeAction {
  recipient ?: Organization | Array<Organization> | ContactPoint | Array<ContactPoint> | Person | Array<Person> | Audience | Array<Audience>
}

/**
*
* @see @link https://schema.org/TireShop
*
* @remarks
* A tire shop.
*
**/
export interface TireShop extends Store {
}

/**
*
* @see @link https://schema.org/TouristAttraction
*
* @remarks
* A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it
*
**/
export interface TouristAttraction extends Place {
  availableLanguage ?: Language | Array<Language> | Text | Array<Text>
  touristType ?: Audience | Array<Audience> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/TouristDestination
*
* @remarks
* A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
  (See examples below).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1810
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it
*
**/
export interface TouristDestination extends Place {
  includesAttraction ?: TouristAttraction | Array<TouristAttraction>;
  touristType ?: Audience | Array<Audience> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/TouristInformationCenter
*
* @remarks
* A tourist information center.
*
**/
export interface TouristInformationCenter extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/TouristTrip
*
* @remarks
* A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
  (See examples below).
*
* 
* Partof: https://pending.schema.org
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism
* @see @link https://github.com/schemaorg/schemaorg/issues/1810
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#IIT-CNR.it
*
**/
export interface TouristTrip extends Trip {
  touristType ?: Audience | Array<Audience> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/ToyStore
*
* @remarks
* A toy store.
*
**/
export interface ToyStore extends Store {
}

/**
*
* @see @link https://schema.org/TrackAction
*
* @remarks
* An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
*
**/
export interface TrackAction extends FindAction {
  deliveryMethod ?: DeliveryMethod | Array<DeliveryMethod>;
}

/**
*
* @see @link https://schema.org/TradeAction
*
* @remarks
* The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
*
**/
export interface TradeAction extends Action {
  price ?: Number | Array<Number> | Text | Array<Text>
  priceCurrency ?: Text | Array<Text>;
  priceSpecification ?: PriceSpecification | Array<PriceSpecification>;
}

/**
*
* @see @link https://schema.org/TrainReservation
*
* @remarks
* A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
*
**/
export interface TrainReservation extends Reservation {
}

/**
*
* @see @link https://schema.org/TrainStation
*
* @remarks
* A train station.
*
**/
export interface TrainStation extends CivicStructure {
}

/**
*
* @see @link https://schema.org/TrainTrip
*
* @remarks
* A trip on a commercial train line.
*
**/
export interface TrainTrip extends Trip {
  arrivalPlatform ?: Text | Array<Text>;
  arrivalStation ?: TrainStation | Array<TrainStation>;
  departurePlatform ?: Text | Array<Text>;
  departureStation ?: TrainStation | Array<TrainStation>;
  trainName ?: Text | Array<Text>;
  trainNumber ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/TransferAction
*
* @remarks
* The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
*
**/
export interface TransferAction extends Action {
  fromLocation ?: Place | Array<Place>;
  toLocation ?: Place | Array<Place>;
}

/**
*
* @see @link https://schema.org/TravelAction
*
* @remarks
* The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
*
**/
export interface TravelAction extends MoveAction {
  distance ?: Distance | Array<Distance>;
}

/**
*
* @see @link https://schema.org/TravelAgency
*
* @remarks
* A travel agency.
*
**/
export interface TravelAgency extends LocalBusiness {
}

/**
*
* @see @link https://schema.org/TreatmentIndication
*
* @remarks
* An indication for treating an underlying condition, symptom, etc.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface TreatmentIndication extends MedicalIndication {
}

/**
*
* @see @link https://schema.org/Trip
*
* @remarks
* A trip or journey. An itinerary of visits to one or more places.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Tourism
*
**/
export interface Trip extends Intangible {
  arrivalTime ?: Time | Array<Time> | DateTime | Array<DateTime>
  departureTime ?: Time | Array<Time> | DateTime | Array<DateTime>
  itinerary ?: Place | Array<Place> | ItemList | Array<ItemList>
  offers ?: Offer | Array<Offer> | Demand | Array<Demand>
  partOfTrip ?: Trip | Array<Trip>;
  provider ?: Organization | Array<Organization> | Person | Array<Person>
  subTrip ?: Trip | Array<Trip>;
}

/**
*
* @see @link https://schema.org/TVClip
*
* @remarks
* A short TV program or a segment/part of a TV program.
*
**/
export interface TVClip extends Clip {
  partOfTVSeries ?: TVSeries | Array<TVSeries>;
}

/**
*
* @see @link https://schema.org/TVEpisode
*
* @remarks
* A TV episode which can be part of a series or season.
*
**/
export interface TVEpisode extends Episode {
  countryOfOrigin ?: Country | Array<Country>;
  partOfTVSeries ?: TVSeries | Array<TVSeries>;
  subtitleLanguage ?: Text | Array<Text> | Language | Array<Language>
  titleEIDR ?: URL | Array<URL> | Text | Array<Text>
}

/**
*
* @see @link https://schema.org/TVSeason
*
* @remarks
* Season dedicated to TV broadcast and associated online delivery.
*
**/
export interface TVSeason extends CreativeWork, CreativeWorkSeason {
  countryOfOrigin ?: Country | Array<Country>;
  partOfTVSeries ?: TVSeries | Array<TVSeries>;
}

/**
*
* @see @link https://schema.org/TVSeries
*
* @remarks
* CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
*
**/
export interface TVSeries extends CreativeWork, CreativeWorkSeries {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  containsSeason ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  countryOfOrigin ?: Country | Array<Country>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  episode ?: Episode | Array<Episode>;
  episodes ?: Episode | Array<Episode>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  numberOfEpisodes ?: Integer | Array<Integer>;
  numberOfSeasons ?: Integer | Array<Integer>;
  productionCompany ?: Organization | Array<Organization>;
  season ?: CreativeWorkSeason | Array<CreativeWorkSeason> | URL | Array<URL>
  seasons ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/TypeAndQuantityNode
*
* @remarks
* A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface TypeAndQuantityNode extends StructuredValue {
  amountOfThisGood ?: Number | Array<Number>;
  businessFunction ?: BusinessFunction | Array<BusinessFunction>;
  typeOfGood ?: Service | Array<Service> | Product | Array<Product>
  unitCode ?: Text | Array<Text> | URL | Array<URL>
  unitText ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/UnitPriceSpecification
*
* @remarks
* The price asked for a given offer by the respective organization or person.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface UnitPriceSpecification extends PriceSpecification {
  billingDuration ?: Number | Array<Number> | Duration | Array<Duration> | QuantitativeValue | Array<QuantitativeValue>
  billingIncrement ?: Number | Array<Number>;
  billingStart ?: Number | Array<Number>;
  priceComponentType ?: PriceComponentTypeEnumeration | Array<PriceComponentTypeEnumeration>;
  priceType ?: PriceTypeEnumeration | Array<PriceTypeEnumeration> | Text | Array<Text>
  referenceQuantity ?: QuantitativeValue | Array<QuantitativeValue>;
  unitCode ?: Text | Array<Text> | URL | Array<URL>
  unitText ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/UnRegisterAction
*
* @remarks
* The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
*
**/
export interface UnRegisterAction extends InteractAction {
}

/**
*
* @see @link https://schema.org/UpdateAction
*
* @remarks
* The act of managing by changing/editing the state of the object.
*
**/
export interface UpdateAction extends Action {
  collection ?: Thing | Array<Thing>;
  targetCollection ?: Thing | Array<Thing>;
}

/**
*
* @see @link https://schema.org/URL
*
* @remarks
* Data type: URL.
*
**/
export type URL = Text;

/**
*
* @see @link https://schema.org/UseAction
*
* @remarks
* The act of applying an object to its intended purpose.
*
**/
export interface UseAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/UserBlocks
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserBlocks extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserCheckins
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserCheckins extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserComments
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface UserComments extends UserInteraction {
  commentText ?: Text | Array<Text>;
  commentTime ?: DateTime | Array<DateTime> | Date | Array<Date>
  creator ?: Organization | Array<Organization> | Person | Array<Person>
  discusses ?: CreativeWork | Array<CreativeWork>;
  replyToUrl ?: URL | Array<URL>;
}

/**
*
* @see @link https://schema.org/UserDownloads
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserDownloads extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserInteraction
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserInteraction extends Event {
}

/**
*
* @see @link https://schema.org/UserLikes
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserLikes extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserPageVisits
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserPageVisits extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserPlays
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserPlays extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserPlusOnes
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserPlusOnes extends UserInteraction {
}

/**
*
* @see @link https://schema.org/UserReview
*
* @remarks
* A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]].
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1589
*
**/
export interface UserReview extends Review {
}

/**
*
* @see @link https://schema.org/UserTweets
*
* @remarks
* UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
*
**/
export interface UserTweets extends UserInteraction {
}

/**
*
* @see @link https://schema.org/Vehicle
*
* @remarks
* A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
*
**/
export interface Vehicle extends Product {
  accelerationTime ?: QuantitativeValue | Array<QuantitativeValue>;
  bodyType ?: URL | Array<URL> | Text | Array<Text> | QualitativeValue | Array<QualitativeValue>
  callSign ?: Text | Array<Text>;
  cargoVolume ?: QuantitativeValue | Array<QuantitativeValue>;
  dateVehicleFirstRegistered ?: Date | Array<Date>;
  driveWheelConfiguration ?: DriveWheelConfigurationValue | Array<DriveWheelConfigurationValue> | Text | Array<Text>
  emissionsCO2 ?: Number | Array<Number>;
  fuelCapacity ?: QuantitativeValue | Array<QuantitativeValue>;
  fuelConsumption ?: QuantitativeValue | Array<QuantitativeValue>;
  fuelEfficiency ?: QuantitativeValue | Array<QuantitativeValue>;
  fuelType ?: QualitativeValue | Array<QualitativeValue> | URL | Array<URL> | Text | Array<Text>
  knownVehicleDamages ?: Text | Array<Text>;
  meetsEmissionStandard ?: URL | Array<URL> | Text | Array<Text> | QualitativeValue | Array<QualitativeValue>
  mileageFromOdometer ?: QuantitativeValue | Array<QuantitativeValue>;
  modelDate ?: Date | Array<Date>;
  numberOfAirbags ?: Number | Array<Number> | Text | Array<Text>
  numberOfAxles ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  numberOfDoors ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  numberOfForwardGears ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  numberOfPreviousOwners ?: QuantitativeValue | Array<QuantitativeValue> | Number | Array<Number>
  payload ?: QuantitativeValue | Array<QuantitativeValue>;
  productionDate ?: Date | Array<Date>;
  purchaseDate ?: Date | Array<Date>;
  seatingCapacity ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  speed ?: QuantitativeValue | Array<QuantitativeValue>;
  steeringPosition ?: SteeringPositionValue | Array<SteeringPositionValue>;
  tongueWeight ?: QuantitativeValue | Array<QuantitativeValue>;
  trailerWeight ?: QuantitativeValue | Array<QuantitativeValue>;
  vehicleConfiguration ?: Text | Array<Text>;
  vehicleEngine ?: EngineSpecification | Array<EngineSpecification>;
  vehicleIdentificationNumber ?: Text | Array<Text>;
  vehicleInteriorColor ?: Text | Array<Text>;
  vehicleInteriorType ?: Text | Array<Text>;
  vehicleModelDate ?: Date | Array<Date>;
  vehicleSeatingCapacity ?: Number | Array<Number> | QuantitativeValue | Array<QuantitativeValue>
  vehicleSpecialUsage ?: Text | Array<Text> | CarUsageType | Array<CarUsageType>
  vehicleTransmission ?: URL | Array<URL> | Text | Array<Text> | QualitativeValue | Array<QualitativeValue>
  weightTotal ?: QuantitativeValue | Array<QuantitativeValue>;
  wheelbase ?: QuantitativeValue | Array<QuantitativeValue>;
}

/**
*
* @see @link https://schema.org/Vein
*
* @remarks
* A type of blood vessel that specifically carries blood to the heart.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Vein extends Vessel {
  drainsTo ?: Vessel | Array<Vessel>;
  regionDrained ?: AnatomicalStructure | Array<AnatomicalStructure> | AnatomicalSystem | Array<AnatomicalSystem>
  tributary ?: AnatomicalStructure | Array<AnatomicalStructure>;
}

/**
*
* @see @link https://schema.org/Vessel
*
* @remarks
* A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface Vessel extends AnatomicalStructure {
}

/**
*
* @see @link https://schema.org/VeterinaryCare
*
* @remarks
* A vet's office.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface VeterinaryCare extends MedicalOrganization {
}

/**
*
* @see @link https://schema.org/VideoGallery
*
* @remarks
* Web page type: Video gallery page.
*
**/
export interface VideoGallery extends MediaGallery {
}

/**
*
* @see @link https://schema.org/VideoGame
*
* @remarks
* A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
*
**/
export interface VideoGame extends Game, SoftwareApplication {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  cheatCode ?: CreativeWork | Array<CreativeWork>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  gamePlatform ?: Thing | Array<Thing> | URL | Array<URL> | Text | Array<Text>
  gameServer ?: GameServer | Array<GameServer>;
  gameTip ?: CreativeWork | Array<CreativeWork>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  playMode ?: GamePlayMode | Array<GamePlayMode>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/VideoGameClip
*
* @remarks
* A short segment/part of a video game.
*
**/
export interface VideoGameClip extends Clip {
}

/**
*
* @see @link https://schema.org/VideoGameSeries
*
* @remarks
* A video game series.
*
**/
export interface VideoGameSeries extends CreativeWorkSeries {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  characterAttribute ?: Thing | Array<Thing>;
  cheatCode ?: CreativeWork | Array<CreativeWork>;
  containsSeason ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  episode ?: Episode | Array<Episode>;
  episodes ?: Episode | Array<Episode>;
  gameItem ?: Thing | Array<Thing>;
  gameLocation ?: PostalAddress | Array<PostalAddress> | Place | Array<Place> | URL | Array<URL>
  gamePlatform ?: Thing | Array<Thing> | URL | Array<URL> | Text | Array<Text>
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  numberOfEpisodes ?: Integer | Array<Integer>;
  numberOfPlayers ?: QuantitativeValue | Array<QuantitativeValue>;
  numberOfSeasons ?: Integer | Array<Integer>;
  playMode ?: GamePlayMode | Array<GamePlayMode>;
  productionCompany ?: Organization | Array<Organization>;
  quest ?: Thing | Array<Thing>;
  season ?: CreativeWorkSeason | Array<CreativeWorkSeason> | URL | Array<URL>
  seasons ?: CreativeWorkSeason | Array<CreativeWorkSeason>;
  trailer ?: VideoObject | Array<VideoObject>;
}

/**
*
* @see @link https://schema.org/VideoObject
*
* @remarks
* A video file.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews
*
**/
export interface VideoObject extends MediaObject {
  actor ?: Person | Array<Person>;
  actors ?: Person | Array<Person>;
  caption ?: Text | Array<Text> | MediaObject | Array<MediaObject>
  director ?: Person | Array<Person>;
  directors ?: Person | Array<Person>;
  musicBy ?: Person | Array<Person> | MusicGroup | Array<MusicGroup>
  thumbnail ?: ImageObject | Array<ImageObject>;
  transcript ?: Text | Array<Text>;
  videoFrameSize ?: Text | Array<Text>;
  videoQuality ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/ViewAction
*
* @remarks
* The act of consuming static visual content.
*
**/
export interface ViewAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/VirtualLocation
*
* @remarks
* An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1842
*
**/
export interface VirtualLocation extends Intangible {
}

/**
*
* @see @link https://schema.org/VisualArtsEvent
*
* @remarks
* Event type: Visual arts event.
*
**/
export interface VisualArtsEvent extends Event {
}

/**
*
* @see @link https://schema.org/VisualArtwork
*
* @remarks
* A work of art that is primarily visual in character.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_VisualArtworkClass
*
**/
export interface VisualArtwork extends CreativeWork {
  artEdition ?: Text | Array<Text> | Integer | Array<Integer>
  artform ?: Text | Array<Text> | URL | Array<URL>
  artist ?: Person | Array<Person>;
  artMedium ?: Text | Array<Text> | URL | Array<URL>
  artworkSurface ?: Text | Array<Text> | URL | Array<URL>
  colorist ?: Person | Array<Person>;
  depth ?: Distance | Array<Distance> | QuantitativeValue | Array<QuantitativeValue>
  height ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
  inker ?: Person | Array<Person>;
  letterer ?: Person | Array<Person>;
  penciler ?: Person | Array<Person>;
  surface ?: URL | Array<URL> | Text | Array<Text>
  width ?: QuantitativeValue | Array<QuantitativeValue> | Distance | Array<Distance>
}

/**
*
* @see @link https://schema.org/VitalSign
*
* @remarks
* Vital signs are measures of various physiological functions in order to assess the most basic body functions.
*
* 
* Partof: https://health-lifesci.schema.org
**/
export interface VitalSign extends MedicalSign {
}

/**
*
* @see @link https://schema.org/Volcano
*
* @remarks
* A volcano, like Fuji san.
*
**/
export interface Volcano extends Landform {
}

/**
*
* @see @link https://schema.org/VoteAction
*
* @remarks
* The act of expressing a preference from a fixed/finite/structured set of choices/options.
*
**/
export interface VoteAction extends ChooseAction {
  candidate ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/WantAction
*
* @remarks
* The act of expressing a desire about the object. An agent wants an object.
*
**/
export interface WantAction extends ReactAction {
}

/**
*
* @see @link https://schema.org/WarrantyPromise
*
* @remarks
* A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface WarrantyPromise extends StructuredValue {
  durationOfWarranty ?: QuantitativeValue | Array<QuantitativeValue>;
  warrantyScope ?: WarrantyScope | Array<WarrantyScope>;
}

/**
*
* @see @link https://schema.org/WarrantyScope
*
* @remarks
* A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
      
*
* @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass
*
**/
export interface WarrantyScope extends Enumeration {
}

/**
*
* @see @link https://schema.org/WatchAction
*
* @remarks
* The act of consuming dynamic/moving visual content.
*
**/
export interface WatchAction extends ConsumeAction {
}

/**
*
* @see @link https://schema.org/Waterfall
*
* @remarks
* A waterfall, like Niagara.
*
**/
export interface Waterfall extends BodyOfWater {
}

/**
*
* @see @link https://schema.org/WearAction
*
* @remarks
* The act of dressing oneself in clothing.
*
**/
export interface WearAction extends UseAction {
}

/**
*
* @see @link https://schema.org/WebAPI
*
* @remarks
* An application programming interface accessible over Web/Internet technologies.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1423
*
**/
export interface WebAPI extends Service {
  documentation ?: CreativeWork | Array<CreativeWork> | URL | Array<URL>
}

/**
*
* @see @link https://schema.org/WebApplication
*
* @remarks
* Web applications.
*
**/
export interface WebApplication extends SoftwareApplication {
  browserRequirements ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/WebContent
*
* @remarks
* WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The  [[WebContent]] type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types [[WebPage]], [[WebSite]] and [[WebPageElement]] will eventually be declared as subtypes of [[WebContent]]).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2358
*
**/
export interface WebContent extends CreativeWork {
}

/**
*
* @see @link https://schema.org/WebPage
*
* @remarks
* A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
*
**/
export interface WebPage extends CreativeWork {
  breadcrumb ?: Text | Array<Text> | BreadcrumbList | Array<BreadcrumbList>
  lastReviewed ?: Date | Array<Date>;
  mainContentOfPage ?: WebPageElement | Array<WebPageElement>;
  primaryImageOfPage ?: ImageObject | Array<ImageObject>;
  relatedLink ?: URL | Array<URL>;
  reviewedBy ?: Organization | Array<Organization> | Person | Array<Person>
  significantLink ?: URL | Array<URL>;
  significantLinks ?: URL | Array<URL>;
  speakable ?: SpeakableSpecification | Array<SpeakableSpecification> | URL | Array<URL>
  specialty ?: Specialty | Array<Specialty>;
}

/**
*
* @see @link https://schema.org/WebPageElement
*
* @remarks
* A web page element, like a table or an image.
*
**/
export interface WebPageElement extends CreativeWork {
  cssSelector ?: CssSelectorType | Array<CssSelectorType>;
  xpath ?: XPathType | Array<XPathType>;
}

/**
*
* @see @link https://schema.org/WebSite
*
* @remarks
* A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
*
**/
export interface WebSite extends CreativeWork {
  issn ?: Text | Array<Text>;
}

/**
*
* @see @link https://schema.org/WholesaleStore
*
* @remarks
* A wholesale store.
*
**/
export interface WholesaleStore extends Store {
}

/**
*
* @see @link https://schema.org/WinAction
*
* @remarks
* The act of achieving victory in a competitive activity.
*
**/
export interface WinAction extends AchieveAction {
  loser ?: Person | Array<Person>;
}

/**
*
* @see @link https://schema.org/Winery
*
* @remarks
* A winery.
*
**/
export interface Winery extends FoodEstablishment {
}

/**
*
* @see @link https://schema.org/WorkBasedProgram
*
* @remarks
* A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/2289
*
**/
export interface WorkBasedProgram extends EducationalOccupationalProgram {
  occupationalCategory ?: CategoryCode | Array<CategoryCode> | Text | Array<Text>
  trainingSalary ?: MonetaryAmountDistribution | Array<MonetaryAmountDistribution>;
}

/**
*
* @see @link https://schema.org/WorkersUnion
*
* @remarks
* A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.
*
* @see @link https://github.com/schemaorg/schemaorg/issues/243
*
**/
export interface WorkersUnion extends Organization {
}

/**
*
* @see @link https://schema.org/WPAdBlock
*
* @remarks
* An advertising section of the page.
*
**/
export interface WPAdBlock extends WebPageElement {
}

/**
*
* @see @link https://schema.org/WPFooter
*
* @remarks
* The footer section of the page.
*
**/
export interface WPFooter extends WebPageElement {
}

/**
*
* @see @link https://schema.org/WPHeader
*
* @remarks
* The header section of the page.
*
**/
export interface WPHeader extends WebPageElement {
}

/**
*
* @see @link https://schema.org/WPSideBar
*
* @remarks
* A sidebar section of the page.
*
**/
export interface WPSideBar extends WebPageElement {
}

/**
*
* @see @link https://schema.org/WriteAction
*
* @remarks
* The act of authoring written creative content.
*
**/
export interface WriteAction extends CreateAction {
  inLanguage ?: Text | Array<Text> | Language | Array<Language>
  language ?: Language | Array<Language>;
}

/**
*
* @see @link https://schema.org/XPathType
*
* @remarks
* Text representing an XPath (typically but not necessarily version 1.0).
*
* 
* Partof: https://pending.schema.org
* @see @link https://github.com/schemaorg/schemaorg/issues/1672
*
**/
export type XPathType = Text;

/**
*
* @see @link https://schema.org/Zoo
*
* @remarks
* A zoo.
*
**/
export interface Zoo extends CivicStructure {
}

