import { Number, Text, Boolean, Date, DateTime, Time } from "./core";
import { ItemList, ListItem, DataFeed, DataFeedItem } from "./generics";

export * from "./core";

export * from "./generics";

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
  | "PotentialActionStatus";
/**
 *
 * @see @link https://schema.org/BoardingPolicyType
 *
 * @remarks
 * A type of boarding policy used by an airline.
 *
 **/
export type BoardingPolicyType = "GroupBoardingPolicy" | "ZoneBoardingPolicy";
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
  | "BodyMeasurementWeight";
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
  | "Paperback";
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
  | "TaxiVehicleUsage";
/**
 *
 * @see @link https://schema.org/ContactPointOption
 *
 * @remarks
 * Enumerated options related to a ContactPoint.
 *
 **/
export type ContactPointOption = "HearingImpairedSupported" | "TollFree";
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
  | "Wednesday";
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
  | "ParcelService";
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
  | "WritePermission";
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
  | "RearWheelDriveConfiguration";
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
export type DrugCostCategory = "ReimbursementCap" | "Retail" | "Wholesale";
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
  | "FDAnotEvaluated";
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
export type DrugPrescriptionStatus = "OTC" | "PrescriptionOnly";
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
  | "EUEnergyEfficiencyCategoryG";
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
export type EnergyStarEnergyEfficiencyEnumeration = "EnergyStarCertified";
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
  | "OnlineEventAttendanceMode";
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
  | "EventScheduled";
/**
 *
 * @see @link https://schema.org/GamePlayMode
 *
 * @remarks
 * Indicates whether this game is multi-player, co-op or single-player.
 *
 **/
export type GamePlayMode = "CoOp" | "MultiPlayer" | "SinglePlayer";
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
  | "OnlineFull";
/**
 *
 * @see @link https://schema.org/GenderType
 *
 * @remarks
 * An enumeration of genders.
 *
 **/
export type GenderType = "Female" | "Male";
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
  | "UnemploymentSupport";
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
  | "UsageOrScheduleHealthAspect";
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
  | "Virus";
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
  | "SoldOut";
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
  | "ItemListUnordered";
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
export type LegalForceStatus = "InForce" | "NotInForce" | "PartiallyInForce";
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
  | "UnofficialLegalValue";
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
  | "VenueMap";
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
  | "TransformedContent";
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
export type MedicalAudienceType = "Clinician" | "MedicalResearcher";
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
export type MedicalDevicePurpose = "Diagnostic" | "Therapeutic";
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
  | "EvidenceLevelC";
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
  | "XRay";
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
  | "Registry";
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
  | "PercutaneousProcedure";
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
  | "Urologic";
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
  | "Withdrawn";
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
  | "TripleBlindedTrial";
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
  | "WesternConventional";
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
  | "MerchantReturnUnspecified";
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
  | "StudioAlbum";
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
  | "SingleRelease";
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
  | "VinylFormat";
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
export type NLNonprofitType = "NonprofitANBI" | "NonprofitSBBI";
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
  | "UsedCondition";
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
  | "OrderReturned";
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
  | "PaymentPastDue";
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
  | "StrengthTraining";
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
  | "Throat";
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
  | "Subscription";
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
  | "SalePrice";
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
  | "StoreCreditRefund";
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
  | "ReservationPending";
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
  | "VegetarianDiet";
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
  | "ReturnShippingFees";
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
  | "RsvpResponseYes";
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
export type SizeSystemEnumeration = "SizeSystemImperial" | "SizeSystemMetric";
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
export type SteeringPositionValue = "LeftHandDriving" | "RightHandDriving";
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
  | "UnincorporatedAssociationCharity";
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
  | "Nonprofit527";
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
  | "WearableMeasurementWidth";
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
  | "WearableSizeGroupWomens";
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
  | "WearableSizeSystemUS";
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
export interface Interface3DModel extends Omit<MediaObject, "@type"> {
  "@type"?: "Interface3DModel";
  isResizable?: Boolean;
}

/**
 *
 * @see @link https://schema.org/AboutPage
 *
 * @remarks
 * Web page type: About page.
 *
 **/
export interface AboutPage extends Omit<WebPage, "@type"> {
  "@type"?: "AboutPage";
}

/**
 *
 * @see @link https://schema.org/AcceptAction
 *
 * @remarks
 * The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
 *
 **/
