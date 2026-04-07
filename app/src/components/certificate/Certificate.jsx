import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

function CertStyles(accent) {
  return StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      fontFamily: 'Helvetica',
      position: 'relative',
    },
    accentBarTop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      backgroundColor: accent,
    },
    accentBarBottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 10,
      backgroundColor: accent,
    },
    body: {
      margin: '20pt 40pt 20pt 40pt',
      flex: 1,
    },
    navRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    brandText: {
      fontSize: 18,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      letterSpacing: 1,
    },
    brandDot: {
      color: accent,
    },
    scoreText: {
      fontSize: 10,
      color: '#7a7f8e',
      fontFamily: 'Helvetica',
    },
    dashedRule: {
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      borderBottomStyle: 'dashed',
      marginBottom: 20,
    },
    centerBlock: {
      alignItems: 'center',
      marginBottom: 20,
    },
    certOfCompletion: {
      fontSize: 11,
      color: '#7a7f8e',
      letterSpacing: 3,
      textTransform: 'uppercase',
      marginBottom: 10,
    },
    thisConfirms: {
      fontSize: 12,
      color: '#7a7f8e',
      marginBottom: 12,
    },
    nameBox: {
      borderWidth: 1,
      borderColor: accent,
      borderRadius: 4,
      paddingHorizontal: 32,
      paddingVertical: 8,
      marginBottom: 12,
    },
    nameText: {
      fontSize: 28,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      letterSpacing: 1,
    },
    hasCompleted: {
      fontSize: 12,
      color: '#7a7f8e',
      marginBottom: 6,
    },
    courseTitle: {
      fontSize: 20,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      marginBottom: 4,
    },
    courseSubtitle: {
      fontSize: 12,
      color: '#7a7f8e',
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 32,
      marginTop: 4,
    },
    statItem: {
      alignItems: 'center',
    },
    statNum: {
      fontSize: 18,
      fontFamily: 'Helvetica-Bold',
      color: accent,
    },
    statLbl: {
      fontSize: 9,
      color: '#7a7f8e',
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    footerRow: {
      position: 'absolute',
      bottom: 18,
      left: 40,
      right: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerText: {
      fontSize: 8,
      color: '#9aa0b2',
      fontFamily: 'Helvetica',
    },
    certIdText: {
      fontSize: 8,
      color: '#9aa0b2',
      fontFamily: 'Helvetica',
      fontStyle: 'italic',
    },
  })
}

export function Certificate({ name, courseTitle, courseSubtitle, accent, score, sessions, levels, hours, date, certId }) {
  const s = CertStyles(accent || '#a78bfa')

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={s.page}>
        <View style={s.accentBarTop} />

        <View style={s.body}>
          <View style={s.navRow}>
            <Text style={s.brandText}>BrainWave</Text>
            <Text style={s.scoreText}>Score: {score}%</Text>
          </View>

          <View style={s.dashedRule} />

          <View style={s.centerBlock}>
            <Text style={s.certOfCompletion}>Certificate of Completion</Text>
            <Text style={s.thisConfirms}>This certifies that</Text>
            <View style={s.nameBox}>
              <Text style={s.nameText}>{name || 'Your Name'}</Text>
            </View>
            <Text style={s.hasCompleted}>has successfully completed</Text>
            <Text style={s.courseTitle}>{courseTitle}</Text>
            <Text style={s.courseSubtitle}>{courseSubtitle}</Text>
          </View>

          <View style={s.dashedRule} />

          <View style={s.statsRow}>
            {hours && (
              <View style={s.statItem}>
                <Text style={s.statNum}>{hours}</Text>
                <Text style={s.statLbl}>Hours</Text>
              </View>
            )}
            {sessions && (
              <View style={s.statItem}>
                <Text style={s.statNum}>{sessions}</Text>
                <Text style={s.statLbl}>Sessions</Text>
              </View>
            )}
            {levels && (
              <View style={s.statItem}>
                <Text style={s.statNum}>{levels}</Text>
                <Text style={s.statLbl}>Levels</Text>
              </View>
            )}
            {score !== undefined && (
              <View style={s.statItem}>
                <Text style={s.statNum}>{score}%</Text>
                <Text style={s.statLbl}>Score</Text>
              </View>
            )}
          </View>
        </View>

        <View style={s.accentBarBottom} />

        <View style={s.footerRow}>
          <Text style={s.footerText}>brainwave.app · Free Learning Hub · {date}</Text>
          <Text style={s.certIdText}>{certId}</Text>
        </View>
      </Page>
    </Document>
  )
}
