const express=require('express')
const router=express.Router()

const userController=require('./User/userController')
const HospitalController=require('./Hospital/hospitalController')
const test=require('./Lab/LabTests/testController')
const booking=require('./Lab/Booking/bookingController')
const result=require('./Lab/Results/resultController')
const doctor=require('./Doctors/doctorController')
const medicines=require('./Pharmacy/pharmacyController')
const appointments=require('./DoctorAppointments/appointmentController')
const prescriptions=require('./Doctors/Prescriptions/prescriptionController')

//user routes
router.post('/registerUser',userController.upload,userController.registerUser)//done
router.post('/loginUser',userController.loginUser)//done
router.post('/viewUserById/:id',userController.viewUserById)//done
router.post('/viewUsers',userController.viewUsers)
router.post('/editUserById/:id',userController.upload,userController.editUserById)//done
router.post('/deleteUserById/:id',userController.deleteUserById)
router.post('/forgotPwdUser',userController.forgotPwd)//done

router.post('/viewMedicalhistory/:id',userController.viewMedicalhistory)//done



//hospital routes
router.post('/registerHospital',HospitalController.upload,HospitalController.registerHospital)//done
router.post('/loginHospital',HospitalController.loginHospital)//done
router.post('/viewHospitalById/:id',HospitalController.viewHospitalById)//done
router.post('/viewHospitalReqs',HospitalController.viewHospitalReqs) //new api
router.post('/viewApprovedHospitals',HospitalController.viewApprovedHospitals)//new api
router.post('/approveHospitalById/:id',HospitalController.approveHospitalById)//new api

router.post('/editHospitalById/:id',HospitalController.upload,HospitalController.editHospitalById)//done
router.post('/deleteHospitalById/:id',HospitalController.deleteHospitalById)
router.post('/forgotPwdHospital',HospitalController.forgotPwd)//done


//Doctor routes
router.post('/addDoctor/:id',doctor.upload,doctor.addDoctor)//done
router.post('/loginDoctor',doctor.loginDoctor)
router.post('/viewDoctorById/:id',doctor.viewDoctorById)//done
router.post('/viewDoctors',doctor.viewDoctors)
router.post('/editDoctorById/:id',doctor.upload,doctor.editDoctorById)//done
router.post('/deleteDoctorById/:id',doctor.deleteDoctorById)//done
router.post('/forgotPwdDoctor',doctor.forgotPwd)
router.post('/viewDoctorsByHospitalId/:id',doctor.viewDoctorsByHospitalId)//done
router.post('/viewDoctorBySpecialization',doctor.viewDoctorBySpecialization)//done
router.post('/checkDay/:id',doctor.checkDay)//done


//test
router.post('/addTest',test.addTest)//done
router.post('/deleteTestById/:id',test.deleteTestById)//done
router.post('/viewTestById/:id',test.viewTestById)//done
router.post('/editTestById/:id',test.ediTestById)//done
router.post('/viewAllTests',test.viewTests)//done
router.post('/viewTestByLabId/:id',test.viewTestByLabId)


//booking
router.post('/addBooking',booking.addBooking)//done
router.post('/viewBookingById/:id',booking.viewBookingById)
router.post('/viewBookings',booking.viewBookings)//done
router.post('/viewBookingByUserId/:id',booking.viewBookingByUserId)
router.post('/deleteBookingById/:id',booking.deleteBookingById)//done
router.post('/rejectBookingById/:id',booking.rejectBookingById)//done
router.post('/viewPendingBookingsByUserId/:id',booking.viewPendingBookingsByUserId)//done
router.post('/viewPendingBookingsByUserId/:id',booking.viewPendingBookingsByUserId)
router.post('/viewApprovedBookingsByUserId/:id',booking.viewApprovedBookingsByUserId)
router.post('/viewApprovedBookings',booking.viewApprovedBookings)//done
router.post('/approveBookingById/:id',booking.approveBookingById)//done


//results
router.post('/addResult',result.addResult)//done
router.post('/viewResultByBookingId/:id',result.viewResultByBookingId)//done
router.post('/viewResultById/:id',result.viewResultById)//done
router.post('/viewResultByUserId/:id',result.viewResultByUserId)//done
router.post('/viewResultByUserId/:id',result.viewResultByUserId)//done
router.post('/reviewResultByDr/:id',result.reviewResultByDr)//new API

//Pharmacy
router.post('/addMedicine',medicines.upload,medicines.addMedicine)//done
router.post('/viewmedicines',medicines.viewmedicines)//done
router.post('/viewPrescriptionReqs',medicines.viewPrescriptionReqs)//done
router.post('/checkMedicine',medicines.checkMedicine)//new
router.post('/sharePrescriptionTionToPharmacy/:id',medicines.sharePrescriptionTionToPharmacy)//done 
router.post('/confirmMedBill',medicines.confirmMedBill)//done 
router.post('/viewmedBillbyPid/:id',medicines.viewmedBillbyPid)//new 
router.post('/viewmedBillforPharmacy',medicines.viewmedBillforPharmacy)//new 


//DR appointments
router.post('/addAppointment',appointments.addAppointment)//done
router.post('/viewAppointmentByUserId/:userid',appointments.viewAppointmentByUserId)//done
router.post('/viewTodaysAppointmentForDr/:doctorid',appointments.viewTodaysAppointmentForDr)//done
router.post('/cancelAppointment/:appointmentId',appointments.cancelAppointment)//done



router.post('/addPrescription/:id',prescriptions.addPrescription)//done
router.post('/viewPrescriptionByDrId/:id',prescriptions.viewPrescriptionByDrId)//done
router.post('/viewPrescriptionByUserId/:id',prescriptions.viewPrescriptionByUserId)//new Api
router.post('/viewPrescriptionById/:id',prescriptions.viewPrescriptionById)//done
router.post('/viewPrescriptionByAppointId/:id',prescriptions.viewPrescriptionByAppointId)//done


module.exports=router