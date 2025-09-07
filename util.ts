export const grpahCMSImageLoader = ({ src }) => src;

// Consistent date formatting to prevent hydration mismatches
export const formatDate = (dateString: string, format: string) => {
  // Use built-in Date methods to ensure consistent server/client rendering
  const date = new Date(dateString);
  
  switch (format) {
    case 'MM DD, YYYY':
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }).replace(/\/(\d{2})\/(\d{2})\/(\d{4})/, '$1 $2, $3');
    
    case 'MMM DD, YYYY':
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      });
    
    case 'MMMM Do YYYY':
      const day = date.getDate();
      const suffix = getDaySuffix(day);
      return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      }).replace(/, (\d{4})/, ` ${day}${suffix} $1`);
    
    default:
      return date.toLocaleDateString('en-US');
  }
};

const getDaySuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};
