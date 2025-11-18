'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'el'

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.celebrities': 'Celebrities',
    'nav.hairArt': 'Hair Art',
    'nav.ginoSalon': 'Gino Salon',
    'nav.collections': 'Collections',
    'nav.training': 'Training',
    'nav.video': 'Video',
    'nav.press': 'Press',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home
    'home.subtitle': 'Hair coach & educator · Art Director of Gino Kolonaki',
    'home.description': 'With over two decades of experience, Alexandros Liakos has established himself as one of Greece\'s premier hairstylists, working with celebrities, fashion houses, and everyday clients. His innovative approach combines technical mastery with artistic vision, creating looks that are both timeless and contemporary.',
    'home.bookAppointment': 'Book an Appointment',
    'home.viewPortfolio': 'View Portfolio',
    'home.highlights.celebrities': 'Celebrities',
    'home.highlights.hairArt': 'Hair Art',
    'home.highlights.ginoSalon': 'Gino Salon',
    'home.highlights.press': 'Press',
    
    // Celebrities
    'celebrities.title': 'Celebrities',
    'celebrities.subtitle': 'Working with Greece\'s most prominent personalities in television, music, and fashion.',
    
    // Hair Art
    'hairArt.title': 'Hair Art',
    'hairArt.subtitle': 'Avant-garde and editorial work that pushes the boundaries of hair styling and artistic expression.',
    'hairArt.filter.all': 'All',
    'hairArt.filter.editorial': 'Editorial',
    'hairArt.filter.runway': 'Runway',
    'hairArt.filter.salon': 'Salon',
    'hairArt.filter.everyday': 'Everyday',
    
    // Gino Salon
    'ginoSalon.title': 'Gino Salon',
    'ginoSalon.subtitle': 'Located in the heart of Kolonaki, Gino Salon is where artistry meets exceptional service. As Art Director, Alexandros brings his vision to every client experience.',
    'ginoSalon.people': 'People & Moments',
    'ginoSalon.interior': 'The Salon',
    'ginoSalon.visitUs': 'Visit Us',
    'ginoSalon.address': 'Address',
    'ginoSalon.addressValue': 'Kolonaki Square, Athens, Greece',
    'ginoSalon.hours': 'Opening Hours',
    'ginoSalon.hoursValue': 'Monday - Saturday: 9:00 AM - 8:00 PM',
    'ginoSalon.sunday': 'Sunday: Closed',
    'ginoSalon.getDirections': 'Get Directions',
    
    // Collections
    'collections.title': 'Collections',
    'collections.subtitle': 'Explore Alexandros\' seasonal collections showcasing innovative techniques and artistic vision.',
    
    // Training
    'training.title': 'Training',
    'training.subtitle': 'Elevate your skills with professional training programs designed for hairstylists at every level.',
    'training.masterclasses': 'Masterclasses',
    'training.masterclassesDesc': 'Intensive group sessions covering advanced techniques and creative approaches to hair styling.',
    'training.coaching': '1:1 Coaching',
    'training.coachingDesc': 'Personalized one-on-one training tailored to your specific goals and skill level.',
    'training.workshops': 'Workshops for Salons',
    'training.workshopsDesc': 'On-site training programs designed to elevate your entire team\'s skills and service quality.',
    'training.requestInfo': 'Request Info',
    'training.feature1': 'Advanced cutting techniques',
    'training.feature2': 'Color theory and application',
    'training.feature3': 'Editorial styling methods',
    'training.feature4': 'Hands-on practice sessions',
    'training.feature5': 'Certificate of completion',
    'training.feature6': 'Customized curriculum',
    'training.feature7': 'Individual attention',
    'training.feature8': 'Flexible scheduling',
    'training.feature9': 'Portfolio development',
    'training.feature10': 'Career guidance',
    'training.feature11': 'Team training sessions',
    'training.feature12': 'Salon-specific techniques',
    'training.feature13': 'Client consultation skills',
    'training.feature14': 'Business development',
    'training.feature15': 'Ongoing support',
    
    // Video
    'video.title': 'Video',
    'video.subtitle': 'Discover Alexandros\' philosophy and approach to hair styling through video content and tutorials.',
    'video.more': 'More Videos',
    
    // Press
    'press.title': 'Press',
    'press.subtitle': 'Selected magazines and features showcasing Alexandros\' work in the fashion and beauty industry.',
    
    // About
    'about.title': 'About',
    'about.bio1': 'Alexandros Liakos is a renowned hairstylist and educator with over two decades of experience in the fashion and beauty industry. His journey began with a passion for transforming hair into art, and over the years, he has established himself as one of Greece\'s most respected hair professionals.',
    'about.bio2': 'As the Art Director of Gino Kolonaki, Alexandros brings his innovative vision and technical expertise to every client experience. His work spans from celebrity styling to editorial shoots, runway shows, and everyday transformations, always maintaining the highest standards of quality and creativity.',
    'about.bio3': 'Beyond the salon, Alexandros is committed to education and sharing his knowledge with the next generation of hairstylists. Through masterclasses, one-on-one coaching, and salon workshops, he helps professionals elevate their skills and develop their artistic voice.',
    'about.bio4': 'His philosophy centers on understanding each client\'s unique features and personality, creating looks that are not just beautiful but also authentic and empowering. This approach has earned him recognition in leading fashion magazines and collaborations with Greece\'s most prominent personalities.',
    'about.timeline': 'Career Timeline',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Bookings, collaborations and press requests. We\'d love to hear from you.',
    'contact.sendMessage': 'Send a Message',
    'contact.getInTouch': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message sent (demo) - Thank you for contacting us!',
    'contact.required': 'required',
    'contact.invalidEmail': 'Please enter a valid email address',
    'contact.minMessage': 'Message must be at least 20 characters',
    'contact.salonAddress': 'Salon Address',
    'contact.openingHours': 'Opening Hours',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
  },
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.celebrities': 'Διασημότητες',
    'nav.hairArt': 'Τέχνη Μαλλιών',
    'nav.ginoSalon': 'Gino Salon',
    'nav.collections': 'Συλλογές',
    'nav.training': 'Εκπαίδευση',
    'nav.video': 'Βίντεο',
    'nav.press': 'Τύπος',
    'nav.about': 'Σχετικά',
    'nav.contact': 'Επικοινωνία',
    
    // Home
    'home.subtitle': 'Coach μαλλιών & εκπαιδευτής · Καλλιτεχνικός Διευθυντής του Gino Kolonaki',
    'home.description': 'Με περισσότερες από δύο δεκαετίες εμπειρίας, ο Alexandros Liakos έχει καθιερωθεί ως ένας από τους κορυφαίους κομμωτές της Ελλάδας, συνεργαζόμενος με διασημότητες, οίκους μόδας και καθημερινούς πελάτες. Η καινοτόμα προσέγγισή του συνδυάζει τεχνική κυριαρχία με καλλιτεχνικό όραμα, δημιουργώντας looks που είναι τόσο διαχρονικά όσο και σύγχρονα.',
    'home.bookAppointment': 'Κλείστε Ραντεβού',
    'home.viewPortfolio': 'Δείτε Portfolio',
    'home.highlights.celebrities': 'Διασημότητες',
    'home.highlights.hairArt': 'Τέχνη Μαλλιών',
    'home.highlights.ginoSalon': 'Gino Salon',
    'home.highlights.press': 'Τύπος',
    
    // Celebrities
    'celebrities.title': 'Διασημότητες',
    'celebrities.subtitle': 'Συνεργασία με τους πιο εξέχοντες προσωπικότητες της Ελλάδας στην τηλεόραση, τη μουσική και τη μόδα.',
    
    // Hair Art
    'hairArt.title': 'Τέχνη Μαλλιών',
    'hairArt.subtitle': 'Αβαν-γκαρντ και editorial έργα που προωθούν τα όρια της τέχνης των μαλλιών και της καλλιτεχνικής έκφρασης.',
    'hairArt.filter.all': 'Όλα',
    'hairArt.filter.editorial': 'Editorial',
    'hairArt.filter.runway': 'Runway',
    'hairArt.filter.salon': 'Salon',
    'hairArt.filter.everyday': 'Καθημερινά',
    
    // Gino Salon
    'ginoSalon.title': 'Gino Salon',
    'ginoSalon.subtitle': 'Βρίσκεται στην καρδιά του Κολωνακίου, το Gino Salon είναι εκεί όπου η καλλιτεχνία συναντά την εξαιρετική εξυπηρέτηση. Ως Καλλιτεχνικός Διευθυντής, ο Alexandros φέρνει το όραμά του σε κάθε εμπειρία πελάτη.',
    'ginoSalon.people': 'Άνθρωποι & Στιγμές',
    'ginoSalon.interior': 'Το Salon',
    'ginoSalon.visitUs': 'Επισκεφτείτε μας',
    'ginoSalon.address': 'Διεύθυνση',
    'ginoSalon.addressValue': 'Πλατεία Κολωνακίου, Αθήνα, Ελλάδα',
    'ginoSalon.hours': 'Ώρες Λειτουργίας',
    'ginoSalon.hoursValue': 'Δευτέρα - Σάββατο: 9:00 - 20:00',
    'ginoSalon.sunday': 'Κυριακή: Κλειστά',
    'ginoSalon.getDirections': 'Οδηγίες',
    
    // Collections
    'collections.title': 'Συλλογές',
    'collections.subtitle': 'Εξερευνήστε τις εποχιακές συλλογές του Alexandros που παρουσιάζουν καινοτόμες τεχνικές και καλλιτεχνικό όραμα.',
    
    // Training
    'training.title': 'Εκπαίδευση',
    'training.subtitle': 'Αναβαθμίστε τις δεξιότητές σας με επαγγελματικά προγράμματα εκπαίδευσης σχεδιασμένα για κομμωτές κάθε επιπέδου.',
    'training.masterclasses': 'Masterclasses',
    'training.masterclassesDesc': 'Εντατικές ομαδικές συνεδρίες που καλύπτουν προηγμένες τεχνικές και δημιουργικές προσεγγίσεις στην τέχνη των μαλλιών.',
    'training.coaching': '1:1 Coaching',
    'training.coachingDesc': 'Εξατομικευμένη εκπαίδευση ένας προς έναν προσαρμοσμένη στους συγκεκριμένους στόχους και το επίπεδο δεξιοτήτων σας.',
    'training.workshops': 'Workshops για Salons',
    'training.workshopsDesc': 'Προγράμματα εκπαίδευσης επί τόπου σχεδιασμένα να αναβαθμίσουν τις δεξιότητες και την ποιότητα εξυπηρέτησης ολόκληρης της ομάδας σας.',
    'training.requestInfo': 'Ζητήστε Πληροφορίες',
    'training.feature1': 'Προηγμένες τεχνικές κοπής',
    'training.feature2': 'Θεωρία και εφαρμογή χρώματος',
    'training.feature3': 'Editorial μεθόδους styling',
    'training.feature4': 'Πρακτικές συνεδρίες',
    'training.feature5': 'Πιστοποιητικό ολοκλήρωσης',
    'training.feature6': 'Εξατομικευμένο πρόγραμμα',
    'training.feature7': 'Ατομική προσοχή',
    'training.feature8': 'Ευέλικτο πρόγραμμα',
    'training.feature9': 'Ανάπτυξη portfolio',
    'training.feature10': 'Καριέρα καθοδήγηση',
    'training.feature11': 'Ομαδικές συνεδρίες εκπαίδευσης',
    'training.feature12': 'Τεχνικές ειδικές για salon',
    'training.feature13': 'Δεξιότητες συμβουλευτικής πελατών',
    'training.feature14': 'Ανάπτυξη επιχείρησης',
    'training.feature15': 'Συνεχής υποστήριξη',
    
    // Video
    'video.title': 'Βίντεο',
    'video.subtitle': 'Ανακαλύψτε τη φιλοσοφία και την προσέγγιση του Alexandros στην τέχνη των μαλλιών μέσω βίντεο και tutorials.',
    'video.more': 'Περισσότερα Βίντεο',
    
    // Press
    'press.title': 'Τύπος',
    'press.subtitle': 'Επιλεγμένα περιοδικά και features που παρουσιάζουν το έργο του Alexandros στη μόδα και την ομορφιά.',
    
    // About
    'about.title': 'Σχετικά',
    'about.bio1': 'Ο Alexandros Liakos είναι ένας αναγνωρισμένος κομμωτής και εκπαιδευτής με περισσότερες από δύο δεκαετίες εμπειρίας στη μόδα και την ομορφιά. Το ταξίδι του ξεκίνησε με ένα πάθος για τη μεταμόρφωση των μαλλιών σε τέχνη, και με τα χρόνια, έχει καθιερωθεί ως ένας από τους πιο σεβαστούς επαγγελματίες μαλλιών της Ελλάδας.',
    'about.bio2': 'Ως Καλλιτεχνικός Διευθυντής του Gino Kolonaki, ο Alexandros φέρνει το καινοτόμο όραμά του και την τεχνική του εμπειρία σε κάθε εμπειρία πελάτη. Το έργο του εκτείνεται από styling διασημοτήτων έως editorial shootings, runway shows και καθημερινές μεταμορφώσεις, διατηρώντας πάντα τα υψηλότερα πρότυπα ποιότητας και δημιουργικότητας.',
    'about.bio3': 'Πέρα από το salon, ο Alexandros είναι αφοσιωμένος στην εκπαίδευση και στη διαμοιρασμό της γνώσης του με την επόμενη γενιά κομμωτών. Μέσω masterclasses, one-on-one coaching και salon workshops, βοηθά τους επαγγελματίες να αναβαθμίσουν τις δεξιότητές τους και να αναπτύξουν τη δημιουργική τους φωνή.',
    'about.bio4': 'Η φιλοσοφία του επικεντρώνεται στην κατανόηση των μοναδικών χαρακτηριστικών και της προσωπικότητας κάθε πελάτη, δημιουργώντας looks που δεν είναι απλώς όμορφα αλλά και αυθεντικά και ενδυναμωτικά. Αυτή η προσέγγιση του έχει αποφέρει αναγνώριση σε κορυφαία περιοδικά μόδας και συνεργασίες με τις πιο εξέχουσες προσωπικότητες της Ελλάδας.',
    'about.timeline': 'Χρονοδιάγραμμα Καριέρας',
    
    // Contact
    'contact.title': 'Επικοινωνία',
    'contact.subtitle': 'Κρατήσεις, συνεργασίες και αιτήματα τύπου. Θα χαρούμε να ακούσουμε από εσάς.',
    'contact.sendMessage': 'Στείλτε Μήνυμα',
    'contact.getInTouch': 'Επικοινωνήστε',
    'contact.name': 'Όνομα',
    'contact.email': 'Email',
    'contact.phone': 'Τηλέφωνο',
    'contact.subject': 'Θέμα',
    'contact.message': 'Μήνυμα',
    'contact.send': 'Αποστολή Μηνύματος',
    'contact.sending': 'Αποστολή...',
    'contact.sent': 'Το μήνυμα στάλθηκε (demo) - Ευχαριστούμε που επικοινωνήσατε!',
    'contact.required': 'απαιτείται',
    'contact.invalidEmail': 'Παρακαλώ εισάγετε έγκυρο email',
    'contact.minMessage': 'Το μήνυμα πρέπει να έχει τουλάχιστον 20 χαρακτήρες',
    'contact.salonAddress': 'Διεύθυνση Salon',
    'contact.openingHours': 'Ώρες Λειτουργίας',
    
    // Footer
    'footer.copyright': 'Όλα τα δικαιώματα διατηρούνται.',
  },
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