export interface AcceptAction extends Omit<AllocateAction, "@type"> {
  "@type"?: "AcceptAction";
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
export interface Accommodation extends Omit<Place, "@type"> {
  "@type"?: "Accommodation";
  accommodationCategory?: Text;
  accommodationFloorPlan?: FloorPlan;
  amenityFeature?: LocationFeatureSpecification;
  floorLevel?: Text;
  floorSize?: QuantitativeValue;
  leaseLength?: Duration | QuantitativeValue;
  numberOfBathroomsTotal?: Integer;
  numberOfBedrooms?: QuantitativeValue | Number;
  numberOfFullBathrooms?: Number;
  numberOfPartialBathrooms?: Number;
  numberOfRooms?: Number | QuantitativeValue;
  permittedUsage?: Text;
  petsAllowed?: Text | Boolean;
  tourBookingPage?: URL;
  yearBuilt?: Number;
}

/**
*
* @see @link https://schema.org/AccountingService
*
* @remarks
* Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
      
*
**/
export interface AccountingService extends Omit<FinancialService, "@type"> {
  "@type"?: "AccountingService";
}

/**
 *
 * @see @link https://schema.org/AchieveAction
 *
 * @remarks
 * The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.
 *
 **/
export interface AchieveAction extends Omit<Action, "@type"> {
  "@type"?: "AchieveAction";
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
export interface Action extends Omit<Thing, "@type"> {
  "@type"?: "Action";
  actionStatus?: ActionStatusType;
  agent?: Person | Organization;
  endTime?: DateTime | Time;
  error?: Thing;
  instrument?: Thing;
  location?: Place | Text | VirtualLocation | PostalAddress;
  object?: Thing;
  participant?: Person | Organization;
  result?: Thing;
  startTime?: DateTime | Time;
  target?: EntryPoint;
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
export interface ActionAccessSpecification extends Omit<Intangible, "@type"> {
  "@type"?: "ActionAccessSpecification";
  availabilityEnds?: DateTime | Time | Date;
  availabilityStarts?: DateTime | Date | Time;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  eligibleRegion?: Text | GeoShape | Place;
  expectsAcceptanceOf?: Offer;
  ineligibleRegion?: GeoShape | Text | Place;
  requiresSubscription?: Boolean | MediaSubscription;
}

/**
 *
 * @see @link https://schema.org/ActivateAction
 *
 * @remarks
 * The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 *
 **/
export interface ActivateAction extends Omit<ControlAction, "@type"> {
  "@type"?: "ActivateAction";
}

/**
 *
 * @see @link https://schema.org/AddAction
 *
 * @remarks
 * The act of editing by adding an object to a collection.
 *
 **/
export interface AddAction extends Omit<UpdateAction, "@type"> {
  "@type"?: "AddAction";
}

/**
 *
 * @see @link https://schema.org/AdministrativeArea
 *
 * @remarks
 * A geographical region, typically under the jurisdiction of a particular government.
 *
 **/
export interface AdministrativeArea extends Omit<Place, "@type"> {
  "@type"?: "AdministrativeArea";
}

/**
 *
 * @see @link https://schema.org/AdultEntertainment
 *
 * @remarks
 * An adult entertainment establishment.
 *
 **/
export interface AdultEntertainment
  extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "AdultEntertainment";
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
export interface AdvertiserContentArticle extends Omit<Article, "@type"> {
  "@type"?: "AdvertiserContentArticle";
}

/**
 *
 * @see @link https://schema.org/AggregateOffer
 *
 * @remarks
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 *
 **/
export interface AggregateOffer extends Omit<Offer, "@type"> {
  "@type"?: "AggregateOffer";
  highPrice?: Number | Text;
  lowPrice?: Text | Number;
  offerCount?: Integer;
  offers?: Offer | Demand;
}

/**
 *
 * @see @link https://schema.org/AggregateRating
 *
 * @remarks
 * The average rating based on multiple ratings or reviews.
 *
 **/
export interface AggregateRating extends Omit<Rating, "@type"> {
  "@type"?: "AggregateRating";
  itemReviewed?: Thing;
  ratingCount?: Integer;
  reviewCount?: Integer;
}

/**
 *
 * @see @link https://schema.org/AgreeAction
 *
 * @remarks
 * The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
 *
 **/
export interface AgreeAction extends Omit<ReactAction, "@type"> {
  "@type"?: "AgreeAction";
}

/**
 *
 * @see @link https://schema.org/Airline
 *
 * @remarks
 * An organization that provides flights for passengers.
 *
 **/
export interface Airline extends Omit<Organization, "@type"> {
  "@type"?: "Airline";
  boardingPolicy?: BoardingPolicyType;
  iataCode?: Text;
}

/**
 *
 * @see @link https://schema.org/Airport
 *
 * @remarks
 * An airport.
 *
 **/
export interface Airport extends Omit<CivicStructure, "@type"> {
  "@type"?: "Airport";
  iataCode?: Text;
  icaoCode?: Text;
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
export interface AlignmentObject extends Omit<Intangible, "@type"> {
  "@type"?: "AlignmentObject";
  alignmentType?: Text;
  educationalFramework?: Text;
  targetDescription?: Text;
  targetName?: Text;
  targetUrl?: URL;
}

/**
 *
 * @see @link https://schema.org/AllocateAction
 *
 * @remarks
 * The act of organizing tasks/objects/events by associating resources to it.
 *
 **/
export interface AllocateAction extends Omit<OrganizeAction, "@type"> {
  "@type"?: "AllocateAction";
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
export interface AmpStory extends Omit<CreativeWork, "@type"> {
  "@type"?: "AmpStory";
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
export interface AMRadioChannel extends Omit<RadioChannel, "@type"> {
  "@type"?: "AMRadioChannel";
}

/**
 *
 * @see @link https://schema.org/AmusementPark
 *
 * @remarks
 * An amusement park.
 *
 **/
export interface AmusementPark extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "AmusementPark";
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
export interface AnalysisNewsArticle extends Omit<NewsArticle, "@type"> {
  "@type"?: "AnalysisNewsArticle";
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
export interface AnatomicalStructure extends Omit<MedicalEntity, "@type"> {
  "@type"?: "AnatomicalStructure";
  associatedPathophysiology?: Text;
  bodyLocation?: Text;
  connectedTo?: AnatomicalStructure;
  diagram?: ImageObject;
  partOfSystem?: AnatomicalSystem;
  relatedCondition?: MedicalCondition;
  relatedTherapy?: MedicalTherapy;
  subStructure?: AnatomicalStructure;
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
export interface AnatomicalSystem extends Omit<MedicalEntity, "@type"> {
  "@type"?: "AnatomicalSystem";
  associatedPathophysiology?: Text;
  comprisedOf?: AnatomicalSystem | AnatomicalStructure;
  relatedCondition?: MedicalCondition;
  relatedStructure?: AnatomicalStructure;
  relatedTherapy?: MedicalTherapy;
}

/**
 *
 * @see @link https://schema.org/AnimalShelter
 *
 * @remarks
 * Animal shelter.
 *
 **/
export interface AnimalShelter extends Omit<LocalBusiness, "@type"> {
  "@type"?: "AnimalShelter";
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
export interface Answer extends Omit<Comment, "@type"> {
  "@type"?: "Answer";
  answerExplanation?: Comment | WebContent;
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
export interface Apartment extends Omit<Accommodation, "@type"> {
  "@type"?: "Apartment";
  numberOfRooms?: Number | QuantitativeValue;
  occupancy?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/ApartmentComplex
 *
 * @remarks
 * Residence type: Apartment complex.
 *
 **/
export interface ApartmentComplex extends Omit<Residence, "@type"> {
  "@type"?: "ApartmentComplex";
  numberOfAccommodationUnits?: QuantitativeValue;
  numberOfAvailableAccommodationUnits?: QuantitativeValue;
  numberOfBedrooms?: QuantitativeValue | Number;
  petsAllowed?: Text | Boolean;
  tourBookingPage?: URL;
}

/**
 *
 * @see @link https://schema.org/APIReference
 *
 * @remarks
 * Reference documentation for application programming interfaces (APIs).
 *
 **/
export interface APIReference extends Omit<TechArticle, "@type"> {
  "@type"?: "APIReference";
  assembly?: Text;
  assemblyVersion?: Text;
  executableLibraryName?: Text;
  programmingModel?: Text;
  targetPlatform?: Text;
}

/**
 *
 * @see @link https://schema.org/AppendAction
 *
 * @remarks
 * The act of inserting at the end if an ordered collection.
 *
 **/
export interface AppendAction extends Omit<InsertAction, "@type"> {
  "@type"?: "AppendAction";
}

/**
 *
 * @see @link https://schema.org/ApplyAction
 *
 * @remarks
 * The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 *
 **/
export interface ApplyAction extends Omit<OrganizeAction, "@type"> {
  "@type"?: "ApplyAction";
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
export interface ApprovedIndication extends Omit<MedicalIndication, "@type"> {
  "@type"?: "ApprovedIndication";
}

/**
 *
 * @see @link https://schema.org/Aquarium
 *
 * @remarks
 * Aquarium.
 *
 **/
export interface Aquarium extends Omit<CivicStructure, "@type"> {
  "@type"?: "Aquarium";
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
export interface ArchiveComponent extends Omit<CreativeWork, "@type"> {
  "@type"?: "ArchiveComponent";
  holdingArchive?: ArchiveOrganization;
  itemLocation?: PostalAddress | Place | Text;
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
export interface ArchiveOrganization extends Omit<LocalBusiness, "@type"> {
  "@type"?: "ArchiveOrganization";
  archiveHeld?: ArchiveComponent;
}

/**
 *
 * @see @link https://schema.org/ArriveAction
 *
 * @remarks
 * The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.
 *
 **/
export interface ArriveAction extends Omit<MoveAction, "@type"> {
  "@type"?: "ArriveAction";
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
export interface Artery extends Omit<Vessel, "@type"> {
  "@type"?: "Artery";
  arterialBranch?: AnatomicalStructure;
  supplyTo?: AnatomicalStructure;
}

/**
 *
 * @see @link https://schema.org/ArtGallery
 *
 * @remarks
 * An art gallery.
 *
 **/
export interface ArtGallery extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "ArtGallery";
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
export interface Article extends Omit<CreativeWork, "@type"> {
  "@type"?: "Article";
  articleBody?: Text;
  articleSection?: Text;
  backstory?: CreativeWork | Text;
  pageEnd?: Text | Integer;
  pageStart?: Text | Integer;
  pagination?: Text;
  speakable?: SpeakableSpecification | URL;
  wordCount?: Integer;
}

/**
 *
 * @see @link https://schema.org/AskAction
 *
 * @remarks
 * The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 *
 **/
export interface AskAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "AskAction";
  question?: Question;
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
export interface AskPublicNewsArticle extends Omit<NewsArticle, "@type"> {
  "@type"?: "AskPublicNewsArticle";
}

/**
 *
 * @see @link https://schema.org/AssessAction
 *
 * @remarks
 * The act of forming one's opinion, reaction or sentiment.
 *
 **/
export interface AssessAction extends Omit<Action, "@type"> {
  "@type"?: "AssessAction";
}

/**
 *
 * @see @link https://schema.org/AssignAction
 *
 * @remarks
 * The act of allocating an action/event/task to some destination (someone or something).
 *
 **/
export interface AssignAction extends Omit<AllocateAction, "@type"> {
  "@type"?: "AssignAction";
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
export interface Atlas extends Omit<CreativeWork, "@type"> {
  "@type"?: "Atlas";
}

/**
 *
 * @see @link https://schema.org/Attorney
 *
 * @remarks
 * Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous.
 *
 **/
export interface Attorney extends Omit<LegalService, "@type"> {
  "@type"?: "Attorney";
}

/**
 *
 * @see @link https://schema.org/Audience
 *
 * @remarks
 * Intended audience for an item, i.e. the group for whom the item was created.
 *
 **/
export interface Audience extends Omit<Intangible, "@type"> {
  "@type"?: "Audience";
  audienceType?: Text;
  geographicArea?: AdministrativeArea;
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
export interface Audiobook
  extends Omit<Book, "@type">,
    Omit<AudioObject, "@type"> {
  "@type"?: "Audiobook";
  duration?: Duration;
  readBy?: Person;
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
export interface AudioObject extends Omit<MediaObject, "@type"> {
  "@type"?: "AudioObject";
  caption?: Text | MediaObject;
  transcript?: Text;
}

/**
 *
 * @see @link https://schema.org/AuthorizeAction
 *
 * @remarks
 * The act of granting permission to an object.
 *
 **/
export interface AuthorizeAction extends Omit<AllocateAction, "@type"> {
  "@type"?: "AuthorizeAction";
  recipient?: Organization | ContactPoint | Person | Audience;
}

/**
 *
 * @see @link https://schema.org/AutoBodyShop
 *
 * @remarks
 * Auto body shop.
 *
 **/
export interface AutoBodyShop extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "AutoBodyShop";
}

/**
 *
 * @see @link https://schema.org/AutoDealer
 *
 * @remarks
 * An car dealership.
 *
 **/
export interface AutoDealer extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "AutoDealer";
}

/**
 *
 * @see @link https://schema.org/AutomatedTeller
 *
 * @remarks
 * ATM/cash machine.
 *
 **/
export interface AutomatedTeller extends Omit<FinancialService, "@type"> {
  "@type"?: "AutomatedTeller";
}

/**
 *
 * @see @link https://schema.org/AutomotiveBusiness
 *
 * @remarks
 * Car repair, sales, or parts.
 *
 **/
export interface AutomotiveBusiness extends Omit<LocalBusiness, "@type"> {
  "@type"?: "AutomotiveBusiness";
}

/**
 *
 * @see @link https://schema.org/AutoPartsStore
 *
 * @remarks
 * An auto parts store.
 *
 **/
export interface AutoPartsStore
  extends Omit<AutomotiveBusiness, "@type">,
    Omit<Store, "@type"> {
  "@type"?: "AutoPartsStore";
}

/**
 *
 * @see @link https://schema.org/AutoRental
 *
 * @remarks
 * A car rental business.
 *
 **/
export interface AutoRental extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "AutoRental";
}

/**
 *
 * @see @link https://schema.org/AutoRepair
 *
 * @remarks
 * Car repair business.
 *
 **/
export interface AutoRepair extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "AutoRepair";
}

/**
 *
 * @see @link https://schema.org/AutoWash
 *
 * @remarks
 * A car wash business.
 *
 **/
export interface AutoWash extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "AutoWash";
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
export interface BackgroundNewsArticle extends Omit<NewsArticle, "@type"> {
  "@type"?: "BackgroundNewsArticle";
}

/**
 *
 * @see @link https://schema.org/Bakery
 *
 * @remarks
 * A bakery.
 *
 **/
export interface Bakery extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "Bakery";
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
export interface BankAccount extends Omit<FinancialProduct, "@type"> {
  "@type"?: "BankAccount";
  accountMinimumInflow?: MonetaryAmount;
  accountOverdraftLimit?: MonetaryAmount;
  bankAccountType?: URL | Text;
}

/**
 *
 * @see @link https://schema.org/BankOrCreditUnion
 *
 * @remarks
 * Bank or credit union.
 *
 **/
export interface BankOrCreditUnion extends Omit<FinancialService, "@type"> {
  "@type"?: "BankOrCreditUnion";
}

/**
 *
 * @see @link https://schema.org/Barcode
 *
 * @remarks
 * An image of a visual machine-readable code such as a barcode or QR code.
 *
 **/
export interface Barcode extends Omit<ImageObject, "@type"> {
  "@type"?: "Barcode";
}

/**
 *
 * @see @link https://schema.org/BarOrPub
 *
 * @remarks
 * A bar or pub.
 *
 **/
export interface BarOrPub extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "BarOrPub";
}

/**
 *
 * @see @link https://schema.org/Beach
 *
 * @remarks
 * Beach.
 *
 **/
export interface Beach extends Omit<CivicStructure, "@type"> {
  "@type"?: "Beach";
}

/**
 *
 * @see @link https://schema.org/BeautySalon
 *
 * @remarks
 * Beauty salon.
 *
 **/
export interface BeautySalon extends Omit<HealthAndBeautyBusiness, "@type"> {
  "@type"?: "BeautySalon";
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
export interface BedAndBreakfast extends Omit<LodgingBusiness, "@type"> {
  "@type"?: "BedAndBreakfast";
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
export interface BedDetails extends Omit<Intangible, "@type"> {
  "@type"?: "BedDetails";
  numberOfBeds?: Number;
  typeOfBed?: Text | BedType;
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
export interface BedType extends Omit<QualitativeValue, "@type"> {
  "@type"?: "BedType";
}

/**
 *
 * @see @link https://schema.org/BefriendAction
 *
 * @remarks
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 *
 **/
export interface BefriendAction extends Omit<InteractAction, "@type"> {
  "@type"?: "BefriendAction";
}

/**
 *
 * @see @link https://schema.org/BikeStore
 *
 * @remarks
 * A bike store.
 *
 **/
export interface BikeStore extends Omit<Store, "@type"> {
  "@type"?: "BikeStore";
}

/**
 *
 * @see @link https://schema.org/Blog
 *
 * @remarks
 * A blog.
 *
 **/
export interface Blog extends Omit<CreativeWork, "@type"> {
  "@type"?: "Blog";
  blogPost?: BlogPosting;
  blogPosts?: Array<BlogPosting>;
  issn?: Text;
}

/**
 *
 * @see @link https://schema.org/BlogPosting
 *
 * @remarks
 * A blog post.
 *
 **/
export interface BlogPosting extends Omit<SocialMediaPosting, "@type"> {
  "@type"?: "BlogPosting";
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
export interface BloodTest extends Omit<MedicalTest, "@type"> {
  "@type"?: "BloodTest";
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
export interface BoatReservation extends Omit<Reservation, "@type"> {
  "@type"?: "BoatReservation";
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
export interface BoatTerminal extends Omit<CivicStructure, "@type"> {
  "@type"?: "BoatTerminal";
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
export interface BoatTrip extends Omit<Trip, "@type"> {
  "@type"?: "BoatTrip";
  arrivalBoatTerminal?: BoatTerminal;
  departureBoatTerminal?: BoatTerminal;
}

/**
 *
 * @see @link https://schema.org/BodyOfWater
 *
 * @remarks
 * A body of water, such as a sea, ocean, or lake.
 *
 **/
export interface BodyOfWater extends Omit<Landform, "@type"> {
  "@type"?: "BodyOfWater";
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
export interface Bone extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Bone";
}

/**
 *
 * @see @link https://schema.org/Book
 *
 * @remarks
 * A book.
 *
 **/
export interface Book extends Omit<CreativeWork, "@type"> {
  "@type"?: "Book";
  abridged?: Boolean;
  bookEdition?: Text;
  bookFormat?: BookFormatType;
  illustrator?: Person;
  isbn?: Text;
  numberOfPages?: Integer;
}

/**
 *
 * @see @link https://schema.org/BookmarkAction
 *
 * @remarks
 * An agent bookmarks/flags/labels/tags/marks an object.
 *
 **/
export interface BookmarkAction extends Omit<OrganizeAction, "@type"> {
  "@type"?: "BookmarkAction";
}

/**
 *
 * @see @link https://schema.org/BookSeries
 *
 * @remarks
 * A series of books. Included books can be indicated with the hasPart property.
 *
 **/
export interface BookSeries extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "BookSeries";
}

/**
 *
 * @see @link https://schema.org/BookStore
 *
 * @remarks
 * A bookstore.
 *
 **/
export interface BookStore extends Omit<Store, "@type"> {
  "@type"?: "BookStore";
}

/**
 *
 * @see @link https://schema.org/BorrowAction
 *
 * @remarks
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 *
 **/
export interface BorrowAction extends Omit<TransferAction, "@type"> {
  "@type"?: "BorrowAction";
  lender?: Organization | Person;
}

/**
 *
 * @see @link https://schema.org/BowlingAlley
 *
 * @remarks
 * A bowling alley.
 *
 **/
export interface BowlingAlley extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "BowlingAlley";
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
export interface BrainStructure extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "BrainStructure";
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
export interface Brand extends Omit<Intangible, "@type"> {
  "@type"?: "Brand";
  aggregateRating?: AggregateRating;
  logo?: ImageObject | URL;
  review?: Review;
  slogan?: Text;
}

/**
*
* @see @link https://schema.org/BreadcrumbList
*
* @remarks
* A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.\n\nThe [[position]] property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an [[itemListOrder]] of [[ItemListOrderAscending]] (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
      
*
**/
export interface BreadcrumbList<T = Text> extends Omit<ItemList<T>, "@type"> {
  "@type"?: "BreadcrumbList";
}

/**
 *
 * @see @link https://schema.org/Brewery
 *
 * @remarks
 * Brewery.
 *
 **/
export interface Brewery extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "Brewery";
}

/**
 *
 * @see @link https://schema.org/Bridge
 *
 * @remarks
 * A bridge.
 *
 **/
export interface Bridge extends Omit<CivicStructure, "@type"> {
  "@type"?: "Bridge";
}

/**
 *
 * @see @link https://schema.org/BroadcastChannel
 *
 * @remarks
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 *
 **/
export interface BroadcastChannel extends Omit<Intangible, "@type"> {
  "@type"?: "BroadcastChannel";
  broadcastChannelId?: Text;
  broadcastFrequency?: Text | BroadcastFrequencySpecification;
  broadcastServiceTier?: Text;
  genre?: URL | Text;
  inBroadcastLineup?: CableOrSatelliteService;
  providesBroadcastService?: BroadcastService;
}

/**
 *
 * @see @link https://schema.org/BroadcastEvent
 *
 * @remarks
 * An over the air or online broadcast event.
 *
 **/
export interface BroadcastEvent extends Omit<PublicationEvent, "@type"> {
  "@type"?: "BroadcastEvent";
  broadcastOfEvent?: Event;
  isLiveBroadcast?: Boolean;
  subtitleLanguage?: Text | Language;
  videoFormat?: Text;
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
export interface BroadcastFrequencySpecification
  extends Omit<Intangible, "@type"> {
  "@type"?: "BroadcastFrequencySpecification";
  broadcastFrequencyValue?: QuantitativeValue | Number;
  broadcastSignalModulation?: Text | QualitativeValue;
  broadcastSubChannel?: Text;
}

/**
 *
 * @see @link https://schema.org/BroadcastService
 *
 * @remarks
 * A delivery service through which content is provided via broadcast over the air or online.
 *
 **/
export interface BroadcastService extends Omit<Service, "@type"> {
  "@type"?: "BroadcastService";
  area?: Place;
  broadcastAffiliateOf?: Organization;
  broadcastDisplayName?: Text;
  broadcaster?: Organization;
  broadcastFrequency?: Text | BroadcastFrequencySpecification;
  broadcastTimezone?: Text;
  callSign?: Text;
  hasBroadcastChannel?: BroadcastChannel;
  inLanguage?: Text | Language;
  parentService?: BroadcastService;
  videoFormat?: Text;
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
export interface BrokerageAccount extends Omit<InvestmentOrDeposit, "@type"> {
  "@type"?: "BrokerageAccount";
}

/**
 *
 * @see @link https://schema.org/BuddhistTemple
 *
 * @remarks
 * A Buddhist temple.
 *
 **/
export interface BuddhistTemple extends Omit<PlaceOfWorship, "@type"> {
  "@type"?: "BuddhistTemple";
}

/**
 *
 * @see @link https://schema.org/BusinessAudience
 *
 * @remarks
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 *
 **/
export interface BusinessAudience extends Omit<Audience, "@type"> {
  "@type"?: "BusinessAudience";
  numberOfEmployees?: QuantitativeValue;
  yearlyRevenue?: QuantitativeValue;
  yearsInOperation?: QuantitativeValue;
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
export interface BusinessEntityType extends Omit<Enumeration, "@type"> {
  "@type"?: "BusinessEntityType";
}

/**
 *
 * @see @link https://schema.org/BusinessEvent
 *
 * @remarks
 * Event type: Business event.
 *
 **/
export interface BusinessEvent extends Omit<Event, "@type"> {
  "@type"?: "BusinessEvent";
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
export interface BusinessFunction extends Omit<Enumeration, "@type"> {
  "@type"?: "BusinessFunction";
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
export interface BusOrCoach extends Omit<Vehicle, "@type"> {
  "@type"?: "BusOrCoach";
  acrissCode?: Text;
  roofLoad?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/BusReservation
 *
 * @remarks
 * A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 **/
export interface BusReservation extends Omit<Reservation, "@type"> {
  "@type"?: "BusReservation";
}

/**
 *
 * @see @link https://schema.org/BusStation
 *
 * @remarks
 * A bus station.
 *
 **/
export interface BusStation extends Omit<CivicStructure, "@type"> {
  "@type"?: "BusStation";
}

/**
 *
 * @see @link https://schema.org/BusStop
 *
 * @remarks
 * A bus stop.
 *
 **/
export interface BusStop extends Omit<CivicStructure, "@type"> {
  "@type"?: "BusStop";
}

/**
 *
 * @see @link https://schema.org/BusTrip
 *
 * @remarks
 * A trip on a commercial bus line.
 *
 **/
export interface BusTrip extends Omit<Trip, "@type"> {
  "@type"?: "BusTrip";
  arrivalBusStop?: BusStop | BusStation;
  busName?: Text;
  busNumber?: Text;
  departureBusStop?: BusStation | BusStop;
}

/**
 *
 * @see @link https://schema.org/BuyAction
 *
 * @remarks
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 *
 **/
export interface BuyAction extends Omit<TradeAction, "@type"> {
  "@type"?: "BuyAction";
  seller?: Organization | Person;
  vendor?: Organization | Person;
  warrantyPromise?: WarrantyPromise;
}

/**
 *
 * @see @link https://schema.org/CableOrSatelliteService
 *
 * @remarks
 * A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 *
 **/
export interface CableOrSatelliteService extends Omit<Service, "@type"> {
  "@type"?: "CableOrSatelliteService";
}

/**
 *
 * @see @link https://schema.org/CafeOrCoffeeShop
 *
 * @remarks
 * A cafe or coffee shop.
 *
 **/
export interface CafeOrCoffeeShop extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "CafeOrCoffeeShop";
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
export interface Campground
  extends Omit<LodgingBusiness, "@type">,
    Omit<CivicStructure, "@type"> {
  "@type"?: "Campground";
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
export interface CampingPitch extends Omit<Accommodation, "@type"> {
  "@type"?: "CampingPitch";
}

/**
 *
 * @see @link https://schema.org/Canal
 *
 * @remarks
 * A canal, like the Panama Canal.
 *
 **/
export interface Canal extends Omit<BodyOfWater, "@type"> {
  "@type"?: "Canal";
}

/**
 *
 * @see @link https://schema.org/CancelAction
 *
 * @remarks
 * The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction.
 *
 **/
export interface CancelAction extends Omit<PlanAction, "@type"> {
  "@type"?: "CancelAction";
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
export interface Car extends Omit<Vehicle, "@type"> {
  "@type"?: "Car";
  acrissCode?: Text;
  roofLoad?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/Casino
 *
 * @remarks
 * A casino.
 *
 **/
export interface Casino extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "Casino";
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
export interface CategoryCode extends Omit<DefinedTerm, "@type"> {
  "@type"?: "CategoryCode";
  codeValue?: Text;
  inCodeSet?: URL | CategoryCodeSet;
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
export interface CategoryCodeSet extends Omit<DefinedTermSet, "@type"> {
  "@type"?: "CategoryCodeSet";
  hasCategoryCode?: CategoryCode;
}

/**
 *
 * @see @link https://schema.org/CatholicChurch
 *
 * @remarks
 * A Catholic church.
 *
 **/
export interface CatholicChurch extends Omit<Church, "@type"> {
  "@type"?: "CatholicChurch";
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
export interface CDCPMDRecord extends Omit<StructuredValue, "@type"> {
  "@type"?: "CDCPMDRecord";
  cvdCollectionDate?: Text | DateTime;
  cvdFacilityCounty?: Text;
  cvdFacilityId?: Text;
  cvdNumBeds?: Number;
  cvdNumBedsOcc?: Number;
  cvdNumC19Died?: Number;
  cvdNumC19HOPats?: Number;
  cvdNumC19HospPats?: Number;
  cvdNumC19MechVentPats?: Number;
  cvdNumC19OFMechVentPats?: Number;
  cvdNumC19OverflowPats?: Number;
  cvdNumICUBeds?: Number;
  cvdNumICUBedsOcc?: Number;
  cvdNumTotBeds?: Number;
  cvdNumVent?: Number;
  cvdNumVentUse?: Number;
  datePosted?: Date | DateTime;
}

/**
 *
 * @see @link https://schema.org/Cemetery
 *
 * @remarks
 * A graveyard.
 *
 **/
export interface Cemetery extends Omit<CivicStructure, "@type"> {
  "@type"?: "Cemetery";
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
export interface Chapter extends Omit<CreativeWork, "@type"> {
  "@type"?: "Chapter";
  pageEnd?: Text | Integer;
  pageStart?: Text | Integer;
  pagination?: Text;
}

/**
 *
 * @see @link https://schema.org/CheckAction
 *
 * @remarks
 * An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
 *
 **/
export interface CheckAction extends Omit<FindAction, "@type"> {
  "@type"?: "CheckAction";
}

/**
 *
 * @see @link https://schema.org/CheckInAction
 *
 * @remarks
 * The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).\n\nRelated actions:\n\n* [[CheckOutAction]]: The antonym of CheckInAction.\n* [[ArriveAction]]: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.\n* [[ConfirmAction]]: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the *start* of a previously reserved service rather than its validity/existence.
 *
 **/
export interface CheckInAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "CheckInAction";
}

/**
 *
 * @see @link https://schema.org/CheckOutAction
 *
 * @remarks
 * The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 *
 **/
export interface CheckOutAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "CheckOutAction";
}

/**
 *
 * @see @link https://schema.org/CheckoutPage
 *
 * @remarks
 * Web page type: Checkout page.
 *
 **/
export interface CheckoutPage extends Omit<WebPage, "@type"> {
  "@type"?: "CheckoutPage";
}

/**
 *
 * @see @link https://schema.org/ChildCare
 *
 * @remarks
 * A Childcare center.
 *
 **/
export interface ChildCare extends Omit<LocalBusiness, "@type"> {
  "@type"?: "ChildCare";
}

/**
 *
 * @see @link https://schema.org/ChildrensEvent
 *
 * @remarks
 * Event type: Children's event.
 *
 **/
export interface ChildrensEvent extends Omit<Event, "@type"> {
  "@type"?: "ChildrensEvent";
}

/**
 *
 * @see @link https://schema.org/ChooseAction
 *
 * @remarks
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 *
 **/
export interface ChooseAction extends Omit<AssessAction, "@type"> {
  "@type"?: "ChooseAction";
  actionOption?: Text | Thing;
  option?: Thing | Text;
}

/**
 *
 * @see @link https://schema.org/Church
 *
 * @remarks
 * A church.
 *
 **/
export interface Church extends Omit<PlaceOfWorship, "@type"> {
  "@type"?: "Church";
}

/**
 *
 * @see @link https://schema.org/City
 *
 * @remarks
 * A city or town.
 *
 **/
export interface City extends Omit<AdministrativeArea, "@type"> {
  "@type"?: "City";
}

/**
 *
 * @see @link https://schema.org/CityHall
 *
 * @remarks
 * A city hall.
 *
 **/
export interface CityHall extends Omit<GovernmentBuilding, "@type"> {
  "@type"?: "CityHall";
}

/**
 *
 * @see @link https://schema.org/CivicStructure
 *
 * @remarks
 * A public structure, such as a town hall or concert hall.
 *
 **/
export interface CivicStructure extends Omit<Place, "@type"> {
  "@type"?: "CivicStructure";
  openingHours?: Text;
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
export interface Claim extends Omit<CreativeWork, "@type"> {
  "@type"?: "Claim";
  appearance?: CreativeWork;
  firstAppearance?: CreativeWork;
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
export interface ClaimReview extends Omit<Review, "@type"> {
  "@type"?: "ClaimReview";
  claimReviewed?: Text;
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
export interface Class extends Omit<Intangible, "@type"> {
  "@type"?: "Class";
}

/**
 *
 * @see @link https://schema.org/Clip
 *
 * @remarks
 * A short TV or radio program or a segment/part of a program.
 *
 **/
export interface Clip extends Omit<CreativeWork, "@type"> {
  "@type"?: "Clip";
  actor?: Person;
  actors?: Array<Person>;
  clipNumber?: Integer | Text;
  director?: Person;
  directors?: Array<Person>;
  endOffset?: HyperTocEntry | Number;
  musicBy?: Person | MusicGroup;
  partOfEpisode?: Episode;
  partOfSeason?: CreativeWorkSeason;
  partOfSeries?: CreativeWorkSeries;
  startOffset?: HyperTocEntry | Number;
}

/**
 *
 * @see @link https://schema.org/ClothingStore
 *
 * @remarks
 * A clothing store.
 *
 **/
export interface ClothingStore extends Omit<Store, "@type"> {
  "@type"?: "ClothingStore";
}

/**
 *
 * @see @link https://schema.org/Code
 *
 * @remarks
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 **/
export interface Code extends Omit<CreativeWork, "@type"> {
  "@type"?: "Code";
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
export interface Collection extends Omit<CreativeWork, "@type"> {
  "@type"?: "Collection";
  collectionSize?: Integer;
}

/**
 *
 * @see @link https://schema.org/CollectionPage
 *
 * @remarks
 * Web page type: Collection page.
 *
 **/
export interface CollectionPage extends Omit<WebPage, "@type"> {
  "@type"?: "CollectionPage";
}

/**
 *
 * @see @link https://schema.org/CollegeOrUniversity
 *
 * @remarks
 * A college, university, or other third-level educational institution.
 *
 **/
export interface CollegeOrUniversity
  extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "CollegeOrUniversity";
}

/**
 *
 * @see @link https://schema.org/ComedyClub
 *
 * @remarks
 * A comedy club.
 *
 **/
export interface ComedyClub extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "ComedyClub";
}

/**
 *
 * @see @link https://schema.org/ComedyEvent
 *
 * @remarks
 * Event type: Comedy event.
 *
 **/
export interface ComedyEvent extends Omit<Event, "@type"> {
  "@type"?: "ComedyEvent";
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
export interface ComicCoverArt
  extends Omit<ComicStory, "@type">,
    Omit<CoverArt, "@type"> {
  "@type"?: "ComicCoverArt";
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
export interface ComicIssue extends Omit<PublicationIssue, "@type"> {
  "@type"?: "ComicIssue";
  artist?: Person;
  colorist?: Person;
  inker?: Person;
  letterer?: Person;
  penciler?: Person;
  variantCover?: Text;
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
export interface ComicSeries extends Omit<Periodical, "@type"> {
  "@type"?: "ComicSeries";
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
export interface ComicStory extends Omit<CreativeWork, "@type"> {
  "@type"?: "ComicStory";
  artist?: Person;
  colorist?: Person;
  inker?: Person;
  letterer?: Person;
  penciler?: Person;
}

/**
 *
 * @see @link https://schema.org/Comment
 *
 * @remarks
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 *
 **/
export interface Comment extends Omit<CreativeWork, "@type"> {
  "@type"?: "Comment";
  downvoteCount?: Integer;
  parentItem?: Comment;
  upvoteCount?: Integer;
}

/**
 *
 * @see @link https://schema.org/CommentAction
 *
 * @remarks
 * The act of generating a comment about a subject.
 *
 **/
export interface CommentAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "CommentAction";
  resultComment?: Comment;
}

/**
 *
 * @see @link https://schema.org/CommunicateAction
 *
 * @remarks
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 *
 **/
export interface CommunicateAction extends Omit<InteractAction, "@type"> {
  "@type"?: "CommunicateAction";
  about?: Thing;
  inLanguage?: Text | Language;
  language?: Language;
  recipient?: Organization | ContactPoint | Person | Audience;
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
export interface CompleteDataFeed<T = Text> extends Omit<DataFeed<T>, "@type"> {
  "@type"?: "CompleteDataFeed";
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
export interface CompoundPriceSpecification
  extends Omit<PriceSpecification, "@type"> {
  "@type"?: "CompoundPriceSpecification";
  priceComponent?: UnitPriceSpecification;
  priceType?: PriceTypeEnumeration | Text;
}

/**
 *
 * @see @link https://schema.org/ComputerLanguage
 *
 * @remarks
 * This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
 *
 **/
export interface ComputerLanguage extends Omit<Intangible, "@type"> {
  "@type"?: "ComputerLanguage";
}

/**
 *
 * @see @link https://schema.org/ComputerStore
 *
 * @remarks
 * A computer store.
 *
 **/
export interface ComputerStore extends Omit<Store, "@type"> {
  "@type"?: "ComputerStore";
}

/**
 *
 * @see @link https://schema.org/ConfirmAction
 *
 * @remarks
 * The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 *
 **/
export interface ConfirmAction extends Omit<InformAction, "@type"> {
  "@type"?: "ConfirmAction";
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
export interface Consortium extends Omit<Organization, "@type"> {
  "@type"?: "Consortium";
}

/**
 *
 * @see @link https://schema.org/ConsumeAction
 *
 * @remarks
 * The act of ingesting information/resources/food.
 *
 **/
export interface ConsumeAction extends Omit<Action, "@type"> {
  "@type"?: "ConsumeAction";
  actionAccessibilityRequirement?: ActionAccessSpecification;
  expectsAcceptanceOf?: Offer;
}

/**
 *
 * @see @link https://schema.org/ContactPage
 *
 * @remarks
 * Web page type: Contact page.
 *
 **/
export interface ContactPage extends Omit<WebPage, "@type"> {
  "@type"?: "ContactPage";
}

/**
 *
 * @see @link https://schema.org/ContactPoint
 *
 * @remarks
 * A contact point&#x2014;for example, a Customer Complaints department.
 *
 **/
export interface ContactPoint extends Omit<StructuredValue, "@type"> {
  "@type"?: "ContactPoint";
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  availableLanguage?: Language | Text;
  contactOption?: ContactPointOption;
  contactType?: Text;
  email?: Text;
  faxNumber?: Text;
  hoursAvailable?: OpeningHoursSpecification;
  productSupported?: Product | Text;
  serviceArea?: Place | AdministrativeArea | GeoShape;
  telephone?: Text;
}

/**
 *
 * @see @link https://schema.org/Continent
 *
 * @remarks
 * One of the continents (for example, Europe or Africa).
 *
 **/
export interface Continent extends Omit<Landform, "@type"> {
  "@type"?: "Continent";
}

/**
 *
 * @see @link https://schema.org/ControlAction
 *
 * @remarks
 * An agent controls a device or application.
 *
 **/
export interface ControlAction extends Omit<Action, "@type"> {
  "@type"?: "ControlAction";
}

/**
 *
 * @see @link https://schema.org/ConvenienceStore
 *
 * @remarks
 * A convenience store.
 *
 **/
export interface ConvenienceStore extends Omit<Store, "@type"> {
  "@type"?: "ConvenienceStore";
}

/**
 *
 * @see @link https://schema.org/Conversation
 *
 * @remarks
 * One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.
 *
 **/
export interface Conversation extends Omit<CreativeWork, "@type"> {
  "@type"?: "Conversation";
}

/**
 *
 * @see @link https://schema.org/CookAction
 *
 * @remarks
 * The act of producing/preparing food.
 *
 **/
export interface CookAction extends Omit<CreateAction, "@type"> {
  "@type"?: "CookAction";
  foodEstablishment?: Place | FoodEstablishment;
  foodEvent?: FoodEvent;
  recipe?: Recipe;
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
export interface Corporation extends Omit<Organization, "@type"> {
  "@type"?: "Corporation";
  tickerSymbol?: Text;
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
export interface CorrectionComment extends Omit<Comment, "@type"> {
  "@type"?: "CorrectionComment";
}

/**
 *
 * @see @link https://schema.org/Country
 *
 * @remarks
 * A country.
 *
 **/
export interface Country extends Omit<AdministrativeArea, "@type"> {
  "@type"?: "Country";
}

/**
 *
 * @see @link https://schema.org/Course
 *
 * @remarks
 * A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 *
 **/
export interface Course
  extends Omit<CreativeWork, "@type">,
    Omit<LearningResource, "@type"> {
  "@type"?: "Course";
  courseCode?: Text;
  coursePrerequisites?: Text | AlignmentObject | Course;
  educationalCredentialAwarded?: URL | Text | EducationalOccupationalCredential;
  hasCourseInstance?: CourseInstance;
  numberOfCredits?: StructuredValue | Integer;
  occupationalCredentialAwarded?:
    | URL
    | Text
    | EducationalOccupationalCredential;
}

/**
 *
 * @see @link https://schema.org/CourseInstance
 *
 * @remarks
 * An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 *
 **/
export interface CourseInstance extends Omit<Event, "@type"> {
  "@type"?: "CourseInstance";
  courseMode?: Text | URL;
  courseWorkload?: Text;
  instructor?: Person;
}

/**
 *
 * @see @link https://schema.org/Courthouse
 *
 * @remarks
 * A courthouse.
 *
 **/
export interface Courthouse extends Omit<GovernmentBuilding, "@type"> {
  "@type"?: "Courthouse";
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
export interface CoverArt extends Omit<VisualArtwork, "@type"> {
  "@type"?: "CoverArt";
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
export interface CovidTestingFacility extends Omit<MedicalClinic, "@type"> {
  "@type"?: "CovidTestingFacility";
}

/**
 *
 * @see @link https://schema.org/CreateAction
 *
 * @remarks
 * The act of deliberately creating/producing/generating/building a result out of the agent.
 *
 **/
export interface CreateAction extends Omit<Action, "@type"> {
  "@type"?: "CreateAction";
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
export interface CreativeWork extends Omit<Thing, "@type"> {
  "@type"?: "CreativeWork";
  about?: Thing;
  abstract?: Text;
  accessibilityAPI?: Text;
  accessibilityControl?: Text;
  accessibilityFeature?: Text;
  accessibilityHazard?: Text;
  accessibilitySummary?: Text;
  accessMode?: Text;
  accessModeSufficient?: ItemList;
  accountablePerson?: Person;
  acquireLicensePage?: URL | CreativeWork;
  aggregateRating?: AggregateRating;
  alternativeHeadline?: Text;
  assesses?: DefinedTerm | Text;
  associatedMedia?: MediaObject;
  audience?: Audience;
  audio?: Clip | AudioObject | MusicRecording;
  author?: Person | Organization;
  award?: Text;
  awards?: Array<Text>;
  character?: Person;
  citation?: Text | CreativeWork;
  comment?: Comment;
  commentCount?: Integer;
  conditionsOfAccess?: Text;
  contentLocation?: Place;
  contentRating?: Text | Rating;
  contentReferenceTime?: DateTime;
  contributor?: Organization | Person;
  copyrightHolder?: Organization | Person;
  copyrightNotice?: Text;
  copyrightYear?: Number;
  correction?: CorrectionComment | Text | URL;
  creativeWorkStatus?: Text | DefinedTerm;
  creator?: Organization | Person;
  creditText?: Text;
  dateCreated?: DateTime | Date;
  dateModified?: DateTime | Date;
  datePublished?: Date | DateTime;
  discussionUrl?: URL;
  editEIDR?: Text | URL;
  editor?: Person;
  educationalAlignment?: AlignmentObject;
  educationalLevel?: URL | DefinedTerm | Text;
  educationalUse?: Text | DefinedTerm;
  encoding?: MediaObject;
  encodingFormat?: Text | URL;
  encodings?: Array<MediaObject>;
  exampleOfWork?: CreativeWork;
  expires?: Date;
  fileFormat?: Text | URL;
  funder?: Organization | Person;
  genre?: URL | Text;
  hasPart?: CreativeWork;
  headline?: Text;
  inLanguage?: Text | Language;
  interactionStatistic?: InteractionCounter;
  interactivityType?: Text;
  isAccessibleForFree?: Boolean;
  isBasedOn?: CreativeWork | URL | Product;
  isBasedOnUrl?: Product | URL | CreativeWork;
  isFamilyFriendly?: Boolean;
  isPartOf?: CreativeWork | URL;
  keywords?: URL | DefinedTerm | Text;
  learningResourceType?: Text | DefinedTerm;
  license?: CreativeWork | URL;
  locationCreated?: Place;
  mainEntity?: Thing;
  maintainer?: Person | Organization;
  material?: Product | Text | URL;
  materialExtent?: Text | QuantitativeValue;
  mentions?: Thing;
  offers?: Offer | Demand;
  pattern?: Text | DefinedTerm;
  position?: Text | Integer;
  producer?: Organization | Person;
  provider?: Organization | Person;
  publication?: PublicationEvent;
  publisher?: Organization | Person;
  publisherImprint?: Organization;
  publishingPrinciples?: URL | CreativeWork;
  recordedAt?: Event;
  releasedEvent?: PublicationEvent;
  review?: Review;
  reviews?: Array<Review>;
  schemaVersion?: Text | URL;
  sdDatePublished?: Date;
  sdLicense?: URL | CreativeWork;
  sdPublisher?: Organization | Person;
  size?: DefinedTerm | SizeSpecification | QuantitativeValue | Text;
  sourceOrganization?: Organization;
  spatial?: Place;
  spatialCoverage?: Place;
  sponsor?: Person | Organization;
  teaches?: Text | DefinedTerm;
  temporal?: DateTime | Text;
  temporalCoverage?: Text | DateTime | URL;
  text?: Text;
  thumbnailUrl?: URL;
  timeRequired?: Duration;
  translationOfWork?: CreativeWork;
  translator?: Person | Organization;
  typicalAgeRange?: Text;
  usageInfo?: CreativeWork | URL;
  version?: Number | Text;
  video?: Clip | VideoObject;
  workExample?: CreativeWork;
  workTranslation?: CreativeWork;
}

/**
 *
 * @see @link https://schema.org/CreativeWorkSeason
 *
 * @remarks
 * A media season e.g. tv, radio, video game etc.
 *
 **/
export interface CreativeWorkSeason extends Omit<CreativeWork, "@type"> {
  "@type"?: "CreativeWorkSeason";
  actor?: Person;
  director?: Person;
  endDate?: Date | DateTime;
  episode?: Episode;
  episodes?: Array<Episode>;
  numberOfEpisodes?: Integer;
  partOfSeries?: CreativeWorkSeries;
  productionCompany?: Organization;
  seasonNumber?: Integer | Text;
  startDate?: DateTime | Date;
  trailer?: VideoObject;
}

/**
*
* @see @link https://schema.org/CreativeWorkSeries
*
* @remarks
* A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
	  
*
**/
export interface CreativeWorkSeries
  extends Omit<Series, "@type">,
    Omit<CreativeWork, "@type"> {
  "@type"?: "CreativeWorkSeries";
  endDate?: Date | DateTime;
  issn?: Text;
  startDate?: DateTime | Date;
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
export interface CreditCard
  extends Omit<PaymentCard, "@type">,
    Omit<LoanOrCredit, "@type"> {
  "@type"?: "CreditCard";
}

/**
 *
 * @see @link https://schema.org/Crematorium
 *
 * @remarks
 * A crematorium.
 *
 **/
export interface Crematorium extends Omit<CivicStructure, "@type"> {
  "@type"?: "Crematorium";
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
export interface CriticReview extends Omit<Review, "@type"> {
  "@type"?: "CriticReview";
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
export interface CurrencyConversionService
  extends Omit<FinancialProduct, "@type"> {
  "@type"?: "CurrencyConversionService";
}

/**
 *
 * @see @link https://schema.org/DanceEvent
 *
 * @remarks
 * Event type: A social dance.
 *
 **/
export interface DanceEvent extends Omit<Event, "@type"> {
  "@type"?: "DanceEvent";
}

/**
 *
 * @see @link https://schema.org/DanceGroup
 *
 * @remarks
 * A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
 *
 **/
export interface DanceGroup extends Omit<PerformingGroup, "@type"> {
  "@type"?: "DanceGroup";
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
export interface DataCatalog extends Omit<CreativeWork, "@type"> {
  "@type"?: "DataCatalog";
  dataset?: Dataset;
  measurementTechnique?: Text | URL;
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
export interface DataDownload extends Omit<MediaObject, "@type"> {
  "@type"?: "DataDownload";
  measurementTechnique?: Text | URL;
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
export interface Dataset extends Omit<CreativeWork, "@type"> {
  "@type"?: "Dataset";
  catalog?: DataCatalog;
  datasetTimeInterval?: DateTime;
  distribution?: DataDownload;
  includedDataCatalog?: DataCatalog;
  includedInDataCatalog?: DataCatalog;
  issn?: Text;
  measurementTechnique?: Text | URL;
  variableMeasured?: Text | PropertyValue;
}

/**
 *
 * @see @link https://schema.org/DatedMoneySpecification
 *
 * @remarks
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended
 *
 **/
export interface DatedMoneySpecification
  extends Omit<StructuredValue, "@type"> {
  "@type"?: "DatedMoneySpecification";
  amount?: Number | MonetaryAmount;
  currency?: Text;
  endDate?: Date | DateTime;
  startDate?: DateTime | Date;
}

/**
 *
 * @see @link https://schema.org/DaySpa
 *
 * @remarks
 * A day spa.
 *
 **/
export interface DaySpa extends Omit<HealthAndBeautyBusiness, "@type"> {
  "@type"?: "DaySpa";
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
export interface DDxElement extends Omit<MedicalIntangible, "@type"> {
  "@type"?: "DDxElement";
  diagnosis?: MedicalCondition;
  distinguishingSign?: MedicalSignOrSymptom;
}

/**
 *
 * @see @link https://schema.org/DeactivateAction
 *
 * @remarks
 * The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 *
 **/
export interface DeactivateAction extends Omit<ControlAction, "@type"> {
  "@type"?: "DeactivateAction";
}

/**
 *
 * @see @link https://schema.org/DefenceEstablishment
 *
 * @remarks
 * A defence establishment, such as an army or navy base.
 *
 **/
export interface DefenceEstablishment
  extends Omit<GovernmentBuilding, "@type"> {
  "@type"?: "DefenceEstablishment";
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
export interface DefinedRegion extends Omit<StructuredValue, "@type"> {
  "@type"?: "DefinedRegion";
  addressCountry?: Text | Country;
  addressRegion?: Text;
  postalCode?: Text;
  postalCodePrefix?: Text;
  postalCodeRange?: PostalCodeRangeSpecification;
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
export interface DefinedTerm extends Omit<Intangible, "@type"> {
  "@type"?: "DefinedTerm";
  inDefinedTermSet?: DefinedTermSet | URL;
  termCode?: Text;
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
export interface DefinedTermSet extends Omit<CreativeWork, "@type"> {
  "@type"?: "DefinedTermSet";
  hasDefinedTerm?: DefinedTerm;
}

/**
 *
 * @see @link https://schema.org/DeleteAction
 *
 * @remarks
 * The act of editing a recipient by removing one of its objects.
 *
 **/
export interface DeleteAction extends Omit<UpdateAction, "@type"> {
  "@type"?: "DeleteAction";
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
export interface DeliveryChargeSpecification
  extends Omit<PriceSpecification, "@type"> {
  "@type"?: "DeliveryChargeSpecification";
  appliesToDeliveryMethod?: DeliveryMethod;
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  eligibleRegion?: Text | GeoShape | Place;
  ineligibleRegion?: GeoShape | Text | Place;
}

/**
 *
 * @see @link https://schema.org/DeliveryEvent
 *
 * @remarks
 * An event involving the delivery of an item.
 *
 **/
export interface DeliveryEvent extends Omit<Event, "@type"> {
  "@type"?: "DeliveryEvent";
  accessCode?: Text;
  availableFrom?: DateTime;
  availableThrough?: DateTime;
  hasDeliveryMethod?: DeliveryMethod;
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
export interface DeliveryTimeSettings extends Omit<StructuredValue, "@type"> {
  "@type"?: "DeliveryTimeSettings";
  deliveryTime?: ShippingDeliveryTime;
  isUnlabelledFallback?: Boolean;
  shippingDestination?: DefinedRegion;
  transitTimeLabel?: Text;
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
export interface Demand extends Omit<Intangible, "@type"> {
  "@type"?: "Demand";
  acceptedPaymentMethod?: LoanOrCredit | PaymentMethod;
  advanceBookingRequirement?: QuantitativeValue;
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  availability?: ItemAvailability;
  availabilityEnds?: DateTime | Time | Date;
  availabilityStarts?: DateTime | Date | Time;
  availableAtOrFrom?: Place;
  availableDeliveryMethod?: DeliveryMethod;
  businessFunction?: BusinessFunction;
  deliveryLeadTime?: QuantitativeValue;
  eligibleCustomerType?: BusinessEntityType;
  eligibleDuration?: QuantitativeValue;
  eligibleQuantity?: QuantitativeValue;
  eligibleRegion?: Text | GeoShape | Place;
  eligibleTransactionVolume?: PriceSpecification;
  gtin?: Text;
  gtin12?: Text;
  gtin13?: Text;
  gtin14?: Text;
  gtin8?: Text;
  includesObject?: TypeAndQuantityNode;
  ineligibleRegion?: GeoShape | Text | Place;
  inventoryLevel?: QuantitativeValue;
  itemCondition?: OfferItemCondition;
  itemOffered?:
    | Trip
    | Product
    | MenuItem
    | Service
    | Event
    | CreativeWork
    | AggregateOffer;
  mpn?: Text;
  priceSpecification?: PriceSpecification;
  seller?: Organization | Person;
  serialNumber?: Text;
  sku?: Text;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
  warranty?: WarrantyPromise;
}

/**
 *
 * @see @link https://schema.org/Dentist
 *
 * @remarks
 * A dentist.
 *
 **/
export interface Dentist
  extends Omit<MedicalBusiness, "@type">,
    Omit<LocalBusiness, "@type">,
    Omit<MedicalOrganization, "@type"> {
  "@type"?: "Dentist";
}

/**
 *
 * @see @link https://schema.org/DepartAction
 *
 * @remarks
 * The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 *
 **/
export interface DepartAction extends Omit<MoveAction, "@type"> {
  "@type"?: "DepartAction";
}

/**
 *
 * @see @link https://schema.org/DepartmentStore
 *
 * @remarks
 * A department store.
 *
 **/
export interface DepartmentStore extends Omit<Store, "@type"> {
  "@type"?: "DepartmentStore";
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
export interface DepositAccount
  extends Omit<BankAccount, "@type">,
    Omit<InvestmentOrDeposit, "@type"> {
  "@type"?: "DepositAccount";
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
export interface DiagnosticLab extends Omit<MedicalOrganization, "@type"> {
  "@type"?: "DiagnosticLab";
  availableTest?: MedicalTest;
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
export interface DiagnosticProcedure extends Omit<MedicalProcedure, "@type"> {
  "@type"?: "DiagnosticProcedure";
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
export interface Diet
  extends Omit<LifestyleModification, "@type">,
    Omit<CreativeWork, "@type"> {
  "@type"?: "Diet";
  dietFeatures?: Text;
  endorsers?: Organization | Person;
  expertConsiderations?: Text;
  physiologicalBenefits?: Text;
  risks?: Text;
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
export interface DietarySupplement extends Omit<Substance, "@type"> {
  "@type"?: "DietarySupplement";
  activeIngredient?: Text;
  isProprietary?: Boolean;
  legalStatus?: MedicalEnumeration | Text | DrugLegalStatus;
  manufacturer?: Organization;
  maximumIntake?: MaximumDoseSchedule;
  mechanismOfAction?: Text;
  nonProprietaryName?: Text;
  proprietaryName?: Text;
  recommendedIntake?: RecommendedDoseSchedule;
  safetyConsideration?: Text;
  targetPopulation?: Text;
}

/**
 *
 * @see @link https://schema.org/DigitalDocument
 *
 * @remarks
 * An electronic file or document.
 *
 **/
export interface DigitalDocument extends Omit<CreativeWork, "@type"> {
  "@type"?: "DigitalDocument";
  hasDigitalDocumentPermission?: DigitalDocumentPermission;
}

/**
 *
 * @see @link https://schema.org/DigitalDocumentPermission
 *
 * @remarks
 * A permission for a particular person or group to access a particular file.
 *
 **/
export interface DigitalDocumentPermission extends Omit<Intangible, "@type"> {
  "@type"?: "DigitalDocumentPermission";
  grantee?: Organization | Person | Audience | ContactPoint;
  permissionType?: DigitalDocumentPermissionType;
}

/**
 *
 * @see @link https://schema.org/DisagreeAction
 *
 * @remarks
 * The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.
 *
 **/
export interface DisagreeAction extends Omit<ReactAction, "@type"> {
  "@type"?: "DisagreeAction";
}

/**
 *
 * @see @link https://schema.org/DiscoverAction
 *
 * @remarks
 * The act of discovering/finding an object.
 *
 **/
export interface DiscoverAction extends Omit<FindAction, "@type"> {
  "@type"?: "DiscoverAction";
}

/**
 *
 * @see @link https://schema.org/DiscussionForumPosting
 *
 * @remarks
 * A posting to a discussion forum.
 *
 **/
export interface DiscussionForumPosting
  extends Omit<SocialMediaPosting, "@type"> {
  "@type"?: "DiscussionForumPosting";
}

/**
 *
 * @see @link https://schema.org/DislikeAction
 *
 * @remarks
 * The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 *
 **/
export interface DislikeAction extends Omit<ReactAction, "@type"> {
  "@type"?: "DislikeAction";
}

/**
 *
 * @see @link https://schema.org/Distance
 *
 * @remarks
 * Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.
 *
 **/
export interface Distance extends Omit<Quantity, "@type"> {
  "@type"?: "Distance";
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
export interface Distillery extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "Distillery";
}

/**
 *
 * @see @link https://schema.org/DonateAction
 *
 * @remarks
 * The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 *
 **/
export interface DonateAction extends Omit<TradeAction, "@type"> {
  "@type"?: "DonateAction";
  recipient?: Organization | ContactPoint | Person | Audience;
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
export interface DoseSchedule extends Omit<MedicalIntangible, "@type"> {
  "@type"?: "DoseSchedule";
  doseUnit?: Text;
  doseValue?: Number | QualitativeValue;
  frequency?: Text;
  targetPopulation?: Text;
}

/**
 *
 * @see @link https://schema.org/DownloadAction
 *
 * @remarks
 * The act of downloading an object.
 *
 **/
export interface DownloadAction extends Omit<TransferAction, "@type"> {
  "@type"?: "DownloadAction";
}

/**
 *
 * @see @link https://schema.org/DrawAction
 *
 * @remarks
 * The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.
 *
 **/
export interface DrawAction extends Omit<CreateAction, "@type"> {
  "@type"?: "DrawAction";
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
export interface Drawing extends Omit<CreativeWork, "@type"> {
  "@type"?: "Drawing";
}

/**
 *
 * @see @link https://schema.org/DrinkAction
 *
 * @remarks
 * The act of swallowing liquids.
 *
 **/
export interface DrinkAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "DrinkAction";
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
export interface Drug extends Omit<Substance, "@type"> {
  "@type"?: "Drug";
  activeIngredient?: Text;
  administrationRoute?: Text;
  alcoholWarning?: Text;
  availableStrength?: DrugStrength;
  breastfeedingWarning?: Text;
  clincalPharmacology?: Text;
  clinicalPharmacology?: Text;
  dosageForm?: Text;
  doseSchedule?: DoseSchedule;
  drugClass?: DrugClass;
  drugUnit?: Text;
  foodWarning?: Text;
  includedInHealthInsurancePlan?: HealthInsurancePlan;
  interactingDrug?: Drug;
  isAvailableGenerically?: Boolean;
  isProprietary?: Boolean;
  labelDetails?: URL;
  legalStatus?: MedicalEnumeration | Text | DrugLegalStatus;
  manufacturer?: Organization;
  maximumIntake?: MaximumDoseSchedule;
  mechanismOfAction?: Text;
  nonProprietaryName?: Text;
  overdosage?: Text;
  pregnancyCategory?: DrugPregnancyCategory;
  pregnancyWarning?: Text;
  prescribingInfo?: URL;
  prescriptionStatus?: DrugPrescriptionStatus | Text;
  proprietaryName?: Text;
  relatedDrug?: Drug;
  rxcui?: Text;
  warning?: URL | Text;
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
export interface DrugClass extends Omit<MedicalEntity, "@type"> {
  "@type"?: "DrugClass";
  drug?: Drug;
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
export interface DrugCost extends Omit<MedicalEntity, "@type"> {
  "@type"?: "DrugCost";
  applicableLocation?: AdministrativeArea;
  costCategory?: DrugCostCategory;
  costCurrency?: Text;
  costOrigin?: Text;
  costPerUnit?: Text | QualitativeValue | Number;
  drugUnit?: Text;
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
export interface DrugLegalStatus extends Omit<MedicalIntangible, "@type"> {
  "@type"?: "DrugLegalStatus";
  applicableLocation?: AdministrativeArea;
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
export interface DrugStrength extends Omit<MedicalIntangible, "@type"> {
  "@type"?: "DrugStrength";
  activeIngredient?: Text;
  availableIn?: AdministrativeArea;
  maximumIntake?: MaximumDoseSchedule;
  strengthUnit?: Text;
  strengthValue?: Number;
}

/**
 *
 * @see @link https://schema.org/DryCleaningOrLaundry
 *
 * @remarks
 * A dry-cleaning business.
 *
 **/
export interface DryCleaningOrLaundry extends Omit<LocalBusiness, "@type"> {
  "@type"?: "DryCleaningOrLaundry";
}

/**
 *
 * @see @link https://schema.org/Duration
 *
 * @remarks
 * Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
 *
 **/
export interface Duration extends Omit<Quantity, "@type"> {
  "@type"?: "Duration";
}

/**
 *
 * @see @link https://schema.org/EatAction
 *
 * @remarks
 * The act of swallowing solid objects.
 *
 **/
export interface EatAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "EatAction";
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
export interface EducationalAudience extends Omit<Audience, "@type"> {
  "@type"?: "EducationalAudience";
  educationalRole?: Text;
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
export interface EducationalOccupationalCredential
  extends Omit<CreativeWork, "@type"> {
  "@type"?: "EducationalOccupationalCredential";
  competencyRequired?: Text | URL | DefinedTerm;
  credentialCategory?: DefinedTerm | URL | Text;
  educationalLevel?: URL | DefinedTerm | Text;
  recognizedBy?: Organization;
  validFor?: Duration;
  validIn?: AdministrativeArea;
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
export interface EducationalOccupationalProgram
  extends Omit<Intangible, "@type"> {
  "@type"?: "EducationalOccupationalProgram";
  applicationDeadline?: Date;
  applicationStartDate?: Date;
  dayOfWeek?: DayOfWeek;
  educationalCredentialAwarded?: URL | Text | EducationalOccupationalCredential;
  educationalProgramMode?: Text | URL;
  endDate?: Date | DateTime;
  financialAidEligible?: DefinedTerm | Text;
  hasCourse?: Course;
  maximumEnrollment?: Integer;
  numberOfCredits?: StructuredValue | Integer;
  occupationalCategory?: CategoryCode | Text;
  occupationalCredentialAwarded?:
    | URL
    | Text
    | EducationalOccupationalCredential;
  offers?: Offer | Demand;
  programPrerequisites?:
    | Course
    | AlignmentObject
    | EducationalOccupationalCredential
    | Text;
  programType?: DefinedTerm | Text;
  provider?: Organization | Person;
  salaryUponCompletion?: MonetaryAmountDistribution;
  startDate?: DateTime | Date;
  termDuration?: Duration;
  termsPerYear?: Number;
  timeOfDay?: Text;
  timeToComplete?: Duration;
  trainingSalary?: MonetaryAmountDistribution;
  typicalCreditsPerTerm?: Integer | StructuredValue;
}

/**
 *
 * @see @link https://schema.org/EducationalOrganization
 *
 * @remarks
 * An educational organization.
 *
 **/
export interface EducationalOrganization
  extends Omit<Organization, "@type">,
    Omit<CivicStructure, "@type"> {
  "@type"?: "EducationalOrganization";
  alumni?: Person;
}

/**
 *
 * @see @link https://schema.org/EducationEvent
 *
 * @remarks
 * Event type: Education event.
 *
 **/
export interface EducationEvent extends Omit<Event, "@type"> {
  "@type"?: "EducationEvent";
  assesses?: DefinedTerm | Text;
  educationalLevel?: URL | DefinedTerm | Text;
  teaches?: Text | DefinedTerm;
}

/**
 *
 * @see @link https://schema.org/Electrician
 *
 * @remarks
 * An electrician.
 *
 **/
export interface Electrician
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "Electrician";
}

/**
 *
 * @see @link https://schema.org/ElectronicsStore
 *
 * @remarks
 * An electronics store.
 *
 **/
export interface ElectronicsStore extends Omit<Store, "@type"> {
  "@type"?: "ElectronicsStore";
}

/**
 *
 * @see @link https://schema.org/ElementarySchool
 *
 * @remarks
 * An elementary school.
 *
 **/
export interface ElementarySchool
  extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "ElementarySchool";
}

/**
 *
 * @see @link https://schema.org/EmailMessage
 *
 * @remarks
 * An email message.
 *
 **/
export interface EmailMessage extends Omit<Message, "@type"> {
  "@type"?: "EmailMessage";
}

/**
 *
 * @see @link https://schema.org/Embassy
 *
 * @remarks
 * An embassy.
 *
 **/
export interface Embassy extends Omit<GovernmentBuilding, "@type"> {
  "@type"?: "Embassy";
}

/**
 *
 * @see @link https://schema.org/EmergencyService
 *
 * @remarks
 * An emergency service, such as a fire station or ER.
 *
 **/
export interface EmergencyService extends Omit<LocalBusiness, "@type"> {
  "@type"?: "EmergencyService";
}

/**
 *
 * @see @link https://schema.org/EmployeeRole
 *
 * @remarks
 * A subclass of OrganizationRole used to describe employee relationships.
 *
 **/
export interface EmployeeRole extends Omit<OrganizationRole, "@type"> {
  "@type"?: "EmployeeRole";
  baseSalary?: MonetaryAmount | PriceSpecification | Number;
  salaryCurrency?: Text;
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
export interface EmployerAggregateRating
  extends Omit<AggregateRating, "@type"> {
  "@type"?: "EmployerAggregateRating";
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
export interface EmployerReview extends Omit<Review, "@type"> {
  "@type"?: "EmployerReview";
}

/**
 *
 * @see @link https://schema.org/EmploymentAgency
 *
 * @remarks
 * An employment agency.
 *
 **/
export interface EmploymentAgency extends Omit<LocalBusiness, "@type"> {
  "@type"?: "EmploymentAgency";
}

/**
 *
 * @see @link https://schema.org/EndorseAction
 *
 * @remarks
 * An agent approves/certifies/likes/supports/sanction an object.
 *
 **/
export interface EndorseAction extends Omit<ReactAction, "@type"> {
  "@type"?: "EndorseAction";
  endorsee?: Organization | Person;
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
export interface EndorsementRating extends Omit<Rating, "@type"> {
  "@type"?: "EndorsementRating";
}

/**
 *
 * @see @link https://schema.org/Energy
 *
 * @remarks
 * Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
 *
 **/
export interface Energy extends Omit<Quantity, "@type"> {
  "@type"?: "Energy";
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
export interface EnergyConsumptionDetails extends Omit<Intangible, "@type"> {
  "@type"?: "EnergyConsumptionDetails";
  energyEfficiencyScaleMax?: EUEnergyEfficiencyEnumeration;
  energyEfficiencyScaleMin?: EUEnergyEfficiencyEnumeration;
  hasEnergyEfficiencyCategory?: EnergyEfficiencyEnumeration;
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
export interface EnergyEfficiencyEnumeration
  extends Omit<Enumeration, "@type"> {
  "@type"?: "EnergyEfficiencyEnumeration";
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
export interface EngineSpecification extends Omit<StructuredValue, "@type"> {
  "@type"?: "EngineSpecification";
  engineDisplacement?: QuantitativeValue;
  enginePower?: QuantitativeValue;
  engineType?: URL | QualitativeValue | Text;
  fuelType?: QualitativeValue | URL | Text;
  torque?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/EntertainmentBusiness
 *
 * @remarks
 * A business providing entertainment.
 *
 **/
export interface EntertainmentBusiness extends Omit<LocalBusiness, "@type"> {
  "@type"?: "EntertainmentBusiness";
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
export interface EntryPoint extends Omit<Intangible, "@type"> {
  "@type"?: "EntryPoint";
  actionApplication?: SoftwareApplication;
  actionPlatform?: Text | URL;
  application?: SoftwareApplication;
  contentType?: Text;
  encodingType?: Text;
  httpMethod?: Text;
  urlTemplate?: Text;
}

/**
 *
 * @see @link https://schema.org/Enumeration
 *
 * @remarks
 * Lists or enumerations???for example, a list of cuisines or music genres, etc.
 *
 **/
export interface Enumeration extends Omit<Intangible, "@type"> {
  "@type"?: "Enumeration";
}

/**
 *
 * @see @link https://schema.org/Episode
 *
 * @remarks
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 *
 **/
export interface Episode extends Omit<CreativeWork, "@type"> {
  "@type"?: "Episode";
  actor?: Person;
  actors?: Array<Person>;
  director?: Person;
  directors?: Array<Person>;
  duration?: Duration;
  episodeNumber?: Text | Integer;
  musicBy?: Person | MusicGroup;
  partOfSeason?: CreativeWorkSeason;
  partOfSeries?: CreativeWorkSeries;
  productionCompany?: Organization;
  trailer?: VideoObject;
}

/**
 *
 * @see @link https://schema.org/Event
 *
 * @remarks
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 *
 **/
export interface Event extends Omit<Thing, "@type"> {
  "@type"?: "Event";
  about?: Thing;
  actor?: Person;
  aggregateRating?: AggregateRating;
  attendee?: Person | Organization;
  attendees?: Array<Person> | Array<Organization>;
  audience?: Audience;
  composer?: Organization | Person;
  contributor?: Organization | Person;
  director?: Person;
  doorTime?: DateTime | Time;
  duration?: Duration;
  endDate?: Date | DateTime;
  eventAttendanceMode?: EventAttendanceModeEnumeration;
  eventSchedule?: Schedule;
  eventStatus?: EventStatusType;
  funder?: Organization | Person;
  inLanguage?: Text | Language;
  isAccessibleForFree?: Boolean;
  location?: Place | Text | VirtualLocation | PostalAddress;
  maximumAttendeeCapacity?: Integer;
  maximumPhysicalAttendeeCapacity?: Integer;
  maximumVirtualAttendeeCapacity?: Integer;
  offers?: Offer | Demand;
  organizer?: Organization | Person;
  performer?: Organization | Person;
  performers?: Array<Organization> | Array<Person>;
  previousStartDate?: Date;
  recordedIn?: CreativeWork;
  remainingAttendeeCapacity?: Integer;
  review?: Review;
  sponsor?: Person | Organization;
  startDate?: DateTime | Date;
  subEvent?: Event;
  subEvents?: Array<Event>;
  superEvent?: Event;
  translator?: Person | Organization;
  typicalAgeRange?: Text;
  workFeatured?: CreativeWork;
  workPerformed?: CreativeWork;
}

/**
 *
 * @see @link https://schema.org/EventReservation
 *
 * @remarks
 * A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 **/
export interface EventReservation extends Omit<Reservation, "@type"> {
  "@type"?: "EventReservation";
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
export interface EventSeries
  extends Omit<Series, "@type">,
    Omit<Event, "@type"> {
  "@type"?: "EventSeries";
}

/**
 *
 * @see @link https://schema.org/EventVenue
 *
 * @remarks
 * An event venue.
 *
 **/
export interface EventVenue extends Omit<CivicStructure, "@type"> {
  "@type"?: "EventVenue";
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
export interface ExchangeRateSpecification
  extends Omit<StructuredValue, "@type"> {
  "@type"?: "ExchangeRateSpecification";
  currency?: Text;
  currentExchangeRate?: UnitPriceSpecification;
  exchangeRateSpread?: MonetaryAmount | Number;
}

/**
 *
 * @see @link https://schema.org/ExerciseAction
 *
 * @remarks
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 *
 **/
export interface ExerciseAction extends Omit<PlayAction, "@type"> {
  "@type"?: "ExerciseAction";
  course?: Place;
  diet?: Diet;
  distance?: Distance;
  exerciseCourse?: Place;
  exercisePlan?: ExercisePlan;
  exerciseRelatedDiet?: Diet;
  exerciseType?: Text;
  fromLocation?: Place;
  opponent?: Person;
  sportsActivityLocation?: SportsActivityLocation;
  sportsEvent?: SportsEvent;
  sportsTeam?: SportsTeam;
  toLocation?: Place;
}

/**
 *
 * @see @link https://schema.org/ExerciseGym
 *
 * @remarks
 * A gym.
 *
 **/
export interface ExerciseGym extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "ExerciseGym";
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
export interface ExercisePlan
  extends Omit<PhysicalActivity, "@type">,
    Omit<CreativeWork, "@type"> {
  "@type"?: "ExercisePlan";
  activityDuration?: QuantitativeValue | Duration;
  activityFrequency?: Text | QuantitativeValue;
  additionalVariable?: Text;
  exerciseType?: Text;
  intensity?: QuantitativeValue | Text;
  repetitions?: Number | QuantitativeValue;
  restPeriods?: Text | QuantitativeValue;
  workload?: Energy | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/ExhibitionEvent
 *
 * @remarks
 * Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
 *
 **/
export interface ExhibitionEvent extends Omit<Event, "@type"> {
  "@type"?: "ExhibitionEvent";
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
export interface FAQPage extends Omit<WebPage, "@type"> {
  "@type"?: "FAQPage";
}

/**
 *
 * @see @link https://schema.org/FastFoodRestaurant
 *
 * @remarks
 * A fast-food restaurant.
 *
 **/
export interface FastFoodRestaurant extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "FastFoodRestaurant";
}

/**
 *
 * @see @link https://schema.org/Festival
 *
 * @remarks
 * Event type: Festival.
 *
 **/
export interface Festival extends Omit<Event, "@type"> {
  "@type"?: "Festival";
}

/**
 *
 * @see @link https://schema.org/FilmAction
 *
 * @remarks
 * The act of capturing sound and moving images on film, video, or digitally.
 *
 **/
export interface FilmAction extends Omit<CreateAction, "@type"> {
  "@type"?: "FilmAction";
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
export interface FinancialProduct extends Omit<Service, "@type"> {
  "@type"?: "FinancialProduct";
  annualPercentageRate?: QuantitativeValue | Number;
  feesAndCommissionsSpecification?: URL | Text;
  interestRate?: Number | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/FinancialService
 *
 * @remarks
 * Financial services business.
 *
 **/
export interface FinancialService extends Omit<LocalBusiness, "@type"> {
  "@type"?: "FinancialService";
  feesAndCommissionsSpecification?: URL | Text;
}

/**
 *
 * @see @link https://schema.org/FindAction
 *
 * @remarks
 * The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily.
 *
 **/
export interface FindAction extends Omit<Action, "@type"> {
  "@type"?: "FindAction";
}

/**
 *
 * @see @link https://schema.org/FireStation
 *
 * @remarks
 * A fire station. With firemen.
 *
 **/
export interface FireStation
  extends Omit<CivicStructure, "@type">,
    Omit<EmergencyService, "@type"> {
  "@type"?: "FireStation";
}

/**
 *
 * @see @link https://schema.org/Flight
 *
 * @remarks
 * An airline flight.
 *
 **/
export interface Flight extends Omit<Trip, "@type"> {
  "@type"?: "Flight";
  aircraft?: Vehicle | Text;
  arrivalAirport?: Airport;
  arrivalGate?: Text;
  arrivalTerminal?: Text;
  boardingPolicy?: BoardingPolicyType;
  carrier?: Organization;
  departureAirport?: Airport;
  departureGate?: Text;
  departureTerminal?: Text;
  estimatedFlightDuration?: Duration | Text;
  flightDistance?: Distance | Text;
  flightNumber?: Text;
  mealService?: Text;
  seller?: Organization | Person;
  webCheckinTime?: DateTime;
}

/**
 *
 * @see @link https://schema.org/FlightReservation
 *
 * @remarks
 * A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 **/
export interface FlightReservation extends Omit<Reservation, "@type"> {
  "@type"?: "FlightReservation";
  boardingGroup?: Text;
  passengerPriorityStatus?: QualitativeValue | Text;
  passengerSequenceNumber?: Text;
  securityScreening?: Text;
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
export interface FloorPlan extends Omit<Intangible, "@type"> {
  "@type"?: "FloorPlan";
  amenityFeature?: LocationFeatureSpecification;
  floorSize?: QuantitativeValue;
  isPlanForApartment?: Accommodation;
  layoutImage?: ImageObject | URL;
  numberOfAccommodationUnits?: QuantitativeValue;
  numberOfAvailableAccommodationUnits?: QuantitativeValue;
  numberOfBathroomsTotal?: Integer;
  numberOfBedrooms?: QuantitativeValue | Number;
  numberOfFullBathrooms?: Number;
  numberOfPartialBathrooms?: Number;
  numberOfRooms?: Number | QuantitativeValue;
  petsAllowed?: Text | Boolean;
}

/**
 *
 * @see @link https://schema.org/Florist
 *
 * @remarks
 * A florist.
 *
 **/
export interface Florist extends Omit<Store, "@type"> {
  "@type"?: "Florist";
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
export interface FMRadioChannel extends Omit<RadioChannel, "@type"> {
  "@type"?: "FMRadioChannel";
}

/**
 *
 * @see @link https://schema.org/FollowAction
 *
 * @remarks
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\n\nRelated actions:\n\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 *
 **/
export interface FollowAction extends Omit<InteractAction, "@type"> {
  "@type"?: "FollowAction";
  followee?: Organization | Person;
}

/**
 *
 * @see @link https://schema.org/FoodEstablishment
 *
 * @remarks
 * A food-related business.
 *
 **/
export interface FoodEstablishment extends Omit<LocalBusiness, "@type"> {
  "@type"?: "FoodEstablishment";
  acceptsReservations?: URL | Boolean | Text;
  hasMenu?: URL | Menu | Text;
  menu?: Text | URL | Menu;
  servesCuisine?: Text;
  starRating?: Rating;
}

/**
 *
 * @see @link https://schema.org/FoodEstablishmentReservation
 *
 * @remarks
 * A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 **/
export interface FoodEstablishmentReservation
  extends Omit<Reservation, "@type"> {
  "@type"?: "FoodEstablishmentReservation";
  endTime?: DateTime | Time;
  partySize?: QuantitativeValue | Integer;
  startTime?: DateTime | Time;
}

/**
 *
 * @see @link https://schema.org/FoodEvent
 *
 * @remarks
 * Event type: Food event.
 *
 **/
export interface FoodEvent extends Omit<Event, "@type"> {
  "@type"?: "FoodEvent";
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
export interface FoodService extends Omit<Service, "@type"> {
  "@type"?: "FoodService";
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
export interface FundingAgency extends Omit<Project, "@type"> {
  "@type"?: "FundingAgency";
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
export interface FundingScheme extends Omit<Organization, "@type"> {
  "@type"?: "FundingScheme";
}

/**
 *
 * @see @link https://schema.org/FurnitureStore
 *
 * @remarks
 * A furniture store.
 *
 **/
export interface FurnitureStore extends Omit<Store, "@type"> {
  "@type"?: "FurnitureStore";
}

/**
 *
 * @see @link https://schema.org/Game
 *
 * @remarks
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 *
 **/
export interface Game extends Omit<CreativeWork, "@type"> {
  "@type"?: "Game";
  characterAttribute?: Thing;
  gameItem?: Thing;
  gameLocation?: PostalAddress | Place | URL;
  numberOfPlayers?: QuantitativeValue;
  quest?: Thing;
}

/**
 *
 * @see @link https://schema.org/GameServer
 *
 * @remarks
 * Server that provides game interaction in a multiplayer game.
 *
 **/
export interface GameServer extends Omit<Intangible, "@type"> {
  "@type"?: "GameServer";
  game?: VideoGame;
  playersOnline?: Integer;
  serverStatus?: GameServerStatus;
}

/**
 *
 * @see @link https://schema.org/GardenStore
 *
 * @remarks
 * A garden store.
 *
 **/
export interface GardenStore extends Omit<Store, "@type"> {
  "@type"?: "GardenStore";
}

/**
 *
 * @see @link https://schema.org/GasStation
 *
 * @remarks
 * A gas station.
 *
 **/
export interface GasStation extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "GasStation";
}

/**
 *
 * @see @link https://schema.org/GatedResidenceCommunity
 *
 * @remarks
 * Residence type: Gated community.
 *
 **/
export interface GatedResidenceCommunity extends Omit<Residence, "@type"> {
  "@type"?: "GatedResidenceCommunity";
}

/**
 *
 * @see @link https://schema.org/GeneralContractor
 *
 * @remarks
 * A general contractor.
 *
 **/
export interface GeneralContractor
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "GeneralContractor";
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
export interface GeoCircle extends Omit<GeoShape, "@type"> {
  "@type"?: "GeoCircle";
  geoMidpoint?: GeoCoordinates;
  geoRadius?: Text | Distance | Number;
}

/**
 *
 * @see @link https://schema.org/GeoCoordinates
 *
 * @remarks
 * The geographic coordinates of a place or event.
 *
 **/
export interface GeoCoordinates extends Omit<StructuredValue, "@type"> {
  "@type"?: "GeoCoordinates";
  address?: Text | PostalAddress;
  addressCountry?: Text | Country;
  elevation?: Number | Text;
  latitude?: Text | Number;
  longitude?: Text | Number;
  postalCode?: Text;
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
export interface GeoShape extends Omit<StructuredValue, "@type"> {
  "@type"?: "GeoShape";
  address?: Text | PostalAddress;
  addressCountry?: Text | Country;
  box?: Text;
  circle?: Text;
  elevation?: Number | Text;
  line?: Text;
  polygon?: Text;
  postalCode?: Text;
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
export interface GeospatialGeometry extends Omit<Intangible, "@type"> {
  "@type"?: "GeospatialGeometry";
  geoContains?: GeospatialGeometry | Place;
  geoCoveredBy?: GeospatialGeometry | Place;
  geoCovers?: GeospatialGeometry | Place;
  geoCrosses?: GeospatialGeometry | Place;
  geoDisjoint?: Place | GeospatialGeometry;
  geoEquals?: Place | GeospatialGeometry;
  geoIntersects?: GeospatialGeometry | Place;
  geoOverlaps?: Place | GeospatialGeometry;
  geoTouches?: Place | GeospatialGeometry;
  geoWithin?: Place | GeospatialGeometry;
}

/**
 *
 * @see @link https://schema.org/GiveAction
 *
 * @remarks
 * The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[TakeAction]]: Reciprocal of GiveAction.\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 *
 **/
export interface GiveAction extends Omit<TransferAction, "@type"> {
  "@type"?: "GiveAction";
  recipient?: Organization | ContactPoint | Person | Audience;
}

/**
 *
 * @see @link https://schema.org/GolfCourse
 *
 * @remarks
 * A golf course.
 *
 **/
export interface GolfCourse extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "GolfCourse";
}

/**
 *
 * @see @link https://schema.org/GovernmentBuilding
 *
 * @remarks
 * A government building.
 *
 **/
export interface GovernmentBuilding extends Omit<CivicStructure, "@type"> {
  "@type"?: "GovernmentBuilding";
}

/**
 *
 * @see @link https://schema.org/GovernmentOffice
 *
 * @remarks
 * A government office&#x2014;for example, an IRS or DMV office.
 *
 **/
export interface GovernmentOffice extends Omit<LocalBusiness, "@type"> {
  "@type"?: "GovernmentOffice";
}

/**
 *
 * @see @link https://schema.org/GovernmentOrganization
 *
 * @remarks
 * A governmental organization or agency.
 *
 **/
export interface GovernmentOrganization extends Omit<Organization, "@type"> {
  "@type"?: "GovernmentOrganization";
}

/**
 *
 * @see @link https://schema.org/GovernmentPermit
 *
 * @remarks
 * A permit issued by a government agency.
 *
 **/
export interface GovernmentPermit extends Omit<Permit, "@type"> {
  "@type"?: "GovernmentPermit";
}

/**
 *
 * @see @link https://schema.org/GovernmentService
 *
 * @remarks
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 *
 **/
export interface GovernmentService extends Omit<Service, "@type"> {
  "@type"?: "GovernmentService";
  jurisdiction?: AdministrativeArea | Text;
  serviceOperator?: Organization;
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
export interface Grant extends Omit<Intangible, "@type"> {
  "@type"?: "Grant";
  fundedItem?: Thing;
  sponsor?: Person | Organization;
}

/**
 *
 * @see @link https://schema.org/GroceryStore
 *
 * @remarks
 * A grocery store.
 *
 **/
export interface GroceryStore extends Omit<Store, "@type"> {
  "@type"?: "GroceryStore";
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
export interface Guide extends Omit<CreativeWork, "@type"> {
  "@type"?: "Guide";
  reviewAspect?: Text;
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
export interface Hackathon extends Omit<Event, "@type"> {
  "@type"?: "Hackathon";
}

/**
 *
 * @see @link https://schema.org/HairSalon
 *
 * @remarks
 * A hair salon.
 *
 **/
export interface HairSalon extends Omit<HealthAndBeautyBusiness, "@type"> {
  "@type"?: "HairSalon";
}

/**
 *
 * @see @link https://schema.org/HardwareStore
 *
 * @remarks
 * A hardware store.
 *
 **/
export interface HardwareStore extends Omit<Store, "@type"> {
  "@type"?: "HardwareStore";
}

/**
 *
 * @see @link https://schema.org/HealthAndBeautyBusiness
 *
 * @remarks
 * Health and beauty.
 *
 **/
export interface HealthAndBeautyBusiness extends Omit<LocalBusiness, "@type"> {
  "@type"?: "HealthAndBeautyBusiness";
}

/**
 *
 * @see @link https://schema.org/HealthClub
 *
 * @remarks
 * A health club.
 *
 **/
export interface HealthClub
  extends Omit<HealthAndBeautyBusiness, "@type">,
    Omit<SportsActivityLocation, "@type"> {
  "@type"?: "HealthClub";
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
export interface HealthInsurancePlan extends Omit<Intangible, "@type"> {
  "@type"?: "HealthInsurancePlan";
  benefitsSummaryUrl?: URL;
  contactPoint?: ContactPoint;
  healthPlanDrugOption?: Text;
  healthPlanDrugTier?: Text;
  healthPlanId?: Text;
  healthPlanMarketingUrl?: URL;
  includesHealthPlanFormulary?: HealthPlanFormulary;
  includesHealthPlanNetwork?: HealthPlanNetwork;
  usesHealthPlanIdStandard?: Text | URL;
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
export interface HealthPlanCostSharingSpecification
  extends Omit<Intangible, "@type"> {
  "@type"?: "HealthPlanCostSharingSpecification";
  healthPlanCoinsuranceOption?: Text;
  healthPlanCoinsuranceRate?: Number;
  healthPlanCopay?: PriceSpecification;
  healthPlanCopayOption?: Text;
  healthPlanPharmacyCategory?: Text;
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
export interface HealthPlanFormulary extends Omit<Intangible, "@type"> {
  "@type"?: "HealthPlanFormulary";
  healthPlanCostSharing?: Boolean;
  healthPlanDrugTier?: Text;
  offersPrescriptionByMail?: Boolean;
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
export interface HealthPlanNetwork extends Omit<Intangible, "@type"> {
  "@type"?: "HealthPlanNetwork";
  healthPlanCostSharing?: Boolean;
  healthPlanNetworkId?: Text;
  healthPlanNetworkTier?: Text;
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
export interface HealthTopicContent extends Omit<WebContent, "@type"> {
  "@type"?: "HealthTopicContent";
  hasHealthAspect?: HealthAspectEnumeration;
}

/**
 *
 * @see @link https://schema.org/HighSchool
 *
 * @remarks
 * A high school.
 *
 **/
export interface HighSchool extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "HighSchool";
}

/**
 *
 * @see @link https://schema.org/HinduTemple
 *
 * @remarks
 * A Hindu temple.
 *
 **/
export interface HinduTemple extends Omit<PlaceOfWorship, "@type"> {
  "@type"?: "HinduTemple";
}

/**
 *
 * @see @link https://schema.org/HobbyShop
 *
 * @remarks
 * A store that sells materials useful or necessary for various hobbies.
 *
 **/
export interface HobbyShop extends Omit<Store, "@type"> {
  "@type"?: "HobbyShop";
}

/**
 *
 * @see @link https://schema.org/HomeAndConstructionBusiness
 *
 * @remarks
 * A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 **/
export interface HomeAndConstructionBusiness
  extends Omit<LocalBusiness, "@type"> {
  "@type"?: "HomeAndConstructionBusiness";
}

/**
 *
 * @see @link https://schema.org/HomeGoodsStore
 *
 * @remarks
 * A home goods store.
 *
 **/
export interface HomeGoodsStore extends Omit<Store, "@type"> {
  "@type"?: "HomeGoodsStore";
}

/**
 *
 * @see @link https://schema.org/Hospital
 *
 * @remarks
 * A hospital.
 *
 **/
export interface Hospital
  extends Omit<CivicStructure, "@type">,
    Omit<MedicalOrganization, "@type">,
    Omit<EmergencyService, "@type"> {
  "@type"?: "Hospital";
  availableService?: MedicalTest | MedicalTherapy | MedicalProcedure;
  healthcareReportingData?: CDCPMDRecord | Dataset;
  medicalSpecialty?: MedicalSpecialty;
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
export interface Hostel extends Omit<LodgingBusiness, "@type"> {
  "@type"?: "Hostel";
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
export interface Hotel extends Omit<LodgingBusiness, "@type"> {
  "@type"?: "Hotel";
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
export interface HotelRoom extends Omit<Room, "@type"> {
  "@type"?: "HotelRoom";
  bed?: BedDetails | Text | BedType;
  occupancy?: QuantitativeValue;
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
export interface House extends Omit<Accommodation, "@type"> {
  "@type"?: "House";
  numberOfRooms?: Number | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/HousePainter
 *
 * @remarks
 * A house painting service.
 *
 **/
export interface HousePainter
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "HousePainter";
}

/**
 *
 * @see @link https://schema.org/HowTo
 *
 * @remarks
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 *
 **/
export interface HowTo extends Omit<CreativeWork, "@type"> {
  "@type"?: "HowTo";
  estimatedCost?: Text | MonetaryAmount;
  performTime?: Duration;
  prepTime?: Duration;
  step?: HowToStep | Text | CreativeWork | HowToSection;
  steps?: CreativeWork | Text | ItemList<CreativeWork> | ItemList<Text>;
  supply?: HowToSupply | Text;
  tool?: Text | HowToTool;
  totalTime?: Duration;
  yield?: Text | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/HowToDirection
 *
 * @remarks
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 *
 **/
export interface HowToDirection extends Omit<ListItem<CreativeWork>, "@type"> {
  "@type"?: "HowToDirection";
  afterMedia?: MediaObject | URL;
  beforeMedia?: MediaObject | URL;
  duringMedia?: URL | MediaObject;
  performTime?: Duration;
  prepTime?: Duration;
  supply?: HowToSupply | Text;
  tool?: Text | HowToTool;
  totalTime?: Duration;
}

/**
 *
 * @see @link https://schema.org/HowToItem
 *
 * @remarks
 * An item used as either a tool or supply when performing the instructions for how to to achieve a result.
 *
 **/
export interface HowToItem<T = Text> extends Omit<ListItem<T>, "@type"> {
  "@type"?: "HowToItem";
  requiredQuantity?: Text | QuantitativeValue | Number;
}

/**
 *
 * @see @link https://schema.org/HowToSection
 *
 * @remarks
 * A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 *
 **/
export type HowToSection = (
  | Omit<ListItem<CreativeWork>, "@type">
  | Omit<ItemList<CreativeWork>, "@type">
) & {
  "@type"?: "HowToSection";
  steps?: CreativeWork | Text | ItemList<CreativeWork> | ItemList<Text>;
};

/**
 *
 * @see @link https://schema.org/HowToStep
 *
 * @remarks
 * A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
 *
 **/
export type HowToStep = (
  | Omit<ListItem<CreativeWork>, "@type">
  | Omit<ItemList<CreativeWork>, "@type">
) & {
  "@type"?: "HowToStep";
};

/**
 *
 * @see @link https://schema.org/HowToSupply
 *
 * @remarks
 * A supply consumed when performing the instructions for how to achieve a result.
 *
 **/
export interface HowToSupply extends Omit<HowToItem, "@type"> {
  "@type"?: "HowToSupply";
  estimatedCost?: Text | MonetaryAmount;
}

/**
 *
 * @see @link https://schema.org/HowToTip
 *
 * @remarks
 * An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
 *
 **/
export interface HowToTip extends Omit<ListItem<CreativeWork>, "@type"> {
  "@type"?: "HowToTip";
}

/**
 *
 * @see @link https://schema.org/HowToTool
 *
 * @remarks
 * A tool used (but not consumed) when performing instructions for how to achieve a result.
 *
 **/
export interface HowToTool extends Omit<HowToItem, "@type"> {
  "@type"?: "HowToTool";
}

/**
 *
 * @see @link https://schema.org/HVACBusiness
 *
 * @remarks
 * A business that provide Heating, Ventilation and Air Conditioning services.
 *
 **/
export interface HVACBusiness
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "HVACBusiness";
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
export interface HyperToc extends Omit<CreativeWork, "@type"> {
  "@type"?: "HyperToc";
  associatedMedia?: MediaObject;
  tocEntry?: HyperTocEntry;
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
export interface HyperTocEntry extends Omit<CreativeWork, "@type"> {
  "@type"?: "HyperTocEntry";
  associatedMedia?: MediaObject;
  tocContinuation?: HyperTocEntry;
  utterances?: Text;
}

/**
 *
 * @see @link https://schema.org/IceCreamShop
 *
 * @remarks
 * An ice cream shop.
 *
 **/
export interface IceCreamShop extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "IceCreamShop";
}

/**
 *
 * @see @link https://schema.org/IgnoreAction
 *
 * @remarks
 * The act of intentionally disregarding the object. An agent ignores an object.
 *
 **/
export interface IgnoreAction extends Omit<AssessAction, "@type"> {
  "@type"?: "IgnoreAction";
}

/**
 *
 * @see @link https://schema.org/ImageGallery
 *
 * @remarks
 * Web page type: Image gallery page.
 *
 **/
export interface ImageGallery extends Omit<MediaGallery, "@type"> {
  "@type"?: "ImageGallery";
}

/**
 *
 * @see @link https://schema.org/ImageObject
 *
 * @remarks
 * An image file.
 *
 **/
export interface ImageObject extends Omit<MediaObject, "@type"> {
  "@type"?: "ImageObject";
  caption?: Text | MediaObject;
  exifData?: Text | PropertyValue;
  representativeOfPage?: Boolean;
  thumbnail?: ImageObject;
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
export interface ImagingTest extends Omit<MedicalTest, "@type"> {
  "@type"?: "ImagingTest";
  imagingTechnique?: MedicalImagingTechnique;
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
export interface IndividualProduct extends Omit<Product, "@type"> {
  "@type"?: "IndividualProduct";
  serialNumber?: Text;
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
export interface InfectiousDisease extends Omit<MedicalCondition, "@type"> {
  "@type"?: "InfectiousDisease";
  infectiousAgent?: Text;
  infectiousAgentClass?: InfectiousAgentClass;
  transmissionMethod?: Text;
}

/**
 *
 * @see @link https://schema.org/InformAction
 *
 * @remarks
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 *
 **/
export interface InformAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "InformAction";
  event?: Event;
}

/**
 *
 * @see @link https://schema.org/InsertAction
 *
 * @remarks
 * The act of adding at a specific location in an ordered collection.
 *
 **/
export interface InsertAction extends Omit<AddAction, "@type"> {
  "@type"?: "InsertAction";
  toLocation?: Place;
}

/**
 *
 * @see @link https://schema.org/InstallAction
 *
 * @remarks
 * The act of installing an application.
 *
 **/
export interface InstallAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "InstallAction";
}

/**
 *
 * @see @link https://schema.org/InsuranceAgency
 *
 * @remarks
 * An Insurance agency.
 *
 **/
export interface InsuranceAgency extends Omit<FinancialService, "@type"> {
  "@type"?: "InsuranceAgency";
}

/**
 *
 * @see @link https://schema.org/Intangible
 *
 * @remarks
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 *
 **/
export interface Intangible extends Omit<Thing, "@type"> {
  "@type"?: "Intangible";
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
export interface InteractAction extends Omit<Action, "@type"> {
  "@type"?: "InteractAction";
}

/**
 *
 * @see @link https://schema.org/InteractionCounter
 *
 * @remarks
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 *
 **/
export interface InteractionCounter extends Omit<StructuredValue, "@type"> {
  "@type"?: "InteractionCounter";
  interactionService?: SoftwareApplication | WebSite;
  interactionType?: Action;
  userInteractionCount?: Integer;
}

/**
 *
 * @see @link https://schema.org/InternetCafe
 *
 * @remarks
 * An internet cafe.
 *
 **/
export interface InternetCafe extends Omit<LocalBusiness, "@type"> {
  "@type"?: "InternetCafe";
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
export interface InvestmentFund extends Omit<InvestmentOrDeposit, "@type"> {
  "@type"?: "InvestmentFund";
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
export interface InvestmentOrDeposit extends Omit<FinancialProduct, "@type"> {
  "@type"?: "InvestmentOrDeposit";
  amount?: Number | MonetaryAmount;
}

/**
 *
 * @see @link https://schema.org/InviteAction
 *
 * @remarks
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 *
 **/
export interface InviteAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "InviteAction";
  event?: Event;
}

/**
 *
 * @see @link https://schema.org/Invoice
 *
 * @remarks
 * A statement of the money due for goods or services; a bill.
 *
 **/
export interface Invoice extends Omit<Intangible, "@type"> {
  "@type"?: "Invoice";
  accountId?: Text;
  billingPeriod?: Duration;
  broker?: Person | Organization;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  confirmationNumber?: Text;
  customer?: Organization | Person;
  minimumPaymentDue?: PriceSpecification | MonetaryAmount;
  paymentDue?: DateTime;
  paymentDueDate?: DateTime | Date;
  paymentMethod?: PaymentMethod;
  paymentMethodId?: Text;
  paymentStatus?: Text | PaymentStatusType;
  provider?: Organization | Person;
  referencesOrder?: Order;
  scheduledPaymentDate?: Date;
  totalPaymentDue?: PriceSpecification | MonetaryAmount;
}

/**
 *
 * @see @link https://schema.org/ItemPage
 *
 * @remarks
 * A page devoted to a single item, such as a particular product or hotel.
 *
 **/
export interface ItemPage extends Omit<WebPage, "@type"> {
  "@type"?: "ItemPage";
}

/**
 *
 * @see @link https://schema.org/JewelryStore
 *
 * @remarks
 * A jewelry store.
 *
 **/
export interface JewelryStore extends Omit<Store, "@type"> {
  "@type"?: "JewelryStore";
}

/**
 *
 * @see @link https://schema.org/JobPosting
 *
 * @remarks
 * A listing that describes a job opening in a certain organization.
 *
 **/
export interface JobPosting extends Omit<Intangible, "@type"> {
  "@type"?: "JobPosting";
  applicantLocationRequirements?: AdministrativeArea;
  applicationContact?: ContactPoint;
  baseSalary?: MonetaryAmount | PriceSpecification | Number;
  benefits?: Text;
  datePosted?: Date | DateTime;
  educationRequirements?: Text | EducationalOccupationalCredential;
  eligibilityToWorkRequirement?: Text;
  employerOverview?: Text;
  employmentType?: Text;
  employmentUnit?: Organization;
  estimatedSalary?: MonetaryAmount | Number | MonetaryAmountDistribution;
  experienceInPlaceOfEducation?: Boolean;
  experienceRequirements?: Text | OccupationalExperienceRequirements;
  hiringOrganization?: Organization;
  incentiveCompensation?: Text;
  incentives?: Text;
  industry?: DefinedTerm | Text;
  jobBenefits?: Text;
  jobImmediateStart?: Boolean;
  jobLocation?: Place;
  jobLocationType?: Text;
  jobStartDate?: Date | Text;
  occupationalCategory?: CategoryCode | Text;
  physicalRequirement?: DefinedTerm | URL | Text;
  qualifications?: Text | EducationalOccupationalCredential;
  relevantOccupation?: Occupation;
  responsibilities?: Text;
  salaryCurrency?: Text;
  securityClearanceRequirement?: URL | Text;
  sensoryRequirement?: DefinedTerm | URL | Text;
  skills?: DefinedTerm | Text;
  specialCommitments?: Text;
  title?: Text;
  totalJobOpenings?: Integer;
  validThrough?: DateTime | Date;
  workHours?: Text;
}

/**
 *
 * @see @link https://schema.org/JoinAction
 *
 * @remarks
 * An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 *
 **/
export interface JoinAction extends Omit<InteractAction, "@type"> {
  "@type"?: "JoinAction";
  event?: Event;
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
export interface Joint extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Joint";
  biomechnicalClass?: Text;
  functionalClass?: MedicalEntity | Text;
  structuralClass?: Text;
}

/**
 *
 * @see @link https://schema.org/LakeBodyOfWater
 *
 * @remarks
 * A lake (for example, Lake Pontrachain).
 *
 **/
export interface LakeBodyOfWater extends Omit<BodyOfWater, "@type"> {
  "@type"?: "LakeBodyOfWater";
}

/**
 *
 * @see @link https://schema.org/Landform
 *
 * @remarks
 * A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.
 *
 **/
export interface Landform extends Omit<Place, "@type"> {
  "@type"?: "Landform";
}

/**
 *
 * @see @link https://schema.org/LandmarksOrHistoricalBuildings
 *
 * @remarks
 * An historical landmark or building.
 *
 **/
export interface LandmarksOrHistoricalBuildings extends Omit<Place, "@type"> {
  "@type"?: "LandmarksOrHistoricalBuildings";
}

/**
 *
 * @see @link https://schema.org/Language
 *
 * @remarks
 * Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]].
 *
 **/
export interface Language extends Omit<Intangible, "@type"> {
  "@type"?: "Language";
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
export interface LearningResource extends Omit<CreativeWork, "@type"> {
  "@type"?: "LearningResource";
  assesses?: DefinedTerm | Text;
  competencyRequired?: Text | URL | DefinedTerm;
  educationalAlignment?: AlignmentObject;
  educationalLevel?: URL | DefinedTerm | Text;
  educationalUse?: Text | DefinedTerm;
  learningResourceType?: Text | DefinedTerm;
  teaches?: Text | DefinedTerm;
}

/**
 *
 * @see @link https://schema.org/LeaveAction
 *
 * @remarks
 * An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 *
 **/
export interface LeaveAction extends Omit<InteractAction, "@type"> {
  "@type"?: "LeaveAction";
  event?: Event;
}

/**
 *
 * @see @link https://schema.org/LegalService
 *
 * @remarks
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 **/
export interface LegalService extends Omit<LocalBusiness, "@type"> {
  "@type"?: "LegalService";
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
export interface Legislation extends Omit<CreativeWork, "@type"> {
  "@type"?: "Legislation";
  jurisdiction?: AdministrativeArea | Text;
  legislationApplies?: Legislation;
  legislationChanges?: Legislation;
  legislationConsolidates?: Legislation;
  legislationDate?: Date;
  legislationDateVersion?: Date;
  legislationIdentifier?: Text | URL;
  legislationJurisdiction?: Text | AdministrativeArea;
  legislationLegalForce?: LegalForceStatus;
  legislationPassedBy?: Organization | Person;
  legislationResponsible?: Person | Organization;
  legislationTransposes?: Legislation;
  legislationType?: CategoryCode | Text;
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
export interface LegislationObject
  extends Omit<Legislation, "@type">,
    Omit<MediaObject, "@type"> {
  "@type"?: "LegislationObject";
  legislationLegalValue?: LegalValueLevel;
}

/**
 *
 * @see @link https://schema.org/LegislativeBuilding
 *
 * @remarks
 * A legislative building&#x2014;for example, the state capitol.
 *
 **/
export interface LegislativeBuilding extends Omit<GovernmentBuilding, "@type"> {
  "@type"?: "LegislativeBuilding";
}

/**
 *
 * @see @link https://schema.org/LendAction
 *
 * @remarks
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 *
 **/
export interface LendAction extends Omit<TransferAction, "@type"> {
  "@type"?: "LendAction";
  borrower?: Person;
}

/**
 *
 * @see @link https://schema.org/Library
 *
 * @remarks
 * A library.
 *
 **/
export interface Library extends Omit<LocalBusiness, "@type"> {
  "@type"?: "Library";
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
export interface LibrarySystem extends Omit<Organization, "@type"> {
  "@type"?: "LibrarySystem";
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
export interface LifestyleModification extends Omit<MedicalEntity, "@type"> {
  "@type"?: "LifestyleModification";
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
export interface Ligament extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Ligament";
}

/**
 *
 * @see @link https://schema.org/LikeAction
 *
 * @remarks
 * The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.
 *
 **/
export interface LikeAction extends Omit<ReactAction, "@type"> {
  "@type"?: "LikeAction";
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
export interface LinkRole extends Omit<Role, "@type"> {
  "@type"?: "LinkRole";
  inLanguage?: Text | Language;
  linkRelationship?: Text;
}

/**
 *
 * @see @link https://schema.org/LiquorStore
 *
 * @remarks
 * A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.
 *
 **/
export interface LiquorStore extends Omit<Store, "@type"> {
  "@type"?: "LiquorStore";
}

/**
 *
 * @see @link https://schema.org/ListenAction
 *
 * @remarks
 * The act of consuming audio content.
 *
 **/
export interface ListenAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "ListenAction";
}

/**
 *
 * @see @link https://schema.org/LiteraryEvent
 *
 * @remarks
 * Event type: Literary event.
 *
 **/
export interface LiteraryEvent extends Omit<Event, "@type"> {
  "@type"?: "LiteraryEvent";
}

/**
 *
 * @see @link https://schema.org/LiveBlogPosting
 *
 * @remarks
 * A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 *
 **/
export interface LiveBlogPosting extends Omit<BlogPosting, "@type"> {
  "@type"?: "LiveBlogPosting";
  coverageEndTime?: DateTime;
  coverageStartTime?: DateTime;
  liveBlogUpdate?: BlogPosting;
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
export interface LoanOrCredit extends Omit<FinancialProduct, "@type"> {
  "@type"?: "LoanOrCredit";
  amount?: Number | MonetaryAmount;
  currency?: Text;
  gracePeriod?: Duration;
  loanRepaymentForm?: RepaymentSpecification;
  loanTerm?: QuantitativeValue;
  loanType?: URL | Text;
  recourseLoan?: Boolean;
  renegotiableLoan?: Boolean;
  requiredCollateral?: Text | Thing;
}

/**
 *
 * @see @link https://schema.org/LocalBusiness
 *
 * @remarks
 * A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 *
 **/
export interface LocalBusiness
  extends Omit<Organization, "@type">,
    Omit<Place, "@type"> {
  "@type"?: "LocalBusiness";
  branchOf?: Organization;
  currenciesAccepted?: Text;
  openingHours?: Text;
  paymentAccepted?: Text;
  priceRange?: Text;
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
export interface LocationFeatureSpecification
  extends Omit<PropertyValue, "@type"> {
  "@type"?: "LocationFeatureSpecification";
  hoursAvailable?: OpeningHoursSpecification;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
}

/**
 *
 * @see @link https://schema.org/Locksmith
 *
 * @remarks
 * A locksmith.
 *
 **/
export interface Locksmith extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "Locksmith";
}

/**
 *
 * @see @link https://schema.org/LodgingBusiness
 *
 * @remarks
 * A lodging business, such as a motel, hotel, or inn.
 *
 **/
export interface LodgingBusiness extends Omit<LocalBusiness, "@type"> {
  "@type"?: "LodgingBusiness";
  amenityFeature?: LocationFeatureSpecification;
  audience?: Audience;
  availableLanguage?: Language | Text;
  checkinTime?: DateTime | Time;
  checkoutTime?: DateTime | Time;
  numberOfRooms?: Number | QuantitativeValue;
  petsAllowed?: Text | Boolean;
  starRating?: Rating;
}

/**
 *
 * @see @link https://schema.org/LodgingReservation
 *
 * @remarks
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 **/
export interface LodgingReservation extends Omit<Reservation, "@type"> {
  "@type"?: "LodgingReservation";
  checkinTime?: DateTime | Time;
  checkoutTime?: DateTime | Time;
  lodgingUnitDescription?: Text;
  lodgingUnitType?: QualitativeValue | Text;
  numAdults?: Integer | QuantitativeValue;
  numChildren?: Integer | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/LoseAction
 *
 * @remarks
 * The act of being defeated in a competitive activity.
 *
 **/
export interface LoseAction extends Omit<AchieveAction, "@type"> {
  "@type"?: "LoseAction";
  winner?: Person;
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
export interface LymphaticVessel extends Omit<Vessel, "@type"> {
  "@type"?: "LymphaticVessel";
  originatesFrom?: Vessel;
  regionDrained?: AnatomicalStructure | AnatomicalSystem;
  runsTo?: Vessel;
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
export interface Manuscript extends Omit<CreativeWork, "@type"> {
  "@type"?: "Manuscript";
}

/**
 *
 * @see @link https://schema.org/Map
 *
 * @remarks
 * A map.
 *
 **/
export interface Map extends Omit<CreativeWork, "@type"> {
  "@type"?: "Map";
  mapType?: MapCategoryType;
}

/**
 *
 * @see @link https://schema.org/MarryAction
 *
 * @remarks
 * The act of marrying a person.
 *
 **/
export interface MarryAction extends Omit<InteractAction, "@type"> {
  "@type"?: "MarryAction";
}

/**
 *
 * @see @link https://schema.org/Mass
 *
 * @remarks
 * Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.
 *
 **/
export interface Mass extends Omit<Quantity, "@type"> {
  "@type"?: "Mass";
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
export interface MathSolver extends Omit<CreativeWork, "@type"> {
  "@type"?: "MathSolver";
  mathExpression?: Text | SolveMathAction;
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
export interface MaximumDoseSchedule extends Omit<DoseSchedule, "@type"> {
  "@type"?: "MaximumDoseSchedule";
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
export interface MeasurementTypeEnumeration extends Omit<Enumeration, "@type"> {
  "@type"?: "MeasurementTypeEnumeration";
}

/**
 *
 * @see @link https://schema.org/MediaGallery
 *
 * @remarks
 * Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.
 *
 **/
export interface MediaGallery extends Omit<CollectionPage, "@type"> {
  "@type"?: "MediaGallery";
}

/**
 *
 * @see @link https://schema.org/MediaObject
 *
 * @remarks
 * A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 *
 **/
export interface MediaObject extends Omit<CreativeWork, "@type"> {
  "@type"?: "MediaObject";
  associatedArticle?: NewsArticle;
  bitrate?: Text;
  contentSize?: Text;
  contentUrl?: URL;
  duration?: Duration;
  embedUrl?: URL;
  encodesCreativeWork?: CreativeWork;
  encodingFormat?: Text | URL;
  endTime?: DateTime | Time;
  height?: QuantitativeValue | Distance;
  ineligibleRegion?: GeoShape | Text | Place;
  playerType?: Text;
  productionCompany?: Organization;
  regionsAllowed?: Place;
  requiresSubscription?: Boolean | MediaSubscription;
  startTime?: DateTime | Time;
  uploadDate?: Date;
  width?: QuantitativeValue | Distance;
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
export interface MediaReview extends Omit<Review, "@type"> {
  "@type"?: "MediaReview";
  mediaAuthenticityCategory?: MediaManipulationRatingEnumeration;
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
export interface MediaSubscription extends Omit<Intangible, "@type"> {
  "@type"?: "MediaSubscription";
  authenticator?: Organization;
  expectsAcceptanceOf?: Offer;
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
export interface MedicalAudience
  extends Omit<Audience, "@type">,
    Omit<PeopleAudience, "@type"> {
  "@type"?: "MedicalAudience";
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
export interface MedicalBusiness extends Omit<LocalBusiness, "@type"> {
  "@type"?: "MedicalBusiness";
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
export interface MedicalCause extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalCause";
  causeOf?: MedicalEntity;
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
export interface MedicalClinic
  extends Omit<MedicalOrganization, "@type">,
    Omit<MedicalBusiness, "@type"> {
  "@type"?: "MedicalClinic";
  availableService?: MedicalTest | MedicalTherapy | MedicalProcedure;
  medicalSpecialty?: MedicalSpecialty;
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
export interface MedicalCode
  extends Omit<CategoryCode, "@type">,
    Omit<MedicalIntangible, "@type"> {
  "@type"?: "MedicalCode";
  codeValue?: Text;
  codingSystem?: Text;
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
export interface MedicalCondition extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalCondition";
  associatedAnatomy?:
    | AnatomicalStructure
    | AnatomicalSystem
    | SuperficialAnatomy;
  differentialDiagnosis?: DDxElement;
  drug?: Drug;
  epidemiology?: Text;
  expectedPrognosis?: Text;
  naturalProgression?: Text;
  pathophysiology?: Text;
  possibleComplication?: Text;
  possibleTreatment?: MedicalTherapy;
  primaryPrevention?: MedicalTherapy;
  riskFactor?: MedicalRiskFactor;
  secondaryPrevention?: MedicalTherapy;
  signOrSymptom?: MedicalSignOrSymptom;
  stage?: MedicalConditionStage;
  status?: EventStatusType | Text | MedicalStudyStatus;
  typicalTest?: MedicalTest;
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
export interface MedicalConditionStage
  extends Omit<MedicalIntangible, "@type"> {
  "@type"?: "MedicalConditionStage";
  stageAsNumber?: Number;
  subStageSuffix?: Text;
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
export interface MedicalContraindication extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalContraindication";
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
export interface MedicalDevice extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalDevice";
  adverseOutcome?: MedicalEntity;
  contraindication?: Text | MedicalContraindication;
  postOp?: Text;
  preOp?: Text;
  procedure?: Text;
  seriousAdverseOutcome?: MedicalEntity;
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
export interface MedicalEntity extends Omit<Thing, "@type"> {
  "@type"?: "MedicalEntity";
  code?: MedicalCode;
  guideline?: MedicalGuideline;
  legalStatus?: MedicalEnumeration | Text | DrugLegalStatus;
  medicineSystem?: MedicineSystem;
  recognizingAuthority?: Organization;
  relevantSpecialty?: MedicalSpecialty;
  study?: MedicalStudy;
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
export interface MedicalEnumeration extends Omit<Enumeration, "@type"> {
  "@type"?: "MedicalEnumeration";
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
export interface MedicalGuideline extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalGuideline";
  evidenceLevel?: MedicalEvidenceLevel;
  evidenceOrigin?: Text;
  guidelineDate?: Date;
  guidelineSubject?: MedicalEntity;
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
export interface MedicalGuidelineContraindication
  extends Omit<MedicalGuideline, "@type"> {
  "@type"?: "MedicalGuidelineContraindication";
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
export interface MedicalGuidelineRecommendation
  extends Omit<MedicalGuideline, "@type"> {
  "@type"?: "MedicalGuidelineRecommendation";
  recommendationStrength?: Text;
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
export interface MedicalIndication extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalIndication";
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
export interface MedicalIntangible extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalIntangible";
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
export interface MedicalObservationalStudy extends Omit<MedicalStudy, "@type"> {
  "@type"?: "MedicalObservationalStudy";
  studyDesign?: MedicalObservationalStudyDesign;
}

/**
 *
 * @see @link https://schema.org/MedicalOrganization
 *
 * @remarks
 * A medical organization (physical or not), such as hospital, institution or clinic.
 *
 **/
export interface MedicalOrganization extends Omit<Organization, "@type"> {
  "@type"?: "MedicalOrganization";
  healthPlanNetworkId?: Text;
  isAcceptingNewPatients?: Boolean;
  medicalSpecialty?: MedicalSpecialty;
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
export interface MedicalProcedure extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalProcedure";
  bodyLocation?: Text;
  followup?: Text;
  howPerformed?: Text;
  preparation?: MedicalEntity | Text;
  procedureType?: MedicalProcedureType;
  status?: EventStatusType | Text | MedicalStudyStatus;
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
export interface MedicalRiskCalculator
  extends Omit<MedicalRiskEstimator, "@type"> {
  "@type"?: "MedicalRiskCalculator";
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
export interface MedicalRiskEstimator extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalRiskEstimator";
  estimatesRiskOf?: MedicalEntity;
  includedRiskFactor?: MedicalRiskFactor;
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
export interface MedicalRiskFactor extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalRiskFactor";
  increasesRiskOf?: MedicalEntity;
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
export interface MedicalRiskScore extends Omit<MedicalRiskEstimator, "@type"> {
  "@type"?: "MedicalRiskScore";
  algorithm?: Text;
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
export interface MedicalScholarlyArticle
  extends Omit<ScholarlyArticle, "@type"> {
  "@type"?: "MedicalScholarlyArticle";
  publicationType?: Text;
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
export interface MedicalSign extends Omit<MedicalSignOrSymptom, "@type"> {
  "@type"?: "MedicalSign";
  identifyingExam?: PhysicalExam;
  identifyingTest?: MedicalTest;
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
export interface MedicalSignOrSymptom extends Omit<MedicalCondition, "@type"> {
  "@type"?: "MedicalSignOrSymptom";
  possibleTreatment?: MedicalTherapy;
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
export interface MedicalStudy extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalStudy";
  healthCondition?: MedicalCondition;
  sponsor?: Person | Organization;
  status?: EventStatusType | Text | MedicalStudyStatus;
  studyLocation?: AdministrativeArea;
  studySubject?: MedicalEntity;
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
export interface MedicalSymptom extends Omit<MedicalSignOrSymptom, "@type"> {
  "@type"?: "MedicalSymptom";
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
export interface MedicalTest extends Omit<MedicalEntity, "@type"> {
  "@type"?: "MedicalTest";
  affectedBy?: Drug;
  normalRange?: MedicalEnumeration | Text;
  signDetected?: MedicalSign;
  usedToDiagnose?: MedicalCondition;
  usesDevice?: MedicalDevice;
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
export interface MedicalTestPanel extends Omit<MedicalTest, "@type"> {
  "@type"?: "MedicalTestPanel";
  subTest?: MedicalTest;
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
export interface MedicalTherapy extends Omit<TherapeuticProcedure, "@type"> {
  "@type"?: "MedicalTherapy";
  contraindication?: Text | MedicalContraindication;
  duplicateTherapy?: MedicalTherapy;
  seriousAdverseOutcome?: MedicalEntity;
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
export interface MedicalTrial extends Omit<MedicalStudy, "@type"> {
  "@type"?: "MedicalTrial";
  trialDesign?: MedicalTrialDesign;
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
export interface MedicalWebPage extends Omit<WebPage, "@type"> {
  "@type"?: "MedicalWebPage";
  aspect?: Text;
  medicalAudience?: MedicalAudienceType | MedicalAudience;
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
export interface MeetingRoom extends Omit<Room, "@type"> {
  "@type"?: "MeetingRoom";
}

/**
 *
 * @see @link https://schema.org/MensClothingStore
 *
 * @remarks
 * A men's clothing store.
 *
 **/
export interface MensClothingStore extends Omit<Store, "@type"> {
  "@type"?: "MensClothingStore";
}

/**
 *
 * @see @link https://schema.org/Menu
 *
 * @remarks
 * A structured representation of food or drink items available from a FoodEstablishment.
 *
 **/
export interface Menu extends Omit<CreativeWork, "@type"> {
  "@type"?: "Menu";
  hasMenuItem?: MenuItem;
  hasMenuSection?: MenuSection;
}

/**
 *
 * @see @link https://schema.org/MenuItem
 *
 * @remarks
 * A food or drink item listed in a menu or menu section.
 *
 **/
export interface MenuItem extends Omit<Intangible, "@type"> {
  "@type"?: "MenuItem";
  menuAddOn?: MenuItem | MenuSection;
  nutrition?: NutritionInformation;
  offers?: Offer | Demand;
  suitableForDiet?: RestrictedDiet;
}

/**
 *
 * @see @link https://schema.org/MenuSection
 *
 * @remarks
 * A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 *
 **/
export interface MenuSection extends Omit<CreativeWork, "@type"> {
  "@type"?: "MenuSection";
  hasMenuItem?: MenuItem;
  hasMenuSection?: MenuSection;
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
export interface MerchantReturnPolicy extends Omit<Intangible, "@type"> {
  "@type"?: "MerchantReturnPolicy";
  inStoreReturnsOffered?: Boolean;
  merchantReturnDays?: Integer;
  merchantReturnLink?: URL;
  refundType?: RefundTypeEnumeration;
  returnFees?: ReturnFeesEnumeration;
  returnPolicyCategory?: MerchantReturnEnumeration;
}

/**
 *
 * @see @link https://schema.org/Message
 *
 * @remarks
 * A single message from a sender to one or more organizations or people.
 *
 **/
export interface Message extends Omit<CreativeWork, "@type"> {
  "@type"?: "Message";
  bccRecipient?: Person | Organization | ContactPoint;
  ccRecipient?: ContactPoint | Person | Organization;
  dateRead?: DateTime | Date;
  dateReceived?: DateTime;
  dateSent?: DateTime;
  messageAttachment?: CreativeWork;
  recipient?: Organization | ContactPoint | Person | Audience;
  sender?: Person | Audience | Organization;
  toRecipient?: ContactPoint | Audience | Person | Organization;
}

/**
 *
 * @see @link https://schema.org/MiddleSchool
 *
 * @remarks
 * A middle school (typically for children aged around 11-14, although this varies somewhat).
 *
 **/
export interface MiddleSchool extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "MiddleSchool";
}

/**
 *
 * @see @link https://schema.org/MobileApplication
 *
 * @remarks
 * A software application designed specifically to work well on a mobile device such as a telephone.
 *
 **/
export interface MobileApplication extends Omit<SoftwareApplication, "@type"> {
  "@type"?: "MobileApplication";
  carrierRequirements?: Text;
}

/**
 *
 * @see @link https://schema.org/MobilePhoneStore
 *
 * @remarks
 * A store that sells mobile phones and related accessories.
 *
 **/
export interface MobilePhoneStore extends Omit<Store, "@type"> {
  "@type"?: "MobilePhoneStore";
}

/**
 *
 * @see @link https://schema.org/MonetaryAmount
 *
 * @remarks
 * A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between ??1,000 and ??1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
 *
 * @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO
 *
 **/
export interface MonetaryAmount extends Omit<StructuredValue, "@type"> {
  "@type"?: "MonetaryAmount";
  currency?: Text;
  maxValue?: Number;
  minValue?: Number;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
  value?: Number | StructuredValue | Boolean | Text;
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
export interface MonetaryAmountDistribution
  extends Omit<QuantitativeValueDistribution, "@type"> {
  "@type"?: "MonetaryAmountDistribution";
  currency?: Text;
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
export interface MonetaryGrant extends Omit<Grant, "@type"> {
  "@type"?: "MonetaryGrant";
  amount?: Number | MonetaryAmount;
  funder?: Organization | Person;
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
export interface MoneyTransfer extends Omit<TransferAction, "@type"> {
  "@type"?: "MoneyTransfer";
  amount?: Number | MonetaryAmount;
  beneficiaryBank?: Text | BankOrCreditUnion;
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
export interface MortgageLoan extends Omit<LoanOrCredit, "@type"> {
  "@type"?: "MortgageLoan";
  domiciledMortgage?: Boolean;
  loanMortgageMandateAmount?: MonetaryAmount;
}

/**
 *
 * @see @link https://schema.org/Mosque
 *
 * @remarks
 * A mosque.
 *
 **/
export interface Mosque extends Omit<PlaceOfWorship, "@type"> {
  "@type"?: "Mosque";
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
export interface Motel extends Omit<LodgingBusiness, "@type"> {
  "@type"?: "Motel";
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
export interface Motorcycle extends Omit<Vehicle, "@type"> {
  "@type"?: "Motorcycle";
}

/**
 *
 * @see @link https://schema.org/MotorcycleDealer
 *
 * @remarks
 * A motorcycle dealer.
 *
 **/
export interface MotorcycleDealer extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "MotorcycleDealer";
}

/**
 *
 * @see @link https://schema.org/MotorcycleRepair
 *
 * @remarks
 * A motorcycle repair shop.
 *
 **/
export interface MotorcycleRepair extends Omit<AutomotiveBusiness, "@type"> {
  "@type"?: "MotorcycleRepair";
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
export interface MotorizedBicycle extends Omit<Vehicle, "@type"> {
  "@type"?: "MotorizedBicycle";
}

/**
 *
 * @see @link https://schema.org/Mountain
 *
 * @remarks
 * A mountain, like Mount Whitney or Mount Everest.
 *
 **/
export interface Mountain extends Omit<Landform, "@type"> {
  "@type"?: "Mountain";
}

/**
 *
 * @see @link https://schema.org/MoveAction
 *
 * @remarks
 * The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 *
 **/
export interface MoveAction extends Omit<Action, "@type"> {
  "@type"?: "MoveAction";
  fromLocation?: Place;
  toLocation?: Place;
}

/**
 *
 * @see @link https://schema.org/Movie
 *
 * @remarks
 * A movie.
 *
 **/
export interface Movie extends Omit<CreativeWork, "@type"> {
  "@type"?: "Movie";
  actor?: Person;
  actors?: Array<Person>;
  countryOfOrigin?: Country;
  director?: Person;
  directors?: Array<Person>;
  duration?: Duration;
  musicBy?: Person | MusicGroup;
  productionCompany?: Organization;
  subtitleLanguage?: Text | Language;
  titleEIDR?: URL | Text;
  trailer?: VideoObject;
}

/**
 *
 * @see @link https://schema.org/MovieClip
 *
 * @remarks
 * A short segment/part of a movie.
 *
 **/
export interface MovieClip extends Omit<Clip, "@type"> {
  "@type"?: "MovieClip";
}

/**
 *
 * @see @link https://schema.org/MovieRentalStore
 *
 * @remarks
 * A movie rental store.
 *
 **/
export interface MovieRentalStore extends Omit<Store, "@type"> {
  "@type"?: "MovieRentalStore";
}

/**
 *
 * @see @link https://schema.org/MovieSeries
 *
 * @remarks
 * A series of movies. Included movies can be indicated with the hasPart property.
 *
 **/
export interface MovieSeries extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "MovieSeries";
  actor?: Person;
  actors?: Array<Person>;
  director?: Person;
  directors?: Array<Person>;
  musicBy?: Person | MusicGroup;
  productionCompany?: Organization;
  trailer?: VideoObject;
}

/**
 *
 * @see @link https://schema.org/MovieTheater
 *
 * @remarks
 * A movie theater.
 *
 **/
export interface MovieTheater
  extends Omit<CivicStructure, "@type">,
    Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "MovieTheater";
  screenCount?: Number;
}

/**
 *
 * @see @link https://schema.org/MovingCompany
 *
 * @remarks
 * A moving company.
 *
 **/
export interface MovingCompany
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "MovingCompany";
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
export interface Muscle extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Muscle";
  antagonist?: Muscle;
  bloodSupply?: Vessel;
  insertion?: AnatomicalStructure;
  muscleAction?: Text;
  nerve?: Nerve;
}

/**
 *
 * @see @link https://schema.org/Museum
 *
 * @remarks
 * A museum.
 *
 **/
export interface Museum extends Omit<CivicStructure, "@type"> {
  "@type"?: "Museum";
}

/**
 *
 * @see @link https://schema.org/MusicAlbum
 *
 * @remarks
 * A collection of music tracks.
 *
 **/
export interface MusicAlbum extends Omit<MusicPlaylist, "@type"> {
  "@type"?: "MusicAlbum";
  albumProductionType?: MusicAlbumProductionType;
  albumRelease?: MusicRelease;
  albumReleaseType?: MusicAlbumReleaseType;
  byArtist?: MusicGroup | Person;
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
export interface MusicComposition extends Omit<CreativeWork, "@type"> {
  "@type"?: "MusicComposition";
  composer?: Organization | Person;
  firstPerformance?: Event;
  includedComposition?: MusicComposition;
  iswcCode?: Text;
  lyricist?: Person;
  lyrics?: CreativeWork;
  musicalKey?: Text;
  musicArrangement?: MusicComposition;
  musicCompositionForm?: Text;
  recordedAs?: MusicRecording;
}

/**
 *
 * @see @link https://schema.org/MusicEvent
 *
 * @remarks
 * Event type: Music event.
 *
 **/
export interface MusicEvent extends Omit<Event, "@type"> {
  "@type"?: "MusicEvent";
}

/**
 *
 * @see @link https://schema.org/MusicGroup
 *
 * @remarks
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 *
 **/
export interface MusicGroup extends Omit<PerformingGroup, "@type"> {
  "@type"?: "MusicGroup";
  album?: MusicAlbum;
  albums?: Array<MusicAlbum>;
  genre?: URL | Text;
  musicGroupMember?: Person;
  track?: MusicRecording | ItemList<MusicRecording>;
  tracks?: Array<MusicRecording>;
}

/**
 *
 * @see @link https://schema.org/MusicPlaylist
 *
 * @remarks
 * A collection of music tracks in playlist form.
 *
 **/
export interface MusicPlaylist extends Omit<CreativeWork, "@type"> {
  "@type"?: "MusicPlaylist";
  numTracks?: Integer;
  track?: MusicRecording | ItemList<MusicRecording>;
  tracks?: Array<MusicRecording>;
}

/**
 *
 * @see @link https://schema.org/MusicRecording
 *
 * @remarks
 * A music recording (track), usually a single song.
 *
 **/
export interface MusicRecording extends Omit<CreativeWork, "@type"> {
  "@type"?: "MusicRecording";
  byArtist?: MusicGroup | Person;
  duration?: Duration;
  inAlbum?: MusicAlbum;
  inPlaylist?: MusicPlaylist;
  isrcCode?: Text;
  recordingOf?: MusicComposition;
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
export interface MusicRelease extends Omit<MusicPlaylist, "@type"> {
  "@type"?: "MusicRelease";
  catalogNumber?: Text;
  creditedTo?: Person | Organization;
  duration?: Duration;
  musicReleaseFormat?: MusicReleaseFormatType;
  recordLabel?: Organization;
  releaseOf?: MusicAlbum;
}

/**
 *
 * @see @link https://schema.org/MusicStore
 *
 * @remarks
 * A music store.
 *
 **/
export interface MusicStore extends Omit<Store, "@type"> {
  "@type"?: "MusicStore";
}

/**
 *
 * @see @link https://schema.org/MusicVenue
 *
 * @remarks
 * A music venue.
 *
 **/
export interface MusicVenue extends Omit<CivicStructure, "@type"> {
  "@type"?: "MusicVenue";
}

/**
 *
 * @see @link https://schema.org/MusicVideoObject
 *
 * @remarks
 * A music video file.
 *
 **/
export interface MusicVideoObject extends Omit<MediaObject, "@type"> {
  "@type"?: "MusicVideoObject";
}

/**
 *
 * @see @link https://schema.org/NailSalon
 *
 * @remarks
 * A nail salon.
 *
 **/
export interface NailSalon extends Omit<HealthAndBeautyBusiness, "@type"> {
  "@type"?: "NailSalon";
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
export interface Nerve extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Nerve";
  branch?: AnatomicalStructure;
  nerveMotor?: Muscle;
  sensoryUnit?: SuperficialAnatomy | AnatomicalStructure;
  sourcedFrom?: BrainStructure;
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
export interface NewsArticle extends Omit<Article, "@type"> {
  "@type"?: "NewsArticle";
  dateline?: Text;
  printColumn?: Text;
  printEdition?: Text;
  printPage?: Text;
  printSection?: Text;
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
export interface NewsMediaOrganization extends Omit<Organization, "@type"> {
  "@type"?: "NewsMediaOrganization";
  actionableFeedbackPolicy?: CreativeWork | URL;
  correctionsPolicy?: URL | CreativeWork;
  diversityPolicy?: CreativeWork | URL;
  diversityStaffingReport?: Article | URL;
  ethicsPolicy?: URL | CreativeWork;
  masthead?: CreativeWork | URL;
  missionCoveragePrioritiesPolicy?: URL | CreativeWork;
  noBylinesPolicy?: CreativeWork | URL;
  ownershipFundingInfo?: Text | URL | CreativeWork | AboutPage;
  unnamedSourcesPolicy?: CreativeWork | URL;
  verificationFactCheckingPolicy?: CreativeWork | URL;
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
export interface Newspaper extends Omit<Periodical, "@type"> {
  "@type"?: "Newspaper";
}

/**
 *
 * @see @link https://schema.org/NGO
 *
 * @remarks
 * Organization: Non-governmental Organization.
 *
 **/
export interface NGO extends Omit<Organization, "@type"> {
  "@type"?: "NGO";
}

/**
 *
 * @see @link https://schema.org/NightClub
 *
 * @remarks
 * A nightclub or discotheque.
 *
 **/
export interface NightClub extends Omit<EntertainmentBusiness, "@type"> {
  "@type"?: "NightClub";
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
export interface NonprofitType extends Omit<Enumeration, "@type"> {
  "@type"?: "NonprofitType";
}

/**
 *
 * @see @link https://schema.org/Notary
 *
 * @remarks
 * A notary.
 *
 **/
export interface Notary extends Omit<LegalService, "@type"> {
  "@type"?: "Notary";
}

/**
 *
 * @see @link https://schema.org/NoteDigitalDocument
 *
 * @remarks
 * A file containing a note, primarily for the author.
 *
 **/
export interface NoteDigitalDocument extends Omit<DigitalDocument, "@type"> {
  "@type"?: "NoteDigitalDocument";
}

/**
 *
 * @see @link https://schema.org/NutritionInformation
 *
 * @remarks
 * Nutritional information about the recipe.
 *
 **/
export interface NutritionInformation extends Omit<StructuredValue, "@type"> {
  "@type"?: "NutritionInformation";
  calories?: Energy;
  carbohydrateContent?: Mass;
  cholesterolContent?: Mass;
  fatContent?: Mass;
  fiberContent?: Mass;
  proteinContent?: Mass;
  saturatedFatContent?: Mass;
  servingSize?: Text;
  sodiumContent?: Mass;
  sugarContent?: Mass;
  transFatContent?: Mass;
  unsaturatedFatContent?: Mass;
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
export interface Observation extends Omit<Intangible, "@type"> {
  "@type"?: "Observation";
  marginOfError?: QuantitativeValue;
  measuredProperty?: Property;
  measuredValue?: DataType;
  observationDate?: DateTime;
  observedNode?: StatisticalPopulation;
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
export interface Occupation extends Omit<Intangible, "@type"> {
  "@type"?: "Occupation";
  educationRequirements?: Text | EducationalOccupationalCredential;
  estimatedSalary?: MonetaryAmount | Number | MonetaryAmountDistribution;
  experienceRequirements?: Text | OccupationalExperienceRequirements;
  occupationalCategory?: CategoryCode | Text;
  occupationLocation?: AdministrativeArea;
  qualifications?: Text | EducationalOccupationalCredential;
  responsibilities?: Text;
  skills?: DefinedTerm | Text;
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
export interface OccupationalExperienceRequirements
  extends Omit<Intangible, "@type"> {
  "@type"?: "OccupationalExperienceRequirements";
  monthsOfExperience?: Number;
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
export interface OccupationalTherapy extends Omit<MedicalTherapy, "@type"> {
  "@type"?: "OccupationalTherapy";
}

/**
 *
 * @see @link https://schema.org/OceanBodyOfWater
 *
 * @remarks
 * An ocean (for example, the Pacific).
 *
 **/
export interface OceanBodyOfWater extends Omit<BodyOfWater, "@type"> {
  "@type"?: "OceanBodyOfWater";
}

/**
 *
 * @see @link https://schema.org/Offer
 *
 * @remarks
 * An offer to transfer some rights to an item or to provide a service ??? for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 *
 * @see @link http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms
 *
 **/
export interface Offer extends Omit<Intangible, "@type"> {
  "@type"?: "Offer";
  acceptedPaymentMethod?: LoanOrCredit | PaymentMethod;
  addOn?: Offer;
  advanceBookingRequirement?: QuantitativeValue;
  aggregateRating?: AggregateRating;
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  availability?: ItemAvailability;
  availabilityEnds?: DateTime | Time | Date;
  availabilityStarts?: DateTime | Date | Time;
  availableAtOrFrom?: Place;
  availableDeliveryMethod?: DeliveryMethod;
  businessFunction?: BusinessFunction;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  deliveryLeadTime?: QuantitativeValue;
  eligibleCustomerType?: BusinessEntityType;
  eligibleDuration?: QuantitativeValue;
  eligibleQuantity?: QuantitativeValue;
  eligibleRegion?: Text | GeoShape | Place;
  eligibleTransactionVolume?: PriceSpecification;
  gtin?: Text;
  gtin12?: Text;
  gtin13?: Text;
  gtin14?: Text;
  gtin8?: Text;
  hasMeasurement?: QuantitativeValue;
  includesObject?: TypeAndQuantityNode;
  ineligibleRegion?: GeoShape | Text | Place;
  inventoryLevel?: QuantitativeValue;
  itemCondition?: OfferItemCondition;
  itemOffered?:
    | Trip
    | Product
    | MenuItem
    | Service
    | Event
    | CreativeWork
    | AggregateOffer;
  leaseLength?: Duration | QuantitativeValue;
  mpn?: Text;
  offeredBy?: Person | Organization;
  price?: Number | Text;
  priceCurrency?: Text;
  priceSpecification?: PriceSpecification;
  priceValidUntil?: Date;
  review?: Review;
  reviews?: Array<Review>;
  seller?: Organization | Person;
  serialNumber?: Text;
  shippingDetails?: OfferShippingDetails;
  sku?: Text;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
  warranty?: WarrantyPromise;
}

/**
 *
 * @see @link https://schema.org/OfferCatalog
 *
 * @remarks
 * An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
 *
 **/
export interface OfferCatalog<T = Text> extends Omit<ItemList<T>, "@type"> {
  "@type"?: "OfferCatalog";
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
export interface OfferForLease extends Omit<Offer, "@type"> {
  "@type"?: "OfferForLease";
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
export interface OfferForPurchase extends Omit<Offer, "@type"> {
  "@type"?: "OfferForPurchase";
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
export interface OfferShippingDetails extends Omit<StructuredValue, "@type"> {
  "@type"?: "OfferShippingDetails";
  deliveryTime?: ShippingDeliveryTime;
  doesNotShip?: Boolean;
  shippingDestination?: DefinedRegion;
  shippingLabel?: Text;
  shippingRate?: MonetaryAmount;
  shippingSettingsLink?: URL;
  transitTimeLabel?: Text;
}

/**
 *
 * @see @link https://schema.org/OfficeEquipmentStore
 *
 * @remarks
 * An office equipment store.
 *
 **/
export interface OfficeEquipmentStore extends Omit<Store, "@type"> {
  "@type"?: "OfficeEquipmentStore";
}

/**
 *
 * @see @link https://schema.org/OnDemandEvent
 *
 * @remarks
 * A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 *
 **/
export interface OnDemandEvent extends Omit<PublicationEvent, "@type"> {
  "@type"?: "OnDemandEvent";
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
export interface OpeningHoursSpecification
  extends Omit<StructuredValue, "@type"> {
  "@type"?: "OpeningHoursSpecification";
  closes?: Time;
  dayOfWeek?: DayOfWeek;
  opens?: Time;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
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
export interface OpinionNewsArticle extends Omit<NewsArticle, "@type"> {
  "@type"?: "OpinionNewsArticle";
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
export interface Optician extends Omit<MedicalBusiness, "@type"> {
  "@type"?: "Optician";
}

/**
 *
 * @see @link https://schema.org/Order
 *
 * @remarks
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *
 **/
export interface Order extends Omit<Intangible, "@type"> {
  "@type"?: "Order";
  acceptedOffer?: Offer;
  billingAddress?: PostalAddress;
  broker?: Person | Organization;
  confirmationNumber?: Text;
  customer?: Organization | Person;
  discount?: Number | Text;
  discountCode?: Text;
  discountCurrency?: Text;
  isGift?: Boolean;
  merchant?: Person | Organization;
  orderDate?: DateTime | Date;
  orderDelivery?: ParcelDelivery;
  orderedItem?: Product | OrderItem | Service;
  orderNumber?: Text;
  orderStatus?: OrderStatus;
  partOfInvoice?: Invoice;
  paymentDue?: DateTime;
  paymentDueDate?: DateTime | Date;
  paymentMethod?: PaymentMethod;
  paymentMethodId?: Text;
  paymentUrl?: URL;
  seller?: Organization | Person;
}

/**
 *
 * @see @link https://schema.org/OrderAction
 *
 * @remarks
 * An agent orders an object/product/service to be delivered/sent.
 *
 **/
export interface OrderAction extends Omit<TradeAction, "@type"> {
  "@type"?: "OrderAction";
  deliveryMethod?: DeliveryMethod;
}

/**
 *
 * @see @link https://schema.org/OrderItem
 *
 * @remarks
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 *
 **/
export interface OrderItem extends Omit<Intangible, "@type"> {
  "@type"?: "OrderItem";
  orderDelivery?: ParcelDelivery;
  orderedItem?: Product | OrderItem | Service;
  orderItemNumber?: Text;
  orderItemStatus?: OrderStatus;
  orderQuantity?: Number;
}

/**
 *
 * @see @link https://schema.org/Organization
 *
 * @remarks
 * An organization such as a school, NGO, corporation, club, etc.
 *
 **/
export interface Organization extends Omit<Thing, "@type"> {
  "@type"?: "Organization";
  actionableFeedbackPolicy?: CreativeWork | URL;
  address?: Text | PostalAddress;
  aggregateRating?: AggregateRating;
  alumni?: Person;
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  award?: Text;
  awards?: Array<Text>;
  brand?: Brand | Organization;
  contactPoint?: ContactPoint;
  contactPoints?: Array<ContactPoint>;
  correctionsPolicy?: URL | CreativeWork;
  department?: Organization;
  dissolutionDate?: Date;
  diversityPolicy?: CreativeWork | URL;
  diversityStaffingReport?: Article | URL;
  duns?: Text;
  email?: Text;
  employee?: Person;
  employees?: Array<Person>;
  ethicsPolicy?: URL | CreativeWork;
  event?: Event;
  events?: Array<Event>;
  faxNumber?: Text;
  founder?: Person;
  founders?: Array<Person>;
  foundingDate?: Date;
  foundingLocation?: Place;
  funder?: Organization | Person;
  globalLocationNumber?: Text;
  hasCredential?: EducationalOccupationalCredential;
  hasMerchantReturnPolicy?: MerchantReturnPolicy;
  hasOfferCatalog?: OfferCatalog;
  hasPOS?: Place;
  interactionStatistic?: InteractionCounter;
  isicV4?: Text;
  knowsAbout?: Text | URL | Thing;
  knowsLanguage?: Text | Language;
  legalName?: Text;
  leiCode?: Text;
  location?: Place | Text | VirtualLocation | PostalAddress;
  logo?: ImageObject | URL;
  makesOffer?: Offer;
  member?: Organization | Person;
  memberOf?: ProgramMembership | Organization;
  members?: Array<Person> | Array<Organization>;
  naics?: Text;
  nonprofitStatus?: NonprofitType;
  numberOfEmployees?: QuantitativeValue;
  ownershipFundingInfo?: Text | URL | CreativeWork | AboutPage;
  owns?: OwnershipInfo | Product;
  parentOrganization?: Organization;
  publishingPrinciples?: URL | CreativeWork;
  review?: Review;
  reviews?: Array<Review>;
  seeks?: Demand;
  serviceArea?: Place | AdministrativeArea | GeoShape;
  slogan?: Text;
  sponsor?: Person | Organization;
  subOrganization?: Organization;
  taxID?: Text;
  telephone?: Text;
  unnamedSourcesPolicy?: CreativeWork | URL;
  vatID?: Text;
}

/**
 *
 * @see @link https://schema.org/OrganizationRole
 *
 * @remarks
 * A subclass of Role used to describe roles within organizations.
 *
 **/
export interface OrganizationRole extends Omit<Role, "@type"> {
  "@type"?: "OrganizationRole";
  numberedPosition?: Number;
}

/**
 *
 * @see @link https://schema.org/OrganizeAction
 *
 * @remarks
 * The act of manipulating/administering/supervising/controlling one or more objects.
 *
 **/
export interface OrganizeAction extends Omit<Action, "@type"> {
  "@type"?: "OrganizeAction";
}

/**
 *
 * @see @link https://schema.org/OutletStore
 *
 * @remarks
 * An outlet store.
 *
 **/
export interface OutletStore extends Omit<Store, "@type"> {
  "@type"?: "OutletStore";
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
export interface OwnershipInfo extends Omit<StructuredValue, "@type"> {
  "@type"?: "OwnershipInfo";
  acquiredFrom?: Organization | Person;
  ownedFrom?: DateTime;
  ownedThrough?: DateTime;
  typeOfGood?: Service | Product;
}

/**
 *
 * @see @link https://schema.org/PaintAction
 *
 * @remarks
 * The act of producing a painting, typically with paint and canvas as instruments.
 *
 **/
export interface PaintAction extends Omit<CreateAction, "@type"> {
  "@type"?: "PaintAction";
}

/**
 *
 * @see @link https://schema.org/Painting
 *
 * @remarks
 * A painting.
 *
 **/
export interface Painting extends Omit<CreativeWork, "@type"> {
  "@type"?: "Painting";
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
export interface PalliativeProcedure
  extends Omit<MedicalTherapy, "@type">,
    Omit<MedicalProcedure, "@type"> {
  "@type"?: "PalliativeProcedure";
}

/**
 *
 * @see @link https://schema.org/ParcelDelivery
 *
 * @remarks
 * The delivery of a parcel either via the postal service or a commercial service.
 *
 **/
export interface ParcelDelivery extends Omit<Intangible, "@type"> {
  "@type"?: "ParcelDelivery";
  carrier?: Organization;
  deliveryAddress?: PostalAddress;
  deliveryStatus?: DeliveryEvent;
  expectedArrivalFrom?: Date | DateTime;
  expectedArrivalUntil?: Date | DateTime;
  hasDeliveryMethod?: DeliveryMethod;
  itemShipped?: Product;
  originAddress?: PostalAddress;
  partOfOrder?: Order;
  provider?: Organization | Person;
  trackingNumber?: Text;
  trackingUrl?: URL;
}

/**
 *
 * @see @link https://schema.org/ParentAudience
 *
 * @remarks
 * A set of characteristics describing parents, who can be interested in viewing some content.
 *
 **/
export interface ParentAudience extends Omit<PeopleAudience, "@type"> {
  "@type"?: "ParentAudience";
  childMaxAge?: Number;
  childMinAge?: Number;
}

/**
 *
 * @see @link https://schema.org/Park
 *
 * @remarks
 * A park.
 *
 **/
export interface Park extends Omit<CivicStructure, "@type"> {
  "@type"?: "Park";
}

/**
 *
 * @see @link https://schema.org/ParkingFacility
 *
 * @remarks
 * A parking lot or other parking facility.
 *
 **/
export interface ParkingFacility extends Omit<CivicStructure, "@type"> {
  "@type"?: "ParkingFacility";
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
export interface PathologyTest extends Omit<MedicalTest, "@type"> {
  "@type"?: "PathologyTest";
  tissueSample?: Text;
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
export interface Patient
  extends Omit<MedicalAudience, "@type">,
    Omit<Person, "@type"> {
  "@type"?: "Patient";
  diagnosis?: MedicalCondition;
  drug?: Drug;
  healthCondition?: MedicalCondition;
}

/**
 *
 * @see @link https://schema.org/PawnShop
 *
 * @remarks
 * A shop that will buy, or lend money against the security of, personal possessions.
 *
 **/
export interface PawnShop extends Omit<Store, "@type"> {
  "@type"?: "PawnShop";
}

/**
 *
 * @see @link https://schema.org/PayAction
 *
 * @remarks
 * An agent pays a price to a participant.
 *
 **/
export interface PayAction extends Omit<TradeAction, "@type"> {
  "@type"?: "PayAction";
  recipient?: Organization | ContactPoint | Person | Audience;
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
export interface PaymentCard
  extends Omit<PaymentMethod, "@type">,
    Omit<FinancialProduct, "@type"> {
  "@type"?: "PaymentCard";
  cashBack?: Number | Boolean;
  contactlessPayment?: Boolean;
  floorLimit?: MonetaryAmount;
  monthlyMinimumRepaymentAmount?: MonetaryAmount | Number;
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
export interface PaymentChargeSpecification
  extends Omit<PriceSpecification, "@type"> {
  "@type"?: "PaymentChargeSpecification";
  appliesToDeliveryMethod?: DeliveryMethod;
  appliesToPaymentMethod?: PaymentMethod;
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
export interface PaymentMethod extends Omit<Enumeration, "@type"> {
  "@type"?: "PaymentMethod";
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
export interface PaymentService extends Omit<FinancialProduct, "@type"> {
  "@type"?: "PaymentService";
}

/**
 *
 * @see @link https://schema.org/PeopleAudience
 *
 * @remarks
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 *
 **/
export interface PeopleAudience extends Omit<Audience, "@type"> {
  "@type"?: "PeopleAudience";
  healthCondition?: MedicalCondition;
  requiredGender?: Text;
  requiredMaxAge?: Integer;
  requiredMinAge?: Integer;
  suggestedAge?: QuantitativeValue;
  suggestedGender?: Text | GenderType;
  suggestedMaxAge?: Number;
  suggestedMeasurement?: QuantitativeValue;
  suggestedMinAge?: Number;
}

/**
 *
 * @see @link https://schema.org/PerformAction
 *
 * @remarks
 * The act of participating in performance arts.
 *
 **/
export interface PerformAction extends Omit<PlayAction, "@type"> {
  "@type"?: "PerformAction";
  entertainmentBusiness?: EntertainmentBusiness;
}

/**
 *
 * @see @link https://schema.org/PerformanceRole
 *
 * @remarks
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 *
 **/
export interface PerformanceRole extends Omit<Role, "@type"> {
  "@type"?: "PerformanceRole";
  characterName?: Text;
}

/**
 *
 * @see @link https://schema.org/PerformingArtsTheater
 *
 * @remarks
 * A theater or other performing art center.
 *
 **/
export interface PerformingArtsTheater extends Omit<CivicStructure, "@type"> {
  "@type"?: "PerformingArtsTheater";
}

/**
 *
 * @see @link https://schema.org/PerformingGroup
 *
 * @remarks
 * A performance group, such as a band, an orchestra, or a circus.
 *
 **/
export interface PerformingGroup extends Omit<Organization, "@type"> {
  "@type"?: "PerformingGroup";
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
export interface Periodical extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "Periodical";
}

/**
 *
 * @see @link https://schema.org/Permit
 *
 * @remarks
 * A permit issued by an organization, e.g. a parking pass.
 *
 **/
export interface Permit extends Omit<Intangible, "@type"> {
  "@type"?: "Permit";
  issuedBy?: Organization;
  issuedThrough?: Service;
  permitAudience?: Audience;
  validFor?: Duration;
  validFrom?: DateTime | Date;
  validIn?: AdministrativeArea;
  validUntil?: Date;
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
export interface Person extends Omit<Thing, "@type"> {
  "@type"?: "Person";
  additionalName?: Text;
  address?: Text | PostalAddress;
  affiliation?: Organization;
  alumniOf?: EducationalOrganization | Organization;
  award?: Text;
  awards?: Array<Text>;
  birthDate?: Date;
  birthPlace?: Place;
  brand?: Brand | Organization;
  callSign?: Text;
  children?: Person;
  colleague?: Person | URL;
  colleagues?: Array<Person>;
  contactPoint?: ContactPoint;
  contactPoints?: Array<ContactPoint>;
  deathDate?: Date;
  deathPlace?: Place;
  duns?: Text;
  email?: Text;
  familyName?: Text;
  faxNumber?: Text;
  follows?: Person;
  funder?: Organization | Person;
  gender?: GenderType | Text;
  givenName?: Text;
  globalLocationNumber?: Text;
  hasCredential?: EducationalOccupationalCredential;
  hasOccupation?: Occupation;
  hasOfferCatalog?: OfferCatalog;
  hasPOS?: Place;
  height?: QuantitativeValue | Distance;
  homeLocation?: Place | ContactPoint;
  honorificPrefix?: Text;
  honorificSuffix?: Text;
  interactionStatistic?: InteractionCounter;
  isicV4?: Text;
  jobTitle?: DefinedTerm | Text;
  knows?: Person;
  knowsAbout?: Text | URL | Thing;
  knowsLanguage?: Text | Language;
  makesOffer?: Offer;
  memberOf?: ProgramMembership | Organization;
  naics?: Text;
  nationality?: Country;
  netWorth?: PriceSpecification | MonetaryAmount;
  owns?: OwnershipInfo | Product;
  parent?: Person;
  parents?: Array<Person>;
  performerIn?: Event;
  publishingPrinciples?: URL | CreativeWork;
  relatedTo?: Person;
  seeks?: Demand;
  sibling?: Person;
  siblings?: Array<Person>;
  sponsor?: Person | Organization;
  spouse?: Person;
  taxID?: Text;
  telephone?: Text;
  vatID?: Text;
  weight?: QuantitativeValue;
  workLocation?: ContactPoint | Place;
  worksFor?: Organization;
}

/**
 *
 * @see @link https://schema.org/PetStore
 *
 * @remarks
 * A pet store.
 *
 **/
export interface PetStore extends Omit<Store, "@type"> {
  "@type"?: "PetStore";
}

/**
 *
 * @see @link https://schema.org/Pharmacy
 *
 * @remarks
 * A pharmacy or drugstore.
 *
 **/
export interface Pharmacy
  extends Omit<MedicalOrganization, "@type">,
    Omit<MedicalBusiness, "@type"> {
  "@type"?: "Pharmacy";
}

/**
 *
 * @see @link https://schema.org/Photograph
 *
 * @remarks
 * A photograph.
 *
 **/
export interface Photograph extends Omit<CreativeWork, "@type"> {
  "@type"?: "Photograph";
}

/**
 *
 * @see @link https://schema.org/PhotographAction
 *
 * @remarks
 * The act of capturing still images of objects using a camera.
 *
 **/
export interface PhotographAction extends Omit<CreateAction, "@type"> {
  "@type"?: "PhotographAction";
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
export interface PhysicalActivity extends Omit<LifestyleModification, "@type"> {
  "@type"?: "PhysicalActivity";
  associatedAnatomy?:
    | AnatomicalStructure
    | AnatomicalSystem
    | SuperficialAnatomy;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  epidemiology?: Text;
  pathophysiology?: Text;
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
export interface PhysicalTherapy extends Omit<MedicalTherapy, "@type"> {
  "@type"?: "PhysicalTherapy";
}

/**
 *
 * @see @link https://schema.org/Physician
 *
 * @remarks
 * A doctor's office.
 *
 **/
export interface Physician
  extends Omit<MedicalBusiness, "@type">,
    Omit<MedicalOrganization, "@type"> {
  "@type"?: "Physician";
  availableService?: MedicalTest | MedicalTherapy | MedicalProcedure;
  hospitalAffiliation?: Hospital;
  medicalSpecialty?: MedicalSpecialty;
}

/**
 *
 * @see @link https://schema.org/Place
 *
 * @remarks
 * Entities that have a somewhat fixed, physical extension.
 *
 **/
export interface Place extends Omit<Thing, "@type"> {
  "@type"?: "Place";
  additionalProperty?: PropertyValue;
  address?: Text | PostalAddress;
  aggregateRating?: AggregateRating;
  amenityFeature?: LocationFeatureSpecification;
  branchCode?: Text;
  containedIn?: Place;
  containedInPlace?: Place;
  containsPlace?: Place;
  event?: Event;
  events?: Array<Event>;
  faxNumber?: Text;
  geo?: GeoCoordinates | GeoShape;
  geoContains?: GeospatialGeometry | Place;
  geoCoveredBy?: GeospatialGeometry | Place;
  geoCovers?: GeospatialGeometry | Place;
  geoCrosses?: GeospatialGeometry | Place;
  geoDisjoint?: Place | GeospatialGeometry;
  geoEquals?: Place | GeospatialGeometry;
  geoIntersects?: GeospatialGeometry | Place;
  geoOverlaps?: Place | GeospatialGeometry;
  geoTouches?: Place | GeospatialGeometry;
  geoWithin?: Place | GeospatialGeometry;
  globalLocationNumber?: Text;
  hasDriveThroughService?: Boolean;
  hasMap?: URL | Map;
  isAccessibleForFree?: Boolean;
  isicV4?: Text;
  latitude?: Text | Number;
  logo?: ImageObject | URL;
  longitude?: Text | Number;
  map?: URL;
  maps?: Array<URL>;
  maximumAttendeeCapacity?: Integer;
  openingHoursSpecification?: OpeningHoursSpecification;
  photo?: Photograph | ImageObject;
  photos?: Array<Photograph> | Array<ImageObject>;
  publicAccess?: Boolean;
  review?: Review;
  reviews?: Array<Review>;
  slogan?: Text;
  smokingAllowed?: Boolean;
  specialOpeningHoursSpecification?: OpeningHoursSpecification;
  telephone?: Text;
  tourBookingPage?: URL;
}

/**
 *
 * @see @link https://schema.org/PlaceOfWorship
 *
 * @remarks
 * Place of worship, such as a church, synagogue, or mosque.
 *
 **/
export interface PlaceOfWorship extends Omit<CivicStructure, "@type"> {
  "@type"?: "PlaceOfWorship";
}

/**
 *
 * @see @link https://schema.org/PlanAction
 *
 * @remarks
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 *
 **/
export interface PlanAction extends Omit<OrganizeAction, "@type"> {
  "@type"?: "PlanAction";
  scheduledTime?: DateTime;
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
export interface Play extends Omit<CreativeWork, "@type"> {
  "@type"?: "Play";
}

/**
 *
 * @see @link https://schema.org/PlayAction
 *
 * @remarks
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 *
 **/
export interface PlayAction extends Omit<Action, "@type"> {
  "@type"?: "PlayAction";
  audience?: Audience;
  event?: Event;
}

/**
 *
 * @see @link https://schema.org/Playground
 *
 * @remarks
 * A playground.
 *
 **/
export interface Playground extends Omit<CivicStructure, "@type"> {
  "@type"?: "Playground";
}

/**
 *
 * @see @link https://schema.org/Plumber
 *
 * @remarks
 * A plumbing service.
 *
 **/
export interface Plumber extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "Plumber";
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
export interface PodcastEpisode extends Omit<Episode, "@type"> {
  "@type"?: "PodcastEpisode";
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
export interface PodcastSeason extends Omit<CreativeWorkSeason, "@type"> {
  "@type"?: "PodcastSeason";
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
export interface PodcastSeries extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "PodcastSeries";
  webFeed?: URL | DataFeed<URL>;
}

/**
 *
 * @see @link https://schema.org/PoliceStation
 *
 * @remarks
 * A police station.
 *
 **/
export interface PoliceStation
  extends Omit<EmergencyService, "@type">,
    Omit<CivicStructure, "@type"> {
  "@type"?: "PoliceStation";
}

/**
 *
 * @see @link https://schema.org/Pond
 *
 * @remarks
 * A pond.
 *
 **/
export interface Pond extends Omit<BodyOfWater, "@type"> {
  "@type"?: "Pond";
}

/**
 *
 * @see @link https://schema.org/PostalAddress
 *
 * @remarks
 * The mailing address.
 *
 **/
export interface PostalAddress extends Omit<ContactPoint, "@type"> {
  "@type"?: "PostalAddress";
  addressCountry?: Text | Country;
  addressLocality?: Text;
  addressRegion?: Text;
  postalCode?: Text;
  postOfficeBoxNumber?: Text;
  streetAddress?: Text;
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
export interface PostalCodeRangeSpecification
  extends Omit<StructuredValue, "@type"> {
  "@type"?: "PostalCodeRangeSpecification";
  postalCodeBegin?: Text;
  postalCodeEnd?: Text;
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
export interface Poster extends Omit<CreativeWork, "@type"> {
  "@type"?: "Poster";
}

/**
 *
 * @see @link https://schema.org/PostOffice
 *
 * @remarks
 * A post office.
 *
 **/
export interface PostOffice extends Omit<GovernmentOffice, "@type"> {
  "@type"?: "PostOffice";
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
export interface PreOrderAction extends Omit<TradeAction, "@type"> {
  "@type"?: "PreOrderAction";
}

/**
 *
 * @see @link https://schema.org/PrependAction
 *
 * @remarks
 * The act of inserting at the beginning if an ordered collection.
 *
 **/
export interface PrependAction extends Omit<InsertAction, "@type"> {
  "@type"?: "PrependAction";
}

/**
 *
 * @see @link https://schema.org/Preschool
 *
 * @remarks
 * A preschool.
 *
 **/
export interface Preschool extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "Preschool";
}

/**
 *
 * @see @link https://schema.org/PresentationDigitalDocument
 *
 * @remarks
 * A file containing slides or used for a presentation.
 *
 **/
export interface PresentationDigitalDocument
  extends Omit<DigitalDocument, "@type"> {
  "@type"?: "PresentationDigitalDocument";
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
export interface PreventionIndication extends Omit<MedicalIndication, "@type"> {
  "@type"?: "PreventionIndication";
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
export interface PriceSpecification extends Omit<StructuredValue, "@type"> {
  "@type"?: "PriceSpecification";
  eligibleQuantity?: QuantitativeValue;
  eligibleTransactionVolume?: PriceSpecification;
  maxPrice?: Number;
  minPrice?: Number;
  price?: Number | Text;
  priceCurrency?: Text;
  validFrom?: DateTime | Date;
  validThrough?: DateTime | Date;
  valueAddedTaxIncluded?: Boolean;
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
export interface Product extends Omit<Thing, "@type"> {
  "@type"?: "Product";
  additionalProperty?: PropertyValue;
  aggregateRating?: AggregateRating;
  audience?: Audience;
  award?: Text;
  awards?: Array<Text>;
  brand?: Brand | Organization;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  color?: Text;
  depth?: Distance | QuantitativeValue;
  gtin?: Text;
  gtin12?: Text;
  gtin13?: Text;
  gtin14?: Text;
  gtin8?: Text;
  hasEnergyConsumptionDetails?: EnergyConsumptionDetails;
  hasMeasurement?: QuantitativeValue;
  hasMerchantReturnPolicy?: MerchantReturnPolicy;
  height?: QuantitativeValue | Distance;
  inProductGroupWithID?: Text;
  isAccessoryOrSparePartFor?: Product;
  isConsumableFor?: Product;
  isRelatedTo?: Product | Service;
  isSimilarTo?: Product | Service;
  isVariantOf?: ProductGroup | ProductModel;
  itemCondition?: OfferItemCondition;
  logo?: ImageObject | URL;
  manufacturer?: Organization;
  material?: Product | Text | URL;
  model?: ProductModel | Text;
  mpn?: Text;
  nsn?: Text;
  offers?: Offer | Demand;
  pattern?: Text | DefinedTerm;
  productID?: Text;
  productionDate?: Date;
  purchaseDate?: Date;
  releaseDate?: Date;
  review?: Review;
  reviews?: Array<Review>;
  size?: DefinedTerm | SizeSpecification | QuantitativeValue | Text;
  sku?: Text;
  slogan?: Text;
  weight?: QuantitativeValue;
  width?: QuantitativeValue | Distance;
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
export interface ProductCollection
  extends Omit<Collection, "@type">,
    Omit<Product, "@type"> {
  "@type"?: "ProductCollection";
  includesObject?: TypeAndQuantityNode;
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
export interface ProductGroup extends Omit<Product, "@type"> {
  "@type"?: "ProductGroup";
  hasVariant?: Product;
  productGroupID?: Text;
  variesBy?: Text | DefinedTerm;
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
export interface ProductModel extends Omit<Product, "@type"> {
  "@type"?: "ProductModel";
  isVariantOf?: ProductGroup | ProductModel;
  predecessorOf?: ProductModel;
  successorOf?: ProductModel;
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
export interface ProfessionalService extends Omit<LocalBusiness, "@type"> {
  "@type"?: "ProfessionalService";
}

/**
 *
 * @see @link https://schema.org/ProfilePage
 *
 * @remarks
 * Web page type: Profile page.
 *
 **/
export interface ProfilePage extends Omit<WebPage, "@type"> {
  "@type"?: "ProfilePage";
}

/**
 *
 * @see @link https://schema.org/ProgramMembership
 *
 * @remarks
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 *
 **/
export interface ProgramMembership extends Omit<Intangible, "@type"> {
  "@type"?: "ProgramMembership";
  hostingOrganization?: Organization;
  member?: Organization | Person;
  members?: Array<Person> | Array<Organization>;
  membershipNumber?: Text;
  membershipPointsEarned?: QuantitativeValue | Number;
  programName?: Text;
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
export interface Project extends Omit<Organization, "@type"> {
  "@type"?: "Project";
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
export interface Property extends Omit<Intangible, "@type"> {
  "@type"?: "Property";
  domainIncludes?: Class;
  inverseOf?: Property;
  rangeIncludes?: Class;
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
export interface PropertyValue extends Omit<StructuredValue, "@type"> {
  "@type"?: "PropertyValue";
  maxValue?: Number;
  measurementTechnique?: Text | URL;
  minValue?: Number;
  propertyID?: Text | URL;
  unitCode?: Text | URL;
  unitText?: Text;
  value?: Number | StructuredValue | Boolean | Text;
  valueReference?:
    | QuantitativeValue
    | MeasurementTypeEnumeration
    | DefinedTerm
    | Enumeration
    | PropertyValue
    | QualitativeValue
    | Text
    | StructuredValue;
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
export interface PropertyValueSpecification extends Omit<Intangible, "@type"> {
  "@type"?: "PropertyValueSpecification";
  defaultValue?: Thing | Text;
  maxValue?: Number;
  minValue?: Number;
  multipleValues?: Boolean;
  readonlyValue?: Boolean;
  stepValue?: Number;
  valueMaxLength?: Number;
  valueMinLength?: Number;
  valueName?: Text;
  valuePattern?: Text;
  valueRequired?: Boolean;
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
export interface PsychologicalTreatment
  extends Omit<TherapeuticProcedure, "@type"> {
  "@type"?: "PsychologicalTreatment";
}

/**
 *
 * @see @link https://schema.org/PublicationEvent
 *
 * @remarks
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 *
 **/
export interface PublicationEvent extends Omit<Event, "@type"> {
  "@type"?: "PublicationEvent";
  free?: Boolean;
  publishedBy?: Person | Organization;
  publishedOn?: BroadcastService;
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
export interface PublicationIssue extends Omit<CreativeWork, "@type"> {
  "@type"?: "PublicationIssue";
  issueNumber?: Integer | Text;
  pageEnd?: Text | Integer;
  pageStart?: Text | Integer;
  pagination?: Text;
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
export interface PublicationVolume extends Omit<CreativeWork, "@type"> {
  "@type"?: "PublicationVolume";
  pageEnd?: Text | Integer;
  pageStart?: Text | Integer;
  pagination?: Text;
  volumeNumber?: Text | Integer;
}

/**
 *
 * @see @link https://schema.org/PublicSwimmingPool
 *
 * @remarks
 * A public swimming pool.
 *
 **/
export interface PublicSwimmingPool
  extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "PublicSwimmingPool";
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
export interface PublicToilet extends Omit<CivicStructure, "@type"> {
  "@type"?: "PublicToilet";
}

/**
 *
 * @see @link https://schema.org/QAPage
 *
 * @remarks
 * A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
 *
 **/
export interface QAPage extends Omit<WebPage, "@type"> {
  "@type"?: "QAPage";
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
export interface QualitativeValue extends Omit<Enumeration, "@type"> {
  "@type"?: "QualitativeValue";
  additionalProperty?: PropertyValue;
  equal?: QualitativeValue;
  greater?: QualitativeValue;
  greaterOrEqual?: QualitativeValue;
  lesser?: QualitativeValue;
  lesserOrEqual?: QualitativeValue;
  nonEqual?: QualitativeValue;
  valueReference?:
    | QuantitativeValue
    | MeasurementTypeEnumeration
    | DefinedTerm
    | Enumeration
    | PropertyValue
    | QualitativeValue
    | Text
    | StructuredValue;
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
export interface QuantitativeValue extends Omit<StructuredValue, "@type"> {
  "@type"?: "QuantitativeValue";
  additionalProperty?: PropertyValue;
  maxValue?: Number;
  minValue?: Number;
  unitCode?: Text | URL;
  unitText?: Text;
  value?: Number | StructuredValue | Boolean | Text;
  valueReference?:
    | QuantitativeValue
    | MeasurementTypeEnumeration
    | DefinedTerm
    | Enumeration
    | PropertyValue
    | QualitativeValue
    | Text
    | StructuredValue;
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
export interface QuantitativeValueDistribution
  extends Omit<StructuredValue, "@type"> {
  "@type"?: "QuantitativeValueDistribution";
  duration?: Duration;
  median?: Number;
  percentile10?: Number;
  percentile25?: Number;
  percentile75?: Number;
  percentile90?: Number;
}

/**
 *
 * @see @link https://schema.org/Quantity
 *
 * @remarks
 * Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.
 *
 **/
export interface Quantity extends Omit<Intangible, "@type"> {
  "@type"?: "Quantity";
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
export interface Question extends Omit<Comment, "@type"> {
  "@type"?: "Question";
  acceptedAnswer?: Answer | ItemList<Answer>;
  answerCount?: Integer;
  eduQuestionType?: Text;
  suggestedAnswer?: Answer | ItemList<Answer>;
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
export interface Quiz extends Omit<LearningResource, "@type"> {
  "@type"?: "Quiz";
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
export interface Quotation extends Omit<CreativeWork, "@type"> {
  "@type"?: "Quotation";
  spokenByCharacter?: Organization | Person;
}

/**
 *
 * @see @link https://schema.org/QuoteAction
 *
 * @remarks
 * An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 *
 **/
export interface QuoteAction extends Omit<TradeAction, "@type"> {
  "@type"?: "QuoteAction";
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
export interface RadiationTherapy extends Omit<MedicalTherapy, "@type"> {
  "@type"?: "RadiationTherapy";
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
export interface RadioBroadcastService extends Omit<BroadcastService, "@type"> {
  "@type"?: "RadioBroadcastService";
}

/**
 *
 * @see @link https://schema.org/RadioChannel
 *
 * @remarks
 * A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
 *
 **/
export interface RadioChannel extends Omit<BroadcastChannel, "@type"> {
  "@type"?: "RadioChannel";
}

/**
 *
 * @see @link https://schema.org/RadioClip
 *
 * @remarks
 * A short radio program or a segment/part of a radio program.
 *
 **/
export interface RadioClip extends Omit<Clip, "@type"> {
  "@type"?: "RadioClip";
}

/**
 *
 * @see @link https://schema.org/RadioEpisode
 *
 * @remarks
 * A radio episode which can be part of a series or season.
 *
 **/
export interface RadioEpisode extends Omit<Episode, "@type"> {
  "@type"?: "RadioEpisode";
}

/**
 *
 * @see @link https://schema.org/RadioSeason
 *
 * @remarks
 * Season dedicated to radio broadcast and associated online delivery.
 *
 **/
export interface RadioSeason extends Omit<CreativeWorkSeason, "@type"> {
  "@type"?: "RadioSeason";
}

/**
 *
 * @see @link https://schema.org/RadioSeries
 *
 * @remarks
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 *
 **/
export interface RadioSeries extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "RadioSeries";
  actor?: Person;
  actors?: Array<Person>;
  containsSeason?: CreativeWorkSeason;
  director?: Person;
  directors?: Array<Person>;
  episode?: Episode;
  episodes?: Array<Episode>;
  musicBy?: Person | MusicGroup;
  numberOfEpisodes?: Integer;
  numberOfSeasons?: Integer;
  productionCompany?: Organization;
  season?: CreativeWorkSeason | URL;
  seasons?: Array<CreativeWorkSeason>;
  trailer?: VideoObject;
}

/**
 *
 * @see @link https://schema.org/RadioStation
 *
 * @remarks
 * A radio station.
 *
 **/
export interface RadioStation extends Omit<LocalBusiness, "@type"> {
  "@type"?: "RadioStation";
}

/**
 *
 * @see @link https://schema.org/Rating
 *
 * @remarks
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 *
 **/
export interface Rating extends Omit<Intangible, "@type"> {
  "@type"?: "Rating";
  author?: Person | Organization;
  bestRating?: Text | Number;
  ratingExplanation?: Text;
  ratingValue?: Number | Text;
  reviewAspect?: Text;
  worstRating?: Text | Number;
}

/**
 *
 * @see @link https://schema.org/ReactAction
 *
 * @remarks
 * The act of responding instinctively and emotionally to an object, expressing a sentiment.
 *
 **/
export interface ReactAction extends Omit<AssessAction, "@type"> {
  "@type"?: "ReactAction";
}

/**
 *
 * @see @link https://schema.org/ReadAction
 *
 * @remarks
 * The act of consuming written content.
 *
 **/
export interface ReadAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "ReadAction";
}

/**
 *
 * @see @link https://schema.org/RealEstateAgent
 *
 * @remarks
 * A real-estate agent.
 *
 **/
export interface RealEstateAgent extends Omit<LocalBusiness, "@type"> {
  "@type"?: "RealEstateAgent";
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
export interface RealEstateListing extends Omit<WebPage, "@type"> {
  "@type"?: "RealEstateListing";
  datePosted?: Date | DateTime;
  leaseLength?: Duration | QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/ReceiveAction
 *
 * @remarks
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 *
 **/
export interface ReceiveAction extends Omit<TransferAction, "@type"> {
  "@type"?: "ReceiveAction";
  deliveryMethod?: DeliveryMethod;
  sender?: Person | Audience | Organization;
}

/**
 *
 * @see @link https://schema.org/Recipe
 *
 * @remarks
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 *
 **/
export interface Recipe extends Omit<HowTo, "@type"> {
  "@type"?: "Recipe";
  cookingMethod?: Text;
  cookTime?: Duration;
  ingredients?: Text;
  nutrition?: NutritionInformation;
  recipeCategory?: Text;
  recipeCuisine?: Text;
  recipeIngredient?: Text;
  recipeInstructions?:
    | CreativeWork
    | Text
    | ItemList<CreativeWork>
    | ItemList<Text>;
  recipeYield?: QuantitativeValue | Text;
  suitableForDiet?: RestrictedDiet;
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
export interface Recommendation extends Omit<Review, "@type"> {
  "@type"?: "Recommendation";
  category?: PhysicalActivityCategory | Text | URL | Thing;
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
export interface RecommendedDoseSchedule extends Omit<DoseSchedule, "@type"> {
  "@type"?: "RecommendedDoseSchedule";
}

/**
 *
 * @see @link https://schema.org/RecyclingCenter
 *
 * @remarks
 * A recycling center.
 *
 **/
export interface RecyclingCenter extends Omit<LocalBusiness, "@type"> {
  "@type"?: "RecyclingCenter";
}

/**
 *
 * @see @link https://schema.org/RegisterAction
 *
 * @remarks
 * The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 *
 **/
export interface RegisterAction extends Omit<InteractAction, "@type"> {
  "@type"?: "RegisterAction";
}

/**
 *
 * @see @link https://schema.org/RejectAction
 *
 * @remarks
 * The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
 *
 **/
export interface RejectAction extends Omit<AllocateAction, "@type"> {
  "@type"?: "RejectAction";
}

/**
 *
 * @see @link https://schema.org/RentAction
 *
 * @remarks
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 *
 **/
export interface RentAction extends Omit<TradeAction, "@type"> {
  "@type"?: "RentAction";
  landlord?: Person | Organization;
  realEstateAgent?: RealEstateAgent;
}

/**
 *
 * @see @link https://schema.org/RentalCarReservation
 *
 * @remarks
 * A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 **/
export interface RentalCarReservation extends Omit<Reservation, "@type"> {
  "@type"?: "RentalCarReservation";
  dropoffLocation?: Place;
  dropoffTime?: DateTime;
  pickupLocation?: Place;
  pickupTime?: DateTime;
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
export interface RepaymentSpecification extends Omit<StructuredValue, "@type"> {
  "@type"?: "RepaymentSpecification";
  downPayment?: Number | MonetaryAmount;
  earlyPrepaymentPenalty?: MonetaryAmount;
  loanPaymentAmount?: MonetaryAmount;
  loanPaymentFrequency?: Number;
  numberOfLoanPayments?: Number;
}

/**
 *
 * @see @link https://schema.org/ReplaceAction
 *
 * @remarks
 * The act of editing a recipient by replacing an old object with a new object.
 *
 **/
export interface ReplaceAction extends Omit<UpdateAction, "@type"> {
  "@type"?: "ReplaceAction";
  replacee?: Thing;
  replacer?: Thing;
}

/**
 *
 * @see @link https://schema.org/ReplyAction
 *
 * @remarks
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 *
 **/
export interface ReplyAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "ReplyAction";
  resultComment?: Comment;
}

/**
 *
 * @see @link https://schema.org/Report
 *
 * @remarks
 * A Report generated by governmental or non-governmental organization.
 *
 **/
export interface Report extends Omit<Article, "@type"> {
  "@type"?: "Report";
  reportNumber?: Text;
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
export interface ReportageNewsArticle extends Omit<NewsArticle, "@type"> {
  "@type"?: "ReportageNewsArticle";
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
export interface ReportedDoseSchedule extends Omit<DoseSchedule, "@type"> {
  "@type"?: "ReportedDoseSchedule";
}

/**
 *
 * @see @link https://schema.org/Researcher
 *
 * @remarks
 * Researchers.
 *
 **/
export interface Researcher extends Omit<Audience, "@type"> {
  "@type"?: "Researcher";
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
export interface ResearchProject extends Omit<Project, "@type"> {
  "@type"?: "ResearchProject";
}

/**
 *
 * @see @link https://schema.org/Reservation
 *
 * @remarks
 * Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 *
 **/
export interface Reservation extends Omit<Intangible, "@type"> {
  "@type"?: "Reservation";
  bookingAgent?: Person | Organization;
  bookingTime?: DateTime;
  broker?: Person | Organization;
  modifiedTime?: DateTime;
  priceCurrency?: Text;
  programMembershipUsed?: ProgramMembership;
  provider?: Organization | Person;
  reservationFor?: Thing;
  reservationId?: Text;
  reservationStatus?: ReservationStatusType;
  reservedTicket?: Ticket;
  totalPrice?: Number | Text | PriceSpecification;
  underName?: Person | Organization;
}

/**
 *
 * @see @link https://schema.org/ReservationPackage
 *
 * @remarks
 * A group of multiple reservations with common values for all sub-reservations.
 *
 **/
export interface ReservationPackage extends Omit<Reservation, "@type"> {
  "@type"?: "ReservationPackage";
  subReservation?: Reservation;
}

/**
 *
 * @see @link https://schema.org/ReserveAction
 *
 * @remarks
 * Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 *
 **/
export interface ReserveAction extends Omit<PlanAction, "@type"> {
  "@type"?: "ReserveAction";
}

/**
 *
 * @see @link https://schema.org/Reservoir
 *
 * @remarks
 * A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
 *
 **/
export interface Reservoir extends Omit<BodyOfWater, "@type"> {
  "@type"?: "Reservoir";
}

/**
 *
 * @see @link https://schema.org/Residence
 *
 * @remarks
 * The place where a person lives.
 *
 **/
export interface Residence extends Omit<Place, "@type"> {
  "@type"?: "Residence";
  accommodationFloorPlan?: FloorPlan;
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
export interface Resort extends Omit<LodgingBusiness, "@type"> {
  "@type"?: "Resort";
}

/**
 *
 * @see @link https://schema.org/Restaurant
 *
 * @remarks
 * A restaurant.
 *
 **/
export interface Restaurant extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "Restaurant";
}

/**
 *
 * @see @link https://schema.org/ResumeAction
 *
 * @remarks
 * The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 *
 **/
export interface ResumeAction extends Omit<ControlAction, "@type"> {
  "@type"?: "ResumeAction";
}

/**
 *
 * @see @link https://schema.org/ReturnAction
 *
 * @remarks
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 *
 **/
export interface ReturnAction extends Omit<TransferAction, "@type"> {
  "@type"?: "ReturnAction";
  recipient?: Organization | ContactPoint | Person | Audience;
}

/**
 *
 * @see @link https://schema.org/Review
 *
 * @remarks
 * A review of an item - for example, of a restaurant, movie, or store.
 *
 **/
export interface Review extends Omit<CreativeWork, "@type"> {
  "@type"?: "Review";
  itemReviewed?: Thing;
  reviewAspect?: Text;
  reviewBody?: Text;
  reviewRating?: Rating;
}

/**
 *
 * @see @link https://schema.org/ReviewAction
 *
 * @remarks
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 *
 **/
export interface ReviewAction extends Omit<AssessAction, "@type"> {
  "@type"?: "ReviewAction";
  resultReview?: Review;
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
export interface ReviewNewsArticle
  extends Omit<NewsArticle, "@type">,
    Omit<CriticReview, "@type"> {
  "@type"?: "ReviewNewsArticle";
}

/**
 *
 * @see @link https://schema.org/RiverBodyOfWater
 *
 * @remarks
 * A river (for example, the broad majestic Shannon).
 *
 **/
export interface RiverBodyOfWater extends Omit<BodyOfWater, "@type"> {
  "@type"?: "RiverBodyOfWater";
}

/**
 *
 * @see @link https://schema.org/Role
 *
 * @remarks
 * Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\n\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html).
 *
 **/
export interface Role extends Omit<Intangible, "@type"> {
  "@type"?: "Role";
  endDate?: Date | DateTime;
  namedPosition?: URL | Text;
  roleName?: URL | Text;
  startDate?: DateTime | Date;
}

/**
 *
 * @see @link https://schema.org/RoofingContractor
 *
 * @remarks
 * A roofing contractor.
 *
 **/
export interface RoofingContractor
  extends Omit<HomeAndConstructionBusiness, "@type"> {
  "@type"?: "RoofingContractor";
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
export interface Room extends Omit<Accommodation, "@type"> {
  "@type"?: "Room";
}

/**
 *
 * @see @link https://schema.org/RsvpAction
 *
 * @remarks
 * The act of notifying an event organizer as to whether you expect to attend the event.
 *
 **/
export interface RsvpAction extends Omit<InformAction, "@type"> {
  "@type"?: "RsvpAction";
  additionalNumberOfGuests?: Number;
  comment?: Comment;
  rsvpResponse?: RsvpResponseType;
}

/**
 *
 * @see @link https://schema.org/RVPark
 *
 * @remarks
 * A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.
 *
 **/
export interface RVPark extends Omit<CivicStructure, "@type"> {
  "@type"?: "RVPark";
}

/**
 *
 * @see @link https://schema.org/SaleEvent
 *
 * @remarks
 * Event type: Sales event.
 *
 **/
export interface SaleEvent extends Omit<Event, "@type"> {
  "@type"?: "SaleEvent";
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
export interface SatiricalArticle extends Omit<Article, "@type"> {
  "@type"?: "SatiricalArticle";
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
export interface Schedule extends Omit<Intangible, "@type"> {
  "@type"?: "Schedule";
  byDay?: DayOfWeek | Text;
  byMonth?: Integer;
  byMonthDay?: Integer;
  byMonthWeek?: Integer;
  duration?: Duration;
  endDate?: Date | DateTime;
  endTime?: DateTime | Time;
  exceptDate?: DateTime | Date;
  repeatCount?: Integer;
  repeatFrequency?: Duration | Text;
  scheduleTimezone?: Text;
  startDate?: DateTime | Date;
  startTime?: DateTime | Time;
}

/**
 *
 * @see @link https://schema.org/ScheduleAction
 *
 * @remarks
 * Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 *
 **/
export interface ScheduleAction extends Omit<PlanAction, "@type"> {
  "@type"?: "ScheduleAction";
}

/**
 *
 * @see @link https://schema.org/ScholarlyArticle
 *
 * @remarks
 * A scholarly article.
 *
 **/
export interface ScholarlyArticle extends Omit<Article, "@type"> {
  "@type"?: "ScholarlyArticle";
}

/**
 *
 * @see @link https://schema.org/School
 *
 * @remarks
 * A school.
 *
 **/
export interface School extends Omit<EducationalOrganization, "@type"> {
  "@type"?: "School";
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
export interface SchoolDistrict extends Omit<AdministrativeArea, "@type"> {
  "@type"?: "SchoolDistrict";
}

/**
 *
 * @see @link https://schema.org/ScreeningEvent
 *
 * @remarks
 * A screening of a movie or other video.
 *
 **/
export interface ScreeningEvent extends Omit<Event, "@type"> {
  "@type"?: "ScreeningEvent";
  subtitleLanguage?: Text | Language;
  videoFormat?: Text;
  workPresented?: Movie;
}

/**
 *
 * @see @link https://schema.org/Sculpture
 *
 * @remarks
 * A piece of sculpture.
 *
 **/
export interface Sculpture extends Omit<CreativeWork, "@type"> {
  "@type"?: "Sculpture";
}

/**
 *
 * @see @link https://schema.org/SeaBodyOfWater
 *
 * @remarks
 * A sea (for example, the Caspian sea).
 *
 **/
export interface SeaBodyOfWater extends Omit<BodyOfWater, "@type"> {
  "@type"?: "SeaBodyOfWater";
}

/**
 *
 * @see @link https://schema.org/SearchAction
 *
 * @remarks
 * The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 *
 **/
export interface SearchAction extends Omit<Action, "@type"> {
  "@type"?: "SearchAction";
  query?: Text;
}

/**
 *
 * @see @link https://schema.org/SearchResultsPage
 *
 * @remarks
 * Web page type: Search results page.
 *
 **/
export interface SearchResultsPage extends Omit<WebPage, "@type"> {
  "@type"?: "SearchResultsPage";
}

/**
 *
 * @see @link https://schema.org/Season
 *
 * @remarks
 * A media season e.g. tv, radio, video game etc.
 *
 **/
export interface Season extends Omit<CreativeWork, "@type"> {
  "@type"?: "Season";
}

/**
 *
 * @see @link https://schema.org/Seat
 *
 * @remarks
 * Used to describe a seat, such as a reserved seat in an event reservation.
 *
 **/
export interface Seat extends Omit<Intangible, "@type"> {
  "@type"?: "Seat";
  seatingType?: QualitativeValue | Text;
  seatNumber?: Text;
  seatRow?: Text;
  seatSection?: Text;
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
export interface SeekToAction extends Omit<Action, "@type"> {
  "@type"?: "SeekToAction";
}

/**
 *
 * @see @link https://schema.org/SelfStorage
 *
 * @remarks
 * A self-storage facility.
 *
 **/
export interface SelfStorage extends Omit<LocalBusiness, "@type"> {
  "@type"?: "SelfStorage";
}

/**
 *
 * @see @link https://schema.org/SellAction
 *
 * @remarks
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 *
 **/
export interface SellAction extends Omit<TradeAction, "@type"> {
  "@type"?: "SellAction";
  buyer?: Person;
  warrantyPromise?: WarrantyPromise;
}

/**
 *
 * @see @link https://schema.org/SendAction
 *
 * @remarks
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 *
 **/
export interface SendAction extends Omit<TransferAction, "@type"> {
  "@type"?: "SendAction";
  deliveryMethod?: DeliveryMethod;
  recipient?: Organization | ContactPoint | Person | Audience;
}

/**
 *
 * @see @link https://schema.org/Series
 *
 * @remarks
 * A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]].
 *
 **/
export interface Series extends Omit<Intangible, "@type"> {
  "@type"?: "Series";
}

/**
 *
 * @see @link https://schema.org/Service
 *
 * @remarks
 * A service provided by an organization, e.g. delivery service, print services, etc.
 *
 **/
export interface Service extends Omit<Intangible, "@type"> {
  "@type"?: "Service";
  aggregateRating?: AggregateRating;
  areaServed?: Text | Place | AdministrativeArea | GeoShape;
  audience?: Audience;
  availableChannel?: ServiceChannel;
  award?: Text;
  brand?: Brand | Organization;
  broker?: Person | Organization;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  hasOfferCatalog?: OfferCatalog;
  hoursAvailable?: OpeningHoursSpecification;
  isRelatedTo?: Product | Service;
  isSimilarTo?: Product | Service;
  logo?: ImageObject | URL;
  offers?: Offer | Demand;
  produces?: Thing;
  provider?: Organization | Person;
  providerMobility?: Text;
  review?: Review;
  serviceArea?: Place | AdministrativeArea | GeoShape;
  serviceAudience?: Audience;
  serviceOutput?: Thing;
  serviceType?: Text | GovernmentBenefitsType;
  slogan?: Text;
  termsOfService?: Text | URL;
}

/**
 *
 * @see @link https://schema.org/ServiceChannel
 *
 * @remarks
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 *
 **/
export interface ServiceChannel extends Omit<Intangible, "@type"> {
  "@type"?: "ServiceChannel";
  availableLanguage?: Language | Text;
  processingTime?: Duration;
  providesService?: Service;
  serviceLocation?: Place;
  servicePhone?: ContactPoint;
  servicePostalAddress?: PostalAddress;
  serviceSmsNumber?: ContactPoint;
  serviceUrl?: URL;
}

/**
 *
 * @see @link https://schema.org/ShareAction
 *
 * @remarks
 * The act of distributing content to people for their amusement or edification.
 *
 **/
export interface ShareAction extends Omit<CommunicateAction, "@type"> {
  "@type"?: "ShareAction";
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
export interface SheetMusic extends Omit<CreativeWork, "@type"> {
  "@type"?: "SheetMusic";
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
export interface ShippingDeliveryTime extends Omit<StructuredValue, "@type"> {
  "@type"?: "ShippingDeliveryTime";
  businessDays?: OpeningHoursSpecification;
  cutoffTime?: Time;
  handlingTime?: QuantitativeValue;
  transitTime?: QuantitativeValue;
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
export interface ShippingRateSettings extends Omit<StructuredValue, "@type"> {
  "@type"?: "ShippingRateSettings";
  doesNotShip?: Boolean;
  freeShippingThreshold?: DeliveryChargeSpecification | MonetaryAmount;
  isUnlabelledFallback?: Boolean;
  shippingDestination?: DefinedRegion;
  shippingLabel?: Text;
  shippingRate?: MonetaryAmount;
}

/**
 *
 * @see @link https://schema.org/ShoeStore
 *
 * @remarks
 * A shoe store.
 *
 **/
export interface ShoeStore extends Omit<Store, "@type"> {
  "@type"?: "ShoeStore";
}

/**
 *
 * @see @link https://schema.org/ShoppingCenter
 *
 * @remarks
 * A shopping center or mall.
 *
 **/
export interface ShoppingCenter extends Omit<LocalBusiness, "@type"> {
  "@type"?: "ShoppingCenter";
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
export interface ShortStory extends Omit<CreativeWork, "@type"> {
  "@type"?: "ShortStory";
}

/**
 *
 * @see @link https://schema.org/SingleFamilyResidence
 *
 * @remarks
 * Residence type: Single-family home.
 *
 **/
export interface SingleFamilyResidence extends Omit<House, "@type"> {
  "@type"?: "SingleFamilyResidence";
  numberOfRooms?: Number | QuantitativeValue;
  occupancy?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/SiteNavigationElement
 *
 * @remarks
 * A navigation element of the page.
 *
 **/
export interface SiteNavigationElement extends Omit<WebPageElement, "@type"> {
  "@type"?: "SiteNavigationElement";
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
export interface SizeGroupEnumeration extends Omit<Enumeration, "@type"> {
  "@type"?: "SizeGroupEnumeration";
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
export interface SizeSpecification extends Omit<QualitativeValue, "@type"> {
  "@type"?: "SizeSpecification";
  hasMeasurement?: QuantitativeValue;
  sizeGroup?: SizeGroupEnumeration | Text;
  sizeSystem?: SizeSystemEnumeration | Text;
  suggestedAge?: QuantitativeValue;
  suggestedGender?: Text | GenderType;
  suggestedMeasurement?: QuantitativeValue;
}

/**
 *
 * @see @link https://schema.org/SkiResort
 *
 * @remarks
 * A ski resort.
 *
 **/
export interface SkiResort
  extends Omit<Resort, "@type">,
    Omit<SportsActivityLocation, "@type"> {
  "@type"?: "SkiResort";
}

/**
 *
 * @see @link https://schema.org/SocialEvent
 *
 * @remarks
 * Event type: Social event.
 *
 **/
export interface SocialEvent extends Omit<Event, "@type"> {
  "@type"?: "SocialEvent";
}

/**
 *
 * @see @link https://schema.org/SocialMediaPosting
 *
 * @remarks
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *
 **/
export interface SocialMediaPosting extends Omit<Article, "@type"> {
  "@type"?: "SocialMediaPosting";
  sharedContent?: CreativeWork;
}

/**
 *
 * @see @link https://schema.org/SoftwareApplication
 *
 * @remarks
 * A software application.
 *
 **/
export interface SoftwareApplication extends Omit<CreativeWork, "@type"> {
  "@type"?: "SoftwareApplication";
  applicationCategory?: Text | URL;
  applicationSubCategory?: Text | URL;
  applicationSuite?: Text;
  availableOnDevice?: Text;
  countriesNotSupported?: Text;
  countriesSupported?: Text;
  device?: Text;
  downloadUrl?: URL;
  featureList?: Text | URL;
  fileSize?: Text;
  installUrl?: URL;
  memoryRequirements?: Text | URL;
  operatingSystem?: Text;
  permissions?: Text;
  processorRequirements?: Text;
  releaseNotes?: URL | Text;
  requirements?: URL | Text;
  screenshot?: URL | ImageObject;
  softwareAddOn?: SoftwareApplication;
  softwareHelp?: CreativeWork;
  softwareRequirements?: URL | Text;
  softwareVersion?: Text;
  storageRequirements?: Text | URL;
  supportingData?: DataFeed;
}

/**
 *
 * @see @link https://schema.org/SoftwareSourceCode
 *
 * @remarks
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 **/
export interface SoftwareSourceCode extends Omit<CreativeWork, "@type"> {
  "@type"?: "SoftwareSourceCode";
  codeRepository?: URL;
  codeSampleType?: Text;
  programmingLanguage?: Text | ComputerLanguage;
  runtime?: Text;
  runtimePlatform?: Text;
  sampleType?: Text;
  targetProduct?: SoftwareApplication;
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
export interface SolveMathAction extends Omit<Action, "@type"> {
  "@type"?: "SolveMathAction";
  eduQuestionType?: Text;
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
export interface SomeProducts extends Omit<Product, "@type"> {
  "@type"?: "SomeProducts";
  inventoryLevel?: QuantitativeValue;
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
export interface SpeakableSpecification extends Omit<Intangible, "@type"> {
  "@type"?: "SpeakableSpecification";
  cssSelector?: CssSelectorType;
  xpath?: XPathType;
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
export interface SpecialAnnouncement extends Omit<CreativeWork, "@type"> {
  "@type"?: "SpecialAnnouncement";
  announcementLocation?: CivicStructure | LocalBusiness;
  category?: PhysicalActivityCategory | Text | URL | Thing;
  datePosted?: Date | DateTime;
  diseasePreventionInfo?: URL | WebContent;
  diseaseSpreadStatistics?: Dataset | WebContent | Observation | URL;
  gettingTestedInfo?: WebContent | URL;
  governmentBenefitsInfo?: GovernmentService;
  newsUpdatesAndGuidelines?: WebContent | URL;
  publicTransportClosuresInfo?: URL | WebContent;
  quarantineGuidelines?: WebContent | URL;
  schoolClosuresInfo?: URL | WebContent;
  travelBans?: WebContent | URL;
  webFeed?: URL | DataFeed<URL>;
}

/**
 *
 * @see @link https://schema.org/Specialty
 *
 * @remarks
 * Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 *
 **/
export interface Specialty extends Omit<Enumeration, "@type"> {
  "@type"?: "Specialty";
}

/**
 *
 * @see @link https://schema.org/SportingGoodsStore
 *
 * @remarks
 * A sporting goods store.
 *
 **/
export interface SportingGoodsStore extends Omit<Store, "@type"> {
  "@type"?: "SportingGoodsStore";
}

/**
 *
 * @see @link https://schema.org/SportsActivityLocation
 *
 * @remarks
 * A sports location, such as a playing field.
 *
 **/
export interface SportsActivityLocation extends Omit<LocalBusiness, "@type"> {
  "@type"?: "SportsActivityLocation";
}

/**
 *
 * @see @link https://schema.org/SportsClub
 *
 * @remarks
 * A sports club.
 *
 **/
export interface SportsClub extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "SportsClub";
}

/**
 *
 * @see @link https://schema.org/SportsEvent
 *
 * @remarks
 * Event type: Sports event.
 *
 **/
export interface SportsEvent extends Omit<Event, "@type"> {
  "@type"?: "SportsEvent";
  awayTeam?: Person | SportsTeam;
  competitor?: Person | SportsTeam;
  homeTeam?: SportsTeam | Person;
  sport?: Text | URL;
}

/**
 *
 * @see @link https://schema.org/SportsOrganization
 *
 * @remarks
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 *
 **/
export interface SportsOrganization extends Omit<Organization, "@type"> {
  "@type"?: "SportsOrganization";
  sport?: Text | URL;
}

/**
 *
 * @see @link https://schema.org/SportsTeam
 *
 * @remarks
 * Organization: Sports team.
 *
 **/
export interface SportsTeam extends Omit<SportsOrganization, "@type"> {
  "@type"?: "SportsTeam";
  athlete?: Person;
  coach?: Person;
  gender?: GenderType | Text;
}

/**
 *
 * @see @link https://schema.org/SpreadsheetDigitalDocument
 *
 * @remarks
 * A spreadsheet file.
 *
 **/
export interface SpreadsheetDigitalDocument
  extends Omit<DigitalDocument, "@type"> {
  "@type"?: "SpreadsheetDigitalDocument";
}

/**
 *
 * @see @link https://schema.org/StadiumOrArena
 *
 * @remarks
 * A stadium.
 *
 **/
export interface StadiumOrArena
  extends Omit<CivicStructure, "@type">,
    Omit<SportsActivityLocation, "@type"> {
  "@type"?: "StadiumOrArena";
}

/**
 *
 * @see @link https://schema.org/State
 *
 * @remarks
 * A state or province of a country.
 *
 **/
export interface State extends Omit<AdministrativeArea, "@type"> {
  "@type"?: "State";
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
export interface StatisticalPopulation extends Omit<Intangible, "@type"> {
  "@type"?: "StatisticalPopulation";
  constrainingProperty?: Integer;
  numConstraints?: Integer;
  populationType?: Class;
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
export interface StatusEnumeration extends Omit<Enumeration, "@type"> {
  "@type"?: "StatusEnumeration";
}

/**
 *
 * @see @link https://schema.org/Store
 *
 * @remarks
 * A retail good store.
 *
 **/
export interface Store extends Omit<LocalBusiness, "@type"> {
  "@type"?: "Store";
}

/**
 *
 * @see @link https://schema.org/StructuredValue
 *
 * @remarks
 * Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 *
 **/
export interface StructuredValue extends Omit<Intangible, "@type"> {
  "@type"?: "StructuredValue";
}

/**
 *
 * @see @link https://schema.org/SubscribeAction
 *
 * @remarks
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 *
 **/
export interface SubscribeAction extends Omit<InteractAction, "@type"> {
  "@type"?: "SubscribeAction";
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
export interface Substance extends Omit<MedicalEntity, "@type"> {
  "@type"?: "Substance";
  activeIngredient?: Text;
  maximumIntake?: MaximumDoseSchedule;
}

/**
 *
 * @see @link https://schema.org/SubwayStation
 *
 * @remarks
 * A subway station.
 *
 **/
export interface SubwayStation extends Omit<CivicStructure, "@type"> {
  "@type"?: "SubwayStation";
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
export interface Suite extends Omit<Accommodation, "@type"> {
  "@type"?: "Suite";
  bed?: BedDetails | Text | BedType;
  numberOfRooms?: Number | QuantitativeValue;
  occupancy?: QuantitativeValue;
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
export interface SuperficialAnatomy extends Omit<MedicalEntity, "@type"> {
  "@type"?: "SuperficialAnatomy";
  associatedPathophysiology?: Text;
  relatedAnatomy?: AnatomicalSystem | AnatomicalStructure;
  relatedCondition?: MedicalCondition;
  relatedTherapy?: MedicalTherapy;
  significance?: Text;
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
export interface SurgicalProcedure extends Omit<MedicalProcedure, "@type"> {
  "@type"?: "SurgicalProcedure";
}

/**
 *
 * @see @link https://schema.org/SuspendAction
 *
 * @remarks
 * The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 *
 **/
export interface SuspendAction extends Omit<ControlAction, "@type"> {
  "@type"?: "SuspendAction";
}

/**
 *
 * @see @link https://schema.org/Synagogue
 *
 * @remarks
 * A synagogue.
 *
 **/
export interface Synagogue extends Omit<PlaceOfWorship, "@type"> {
  "@type"?: "Synagogue";
}

/**
 *
 * @see @link https://schema.org/Table
 *
 * @remarks
 * A table on a Web page.
 *
 **/
export interface Table extends Omit<WebPageElement, "@type"> {
  "@type"?: "Table";
}

/**
 *
 * @see @link https://schema.org/TakeAction
 *
 * @remarks
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 *
 **/
export interface TakeAction extends Omit<TransferAction, "@type"> {
  "@type"?: "TakeAction";
}

/**
 *
 * @see @link https://schema.org/TattooParlor
 *
 * @remarks
 * A tattoo parlor.
 *
 **/
export interface TattooParlor extends Omit<HealthAndBeautyBusiness, "@type"> {
  "@type"?: "TattooParlor";
}

/**
 *
 * @see @link https://schema.org/Taxi
 *
 * @remarks
 * A taxi.
 *
 **/
export interface Taxi extends Omit<Service, "@type"> {
  "@type"?: "Taxi";
}

/**
 *
 * @see @link https://schema.org/TaxiReservation
 *
 * @remarks
 * A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 **/
export interface TaxiReservation extends Omit<Reservation, "@type"> {
  "@type"?: "TaxiReservation";
  partySize?: QuantitativeValue | Integer;
  pickupLocation?: Place;
  pickupTime?: DateTime;
}

/**
 *
 * @see @link https://schema.org/TaxiService
 *
 * @remarks
 * A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 *
 **/
export interface TaxiService extends Omit<Service, "@type"> {
  "@type"?: "TaxiService";
}

/**
 *
 * @see @link https://schema.org/TaxiStand
 *
 * @remarks
 * A taxi stand.
 *
 **/
export interface TaxiStand extends Omit<CivicStructure, "@type"> {
  "@type"?: "TaxiStand";
}

/**
 *
 * @see @link https://schema.org/TechArticle
 *
 * @remarks
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 *
 **/
export interface TechArticle extends Omit<Article, "@type"> {
  "@type"?: "TechArticle";
  dependencies?: Text;
  proficiencyLevel?: Text;
}

/**
 *
 * @see @link https://schema.org/TelevisionChannel
 *
 * @remarks
 * A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 *
 **/
export interface TelevisionChannel extends Omit<BroadcastChannel, "@type"> {
  "@type"?: "TelevisionChannel";
}

/**
 *
 * @see @link https://schema.org/TelevisionStation
 *
 * @remarks
 * A television station.
 *
 **/
export interface TelevisionStation extends Omit<LocalBusiness, "@type"> {
  "@type"?: "TelevisionStation";
}

/**
 *
 * @see @link https://schema.org/TennisComplex
 *
 * @remarks
 * A tennis complex.
 *
 **/
export interface TennisComplex extends Omit<SportsActivityLocation, "@type"> {
  "@type"?: "TennisComplex";
}

/**
 *
 * @see @link https://schema.org/TextDigitalDocument
 *
 * @remarks
 * A file composed primarily of text.
 *
 **/
export interface TextDigitalDocument extends Omit<DigitalDocument, "@type"> {
  "@type"?: "TextDigitalDocument";
}

/**
 *
 * @see @link https://schema.org/TheaterEvent
 *
 * @remarks
 * Event type: Theater performance.
 *
 **/
export interface TheaterEvent extends Omit<Event, "@type"> {
  "@type"?: "TheaterEvent";
}

/**
 *
 * @see @link https://schema.org/TheaterGroup
 *
 * @remarks
 * A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 *
 **/
export interface TheaterGroup extends Omit<PerformingGroup, "@type"> {
  "@type"?: "TheaterGroup";
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
export interface TherapeuticProcedure extends Omit<MedicalProcedure, "@type"> {
  "@type"?: "TherapeuticProcedure";
  adverseOutcome?: MedicalEntity;
  doseSchedule?: DoseSchedule;
  drug?: Drug;
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
export interface Thesis extends Omit<CreativeWork, "@type"> {
  "@type"?: "Thesis";
  inSupportOf?: Text;
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
  "@type"?: "Thing";
  additionalType?: URL;
  alternateName?: Text;
  description?: Text;
  disambiguatingDescription?: Text;
  identifier?: PropertyValue | URL | Text;
  image?: ImageObject | URL;
  mainEntityOfPage?: CreativeWork | URL;
  name?: Text;
  potentialAction?: Action;
  sameAs?: URL;
  subjectOf?: Event | CreativeWork;
  url?: URL;
}

/**
 *
 * @see @link https://schema.org/Ticket
 *
 * @remarks
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 *
 **/
export interface Ticket extends Omit<Intangible, "@type"> {
  "@type"?: "Ticket";
  dateIssued?: Date | DateTime;
  issuedBy?: Organization;
  priceCurrency?: Text;
  ticketedSeat?: Seat;
  ticketNumber?: Text;
  ticketToken?: Text | URL;
  totalPrice?: Number | Text | PriceSpecification;
  underName?: Person | Organization;
}

/**
 *
 * @see @link https://schema.org/TieAction
 *
 * @remarks
 * The act of reaching a draw in a competitive activity.
 *
 **/
export interface TieAction extends Omit<AchieveAction, "@type"> {
  "@type"?: "TieAction";
}

/**
 *
 * @see @link https://schema.org/TipAction
 *
 * @remarks
 * The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 *
 **/
export interface TipAction extends Omit<TradeAction, "@type"> {
  "@type"?: "TipAction";
  recipient?: Organization | ContactPoint | Person | Audience;
}

/**
 *
 * @see @link https://schema.org/TireShop
 *
 * @remarks
 * A tire shop.
 *
 **/
export interface TireShop extends Omit<Store, "@type"> {
  "@type"?: "TireShop";
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
export interface TouristAttraction extends Omit<Place, "@type"> {
  "@type"?: "TouristAttraction";
  availableLanguage?: Language | Text;
  touristType?: Audience | Text;
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
export interface TouristDestination extends Omit<Place, "@type"> {
  "@type"?: "TouristDestination";
  includesAttraction?: TouristAttraction;
  touristType?: Audience | Text;
}

/**
 *
 * @see @link https://schema.org/TouristInformationCenter
 *
 * @remarks
 * A tourist information center.
 *
 **/
export interface TouristInformationCenter extends Omit<LocalBusiness, "@type"> {
  "@type"?: "TouristInformationCenter";
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
export interface TouristTrip extends Omit<Trip, "@type"> {
  "@type"?: "TouristTrip";
  touristType?: Audience | Text;
}

/**
 *
 * @see @link https://schema.org/ToyStore
 *
 * @remarks
 * A toy store.
 *
 **/
export interface ToyStore extends Omit<Store, "@type"> {
  "@type"?: "ToyStore";
}

/**
 *
 * @see @link https://schema.org/TrackAction
 *
 * @remarks
 * An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 *
 **/
export interface TrackAction extends Omit<FindAction, "@type"> {
  "@type"?: "TrackAction";
  deliveryMethod?: DeliveryMethod;
}

/**
 *
 * @see @link https://schema.org/TradeAction
 *
 * @remarks
 * The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
 *
 **/
export interface TradeAction extends Omit<Action, "@type"> {
  "@type"?: "TradeAction";
  price?: Number | Text;
  priceCurrency?: Text;
  priceSpecification?: PriceSpecification;
}

/**
 *
 * @see @link https://schema.org/TrainReservation
 *
 * @remarks
 * A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 **/
export interface TrainReservation extends Omit<Reservation, "@type"> {
  "@type"?: "TrainReservation";
}

/**
 *
 * @see @link https://schema.org/TrainStation
 *
 * @remarks
 * A train station.
 *
 **/
export interface TrainStation extends Omit<CivicStructure, "@type"> {
  "@type"?: "TrainStation";
}

/**
 *
 * @see @link https://schema.org/TrainTrip
 *
 * @remarks
 * A trip on a commercial train line.
 *
 **/
export interface TrainTrip extends Omit<Trip, "@type"> {
  "@type"?: "TrainTrip";
  arrivalPlatform?: Text;
  arrivalStation?: TrainStation;
  departurePlatform?: Text;
  departureStation?: TrainStation;
  trainName?: Text;
  trainNumber?: Text;
}

/**
 *
 * @see @link https://schema.org/TransferAction
 *
 * @remarks
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 *
 **/
export interface TransferAction extends Omit<Action, "@type"> {
  "@type"?: "TransferAction";
  fromLocation?: Place;
  toLocation?: Place;
}

/**
 *
 * @see @link https://schema.org/TravelAction
 *
 * @remarks
 * The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 *
 **/
export interface TravelAction extends Omit<MoveAction, "@type"> {
  "@type"?: "TravelAction";
  distance?: Distance;
}

/**
 *
 * @see @link https://schema.org/TravelAgency
 *
 * @remarks
 * A travel agency.
 *
 **/
export interface TravelAgency extends Omit<LocalBusiness, "@type"> {
  "@type"?: "TravelAgency";
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
export interface TreatmentIndication extends Omit<MedicalIndication, "@type"> {
  "@type"?: "TreatmentIndication";
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
export interface Trip extends Omit<Intangible, "@type"> {
  "@type"?: "Trip";
  arrivalTime?: Time | DateTime;
  departureTime?: Time | DateTime;
  itinerary?: Place | ItemList<Place>;
  offers?: Offer | Demand;
  partOfTrip?: Trip;
  provider?: Organization | Person;
  subTrip?: Trip;
}

/**
 *
 * @see @link https://schema.org/TVClip
 *
 * @remarks
 * A short TV program or a segment/part of a TV program.
 *
 **/
export interface TVClip extends Omit<Clip, "@type"> {
  "@type"?: "TVClip";
  partOfTVSeries?: TVSeries;
}

/**
 *
 * @see @link https://schema.org/TVEpisode
 *
 * @remarks
 * A TV episode which can be part of a series or season.
 *
 **/
export interface TVEpisode extends Omit<Episode, "@type"> {
  "@type"?: "TVEpisode";
  countryOfOrigin?: Country;
  partOfTVSeries?: TVSeries;
  subtitleLanguage?: Text | Language;
  titleEIDR?: URL | Text;
}

/**
 *
 * @see @link https://schema.org/TVSeason
 *
 * @remarks
 * Season dedicated to TV broadcast and associated online delivery.
 *
 **/
export interface TVSeason
  extends Omit<CreativeWork, "@type">,
    Omit<CreativeWorkSeason, "@type"> {
  "@type"?: "TVSeason";
  countryOfOrigin?: Country;
  partOfTVSeries?: TVSeries;
}

/**
 *
 * @see @link https://schema.org/TVSeries
 *
 * @remarks
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 *
 **/
export interface TVSeries
  extends Omit<CreativeWork, "@type">,
    Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "TVSeries";
  actor?: Person;
  actors?: Array<Person>;
  containsSeason?: CreativeWorkSeason;
  countryOfOrigin?: Country;
  director?: Person;
  directors?: Array<Person>;
  episode?: Episode;
  episodes?: Array<Episode>;
  musicBy?: Person | MusicGroup;
  numberOfEpisodes?: Integer;
  numberOfSeasons?: Integer;
  productionCompany?: Organization;
  season?: CreativeWorkSeason | URL;
  seasons?: Array<CreativeWorkSeason>;
  trailer?: VideoObject;
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
export interface TypeAndQuantityNode extends Omit<StructuredValue, "@type"> {
  "@type"?: "TypeAndQuantityNode";
  amountOfThisGood?: Number;
  businessFunction?: BusinessFunction;
  typeOfGood?: Service | Product;
  unitCode?: Text | URL;
  unitText?: Text;
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
export interface UnitPriceSpecification
  extends Omit<PriceSpecification, "@type"> {
  "@type"?: "UnitPriceSpecification";
  billingDuration?: Number | Duration | QuantitativeValue;
  billingIncrement?: Number;
  billingStart?: Number;
  priceComponentType?: PriceComponentTypeEnumeration;
  priceType?: PriceTypeEnumeration | Text;
  referenceQuantity?: QuantitativeValue;
  unitCode?: Text | URL;
  unitText?: Text;
}

/**
 *
 * @see @link https://schema.org/UnRegisterAction
 *
 * @remarks
 * The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 *
 **/
export interface UnRegisterAction extends Omit<InteractAction, "@type"> {
  "@type"?: "UnRegisterAction";
}

/**
 *
 * @see @link https://schema.org/UpdateAction
 *
 * @remarks
 * The act of managing by changing/editing the state of the object.
 *
 **/
export interface UpdateAction extends Omit<Action, "@type"> {
  "@type"?: "UpdateAction";
  collection?: Thing;
  targetCollection?: Thing;
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
export interface UseAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "UseAction";
}

/**
 *
 * @see @link https://schema.org/UserBlocks
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserBlocks extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserBlocks";
}

/**
 *
 * @see @link https://schema.org/UserCheckins
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserCheckins extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserCheckins";
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
export interface UserComments extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserComments";
  commentText?: Text;
  commentTime?: DateTime | Date;
  creator?: Organization | Person;
  discusses?: CreativeWork;
  replyToUrl?: URL;
}

/**
 *
 * @see @link https://schema.org/UserDownloads
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserDownloads extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserDownloads";
}

/**
 *
 * @see @link https://schema.org/UserInteraction
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserInteraction extends Omit<Event, "@type"> {
  "@type"?: "UserInteraction";
}

/**
 *
 * @see @link https://schema.org/UserLikes
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserLikes extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserLikes";
}

/**
 *
 * @see @link https://schema.org/UserPageVisits
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserPageVisits extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserPageVisits";
}

/**
 *
 * @see @link https://schema.org/UserPlays
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserPlays extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserPlays";
}

/**
 *
 * @see @link https://schema.org/UserPlusOnes
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserPlusOnes extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserPlusOnes";
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
export interface UserReview extends Omit<Review, "@type"> {
  "@type"?: "UserReview";
}

/**
 *
 * @see @link https://schema.org/UserTweets
 *
 * @remarks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 **/
export interface UserTweets extends Omit<UserInteraction, "@type"> {
  "@type"?: "UserTweets";
}

/**
 *
 * @see @link https://schema.org/Vehicle
 *
 * @remarks
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 *
 **/
export interface Vehicle extends Omit<Product, "@type"> {
  "@type"?: "Vehicle";
  accelerationTime?: QuantitativeValue;
  bodyType?: URL | Text | QualitativeValue;
  callSign?: Text;
  cargoVolume?: QuantitativeValue;
  dateVehicleFirstRegistered?: Date;
  driveWheelConfiguration?: DriveWheelConfigurationValue | Text;
  emissionsCO2?: Number;
  fuelCapacity?: QuantitativeValue;
  fuelConsumption?: QuantitativeValue;
  fuelEfficiency?: QuantitativeValue;
  fuelType?: QualitativeValue | URL | Text;
  knownVehicleDamages?: Text;
  meetsEmissionStandard?: URL | Text | QualitativeValue;
  mileageFromOdometer?: QuantitativeValue;
  modelDate?: Date;
  numberOfAirbags?: Number | Text;
  numberOfAxles?: Number | QuantitativeValue;
  numberOfDoors?: Number | QuantitativeValue;
  numberOfForwardGears?: QuantitativeValue | Number;
  numberOfPreviousOwners?: QuantitativeValue | Number;
  payload?: QuantitativeValue;
  productionDate?: Date;
  purchaseDate?: Date;
  seatingCapacity?: Number | QuantitativeValue;
  speed?: QuantitativeValue;
  steeringPosition?: SteeringPositionValue;
  tongueWeight?: QuantitativeValue;
  trailerWeight?: QuantitativeValue;
  vehicleConfiguration?: Text;
  vehicleEngine?: EngineSpecification;
  vehicleIdentificationNumber?: Text;
  vehicleInteriorColor?: Text;
  vehicleInteriorType?: Text;
  vehicleModelDate?: Date;
  vehicleSeatingCapacity?: Number | QuantitativeValue;
  vehicleSpecialUsage?: Text | CarUsageType;
  vehicleTransmission?: URL | Text | QualitativeValue;
  weightTotal?: QuantitativeValue;
  wheelbase?: QuantitativeValue;
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
export interface Vein extends Omit<Vessel, "@type"> {
  "@type"?: "Vein";
  drainsTo?: Vessel;
  regionDrained?: AnatomicalStructure | AnatomicalSystem;
  tributary?: AnatomicalStructure;
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
export interface Vessel extends Omit<AnatomicalStructure, "@type"> {
  "@type"?: "Vessel";
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
export interface VeterinaryCare extends Omit<MedicalOrganization, "@type"> {
  "@type"?: "VeterinaryCare";
}

/**
 *
 * @see @link https://schema.org/VideoGallery
 *
 * @remarks
 * Web page type: Video gallery page.
 *
 **/
export interface VideoGallery extends Omit<MediaGallery, "@type"> {
  "@type"?: "VideoGallery";
}

/**
 *
 * @see @link https://schema.org/VideoGame
 *
 * @remarks
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 *
 **/
export interface VideoGame
  extends Omit<Game, "@type">,
    Omit<SoftwareApplication, "@type"> {
  "@type"?: "VideoGame";
  actor?: Person;
  actors?: Array<Person>;
  cheatCode?: CreativeWork;
  director?: Person;
  directors?: Array<Person>;
  gamePlatform?: Thing | URL | Text;
  gameServer?: GameServer;
  gameTip?: CreativeWork;
  musicBy?: Person | MusicGroup;
  playMode?: GamePlayMode;
  trailer?: VideoObject;
}

/**
 *
 * @see @link https://schema.org/VideoGameClip
 *
 * @remarks
 * A short segment/part of a video game.
 *
 **/
export interface VideoGameClip extends Omit<Clip, "@type"> {
  "@type"?: "VideoGameClip";
}

/**
 *
 * @see @link https://schema.org/VideoGameSeries
 *
 * @remarks
 * A video game series.
 *
 **/
export interface VideoGameSeries extends Omit<CreativeWorkSeries, "@type"> {
  "@type"?: "VideoGameSeries";
  actor?: Person;
  actors?: Array<Person>;
  characterAttribute?: Thing;
  cheatCode?: CreativeWork;
  containsSeason?: CreativeWorkSeason;
  director?: Person;
  directors?: Array<Person>;
  episode?: Episode;
  episodes?: Array<Episode>;
  gameItem?: Thing;
  gameLocation?: PostalAddress | Place | URL;
  gamePlatform?: Thing | URL | Text;
  musicBy?: Person | MusicGroup;
  numberOfEpisodes?: Integer;
  numberOfPlayers?: QuantitativeValue;
  numberOfSeasons?: Integer;
  playMode?: GamePlayMode;
  productionCompany?: Organization;
  quest?: Thing;
  season?: CreativeWorkSeason | URL;
  seasons?: Array<CreativeWorkSeason>;
  trailer?: VideoObject;
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
export interface VideoObject extends Omit<MediaObject, "@type"> {
  "@type"?: "VideoObject";
  actor?: Person;
  actors?: Array<Person>;
  caption?: Text | MediaObject;
  director?: Person;
  directors?: Array<Person>;
  musicBy?: Person | MusicGroup;
  thumbnail?: ImageObject;
  transcript?: Text;
  videoFrameSize?: Text;
  videoQuality?: Text;
}

/**
 *
 * @see @link https://schema.org/ViewAction
 *
 * @remarks
 * The act of consuming static visual content.
 *
 **/
export interface ViewAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "ViewAction";
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
export interface VirtualLocation extends Omit<Intangible, "@type"> {
  "@type"?: "VirtualLocation";
}

/**
 *
 * @see @link https://schema.org/VisualArtsEvent
 *
 * @remarks
 * Event type: Visual arts event.
 *
 **/
export interface VisualArtsEvent extends Omit<Event, "@type"> {
  "@type"?: "VisualArtsEvent";
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
export interface VisualArtwork extends Omit<CreativeWork, "@type"> {
  "@type"?: "VisualArtwork";
  artEdition?: Text | Integer;
  artform?: Text | URL;
  artist?: Person;
  artMedium?: Text | URL;
  artworkSurface?: Text | URL;
  colorist?: Person;
  depth?: Distance | QuantitativeValue;
  height?: QuantitativeValue | Distance;
  inker?: Person;
  letterer?: Person;
  penciler?: Person;
  surface?: URL | Text;
  width?: QuantitativeValue | Distance;
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
export interface VitalSign extends Omit<MedicalSign, "@type"> {
  "@type"?: "VitalSign";
}

/**
 *
 * @see @link https://schema.org/Volcano
 *
 * @remarks
 * A volcano, like Fuji san.
 *
 **/
export interface Volcano extends Omit<Landform, "@type"> {
  "@type"?: "Volcano";
}

/**
 *
 * @see @link https://schema.org/VoteAction
 *
 * @remarks
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 *
 **/
export interface VoteAction extends Omit<ChooseAction, "@type"> {
  "@type"?: "VoteAction";
  candidate?: Person;
}

/**
 *
 * @see @link https://schema.org/WantAction
 *
 * @remarks
 * The act of expressing a desire about the object. An agent wants an object.
 *
 **/
export interface WantAction extends Omit<ReactAction, "@type"> {
  "@type"?: "WantAction";
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
export interface WarrantyPromise extends Omit<StructuredValue, "@type"> {
  "@type"?: "WarrantyPromise";
  durationOfWarranty?: QuantitativeValue;
  warrantyScope?: WarrantyScope;
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
export interface WarrantyScope extends Omit<Enumeration, "@type"> {
  "@type"?: "WarrantyScope";
}

/**
 *
 * @see @link https://schema.org/WatchAction
 *
 * @remarks
 * The act of consuming dynamic/moving visual content.
 *
 **/
export interface WatchAction extends Omit<ConsumeAction, "@type"> {
  "@type"?: "WatchAction";
}

/**
 *
 * @see @link https://schema.org/Waterfall
 *
 * @remarks
 * A waterfall, like Niagara.
 *
 **/
export interface Waterfall extends Omit<BodyOfWater, "@type"> {
  "@type"?: "Waterfall";
}

/**
 *
 * @see @link https://schema.org/WearAction
 *
 * @remarks
 * The act of dressing oneself in clothing.
 *
 **/
export interface WearAction extends Omit<UseAction, "@type"> {
  "@type"?: "WearAction";
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
export interface WebAPI extends Omit<Service, "@type"> {
  "@type"?: "WebAPI";
  documentation?: CreativeWork | URL;
}

/**
 *
 * @see @link https://schema.org/WebApplication
 *
 * @remarks
 * Web applications.
 *
 **/
export interface WebApplication extends Omit<SoftwareApplication, "@type"> {
  "@type"?: "WebApplication";
  browserRequirements?: Text;
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
export interface WebContent extends Omit<CreativeWork, "@type"> {
  "@type"?: "WebContent";
}

/**
 *
 * @see @link https://schema.org/WebPage
 *
 * @remarks
 * A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 *
 **/
export interface WebPage extends Omit<CreativeWork, "@type"> {
  "@type"?: "WebPage";
  breadcrumb?: Text | BreadcrumbList;
  lastReviewed?: Date;
  mainContentOfPage?: WebPageElement;
  primaryImageOfPage?: ImageObject;
  relatedLink?: URL;
  reviewedBy?: Organization | Person;
  significantLink?: URL;
  significantLinks?: Array<URL>;
  speakable?: SpeakableSpecification | URL;
  specialty?: Specialty;
}

/**
 *
 * @see @link https://schema.org/WebPageElement
 *
 * @remarks
 * A web page element, like a table or an image.
 *
 **/
export interface WebPageElement extends Omit<CreativeWork, "@type"> {
  "@type"?: "WebPageElement";
  cssSelector?: CssSelectorType;
  xpath?: XPathType;
}

/**
 *
 * @see @link https://schema.org/WebSite
 *
 * @remarks
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 *
 **/
export interface WebSite extends Omit<CreativeWork, "@type"> {
  "@type"?: "WebSite";
  issn?: Text;
}

/**
 *
 * @see @link https://schema.org/WholesaleStore
 *
 * @remarks
 * A wholesale store.
 *
 **/
export interface WholesaleStore extends Omit<Store, "@type"> {
  "@type"?: "WholesaleStore";
}

/**
 *
 * @see @link https://schema.org/WinAction
 *
 * @remarks
 * The act of achieving victory in a competitive activity.
 *
 **/
export interface WinAction extends Omit<AchieveAction, "@type"> {
  "@type"?: "WinAction";
  loser?: Person;
}

/**
 *
 * @see @link https://schema.org/Winery
 *
 * @remarks
 * A winery.
 *
 **/
export interface Winery extends Omit<FoodEstablishment, "@type"> {
  "@type"?: "Winery";
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
export interface WorkBasedProgram
  extends Omit<EducationalOccupationalProgram, "@type"> {
  "@type"?: "WorkBasedProgram";
  occupationalCategory?: CategoryCode | Text;
  trainingSalary?: MonetaryAmountDistribution;
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
export interface WorkersUnion extends Omit<Organization, "@type"> {
  "@type"?: "WorkersUnion";
}

/**
 *
 * @see @link https://schema.org/WPAdBlock
 *
 * @remarks
 * An advertising section of the page.
 *
 **/
export interface WPAdBlock extends Omit<WebPageElement, "@type"> {
  "@type"?: "WPAdBlock";
}

/**
 *
 * @see @link https://schema.org/WPFooter
 *
 * @remarks
 * The footer section of the page.
 *
 **/
export interface WPFooter extends Omit<WebPageElement, "@type"> {
  "@type"?: "WPFooter";
}

/**
 *
 * @see @link https://schema.org/WPHeader
 *
 * @remarks
 * The header section of the page.
 *
 **/
export interface WPHeader extends Omit<WebPageElement, "@type"> {
  "@type"?: "WPHeader";
}

/**
 *
 * @see @link https://schema.org/WPSideBar
 *
 * @remarks
 * A sidebar section of the page.
 *
 **/
export interface WPSideBar extends Omit<WebPageElement, "@type"> {
  "@type"?: "WPSideBar";
}

/**
 *
 * @see @link https://schema.org/WriteAction
 *
 * @remarks
 * The act of authoring written creative content.
 *
 **/
export interface WriteAction extends Omit<CreateAction, "@type"> {
  "@type"?: "WriteAction";
  inLanguage?: Text | Language;
  language?: Language;
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
export interface Zoo extends Omit<CivicStructure, "@type"> {
  "@type"?: "Zoo";
}
