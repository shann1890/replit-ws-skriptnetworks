import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Search,
  Filter
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Article } from '@shared/schema';

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // todo: remove mock functionality - Fetch articles from API
  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  const filteredArticles = articles.filter(article => {
    const tags = Array.isArray(article.tags) ? article.tags : [];
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(articles.map(article => article.category)));

  const formatDate = (dateString: string | Date) => {
    return new Date(dateString).toLocaleDateString('en-MY', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const readArticle = (articleId: string) => {
    // Open external blog in new tab
    window.open(`https://blog.skriptnetworks.com/article/${articleId}`, '_blank');
  };

  if (isLoading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technology Insights & Updates
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest technology trends, cybersecurity updates, 
            and practical IT solutions from our team of experts.
          </p>
        </div>

        {/* Search and Filter - Simplified on mobile */}
        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-blog-search"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="whitespace-nowrap flex-shrink-0"
                data-testid="filter-all"
              >
                <Filter className="w-4 h-4 mr-2" />
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap flex-shrink-0"
                  data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              {searchTerm || selectedCategory 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Check back soon for new tech insights and updates.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover-elevate h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.createdAt)}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Tags */}
                  {(() => {
                    const tags = Array.isArray(article.tags) ? article.tags : [];
                    return tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tags.slice(0, 3).map((tag: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                        {tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    );
                  })()}
                  
                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => readArticle(article.id)}
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    data-testid={`button-read-article-${article.id}`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-chart-2/10 to-primary/10 rounded-2xl p-8 border border-chart-2/20">
            <h3 className="text-2xl font-bold mb-4">Explore Our Complete Blog</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Visit our dedicated blog platform for more in-depth articles, tutorials, 
              and the latest updates in cybersecurity, networking, and IT solutions.
            </p>
            <Button 
              onClick={() => window.open('https://blog.skriptnetworks.com', '_blank')}
              className="bg-gradient-to-r from-chart-2 to-primary"
              data-testid="button-visit-full-blog"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Visit Full Blog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}